import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { SHOW_TABLE } from './state/actions';
import { connect } from 'react-redux'
import axios from 'axios'

class AddUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            eMail: ""
        };
        // add bindings to this
        this.addUsertoList = this.addUsertoList.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    addUsertoList() {
        const userObj = {
            username: this.state.firstName + " " + this.state.lastName,
            email: this.state.eMail,
        }
        console.log(userObj);
        axios.post('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users', userObj)
            .then((response) => {
                console.log(response.data)
                this.props.backToTable()
            }
            )

    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="row padding-vert-large padding-horiz-xlarge" >
                <h1>Add a New User </h1>
                <form>
                    <div className="row">
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_1" tabIndex="1" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                            <label htmlFor="input_1">First Name</label>
                            <span className="icon icon-sysicon-maleavatar" />
                        </div>
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_2" tabIndex="2" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                            <label htmlFor="input_2">Last Name</label>
                            <span className="icon icon-sysicon-maleavatar" />
                        </div>
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_3" tabIndex="3" name="eMail" value={this.state.eMail} onChange={this.handleChange} required />
                            <label htmlFor="input_3">Email</label>
                            <span className="icon icon-sysicon-email_1" />
                        </div>
                    </div>
                    <div className="row">
                        <button className="button btn-cta small left" onClick={this.addUsertoList}>Create</button>
                        <button className="button btn-cta tertiary small right" onClick={this.props.backToTable} >Go Back</button>
                    </div>
                </form>
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
        backToTable: () => dispatch({ type: SHOW_TABLE })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(AddUser);
