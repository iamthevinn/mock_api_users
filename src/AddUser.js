import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { SHOW_TABLE} from './state/actions';
import { connect } from 'react-redux'
import axios from 'axios'

class AddUser extends Component {

    constructor (props) {
        super(props)
        this.state ={
            firstName: "",
            lastName: "",
            eMail: ""
        }
    // add bindings to this
    this.addUsertoList = this.addUsertoList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    }
    
  addUsertoList(){  
    const userObj = {
        username: this.state.firstName + " " + this.state.lastName,
        email: this.state.eMail,
      }
      axios.post('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users', userObj)
        .then((response) => {
          console.log(response.data)
          this.props.backToTable()
        }
        )
        
    }

    handleChange(event){
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div className="App">
                <div className="card">
                    <h1>Add a New User </h1>
                    <div>First Name
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} ></input>
                    </div>
                    <div>Last Name
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                    </div>

                    <div>Email
                <input name="eMail" value={this.state.eMail} onChange={this.handleChange}></input>
                    </div>

                    <button className="button btn-cta" onClick={this.addUsertoList}>Create</button>
                    <button className="button btn-cta tertiary" onClick={this.props.backToTable} >Go Back</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.selectedUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        backToTable: () => dispatch({type: SHOW_TABLE})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
