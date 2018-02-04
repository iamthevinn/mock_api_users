import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { SHOW_TABLE, SELECT_USER } from './state/actions';
import { connect } from 'react-redux'
import axios from 'axios'

class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            firstName: this.props.user.username.substr(0, this.props.user.username.indexOf(' ')),
            lastName: this.props.user.username.substr(this.props.user.username.indexOf(' ') + 1),
            eMail: this.props.user.email
        }
        // add bindings to this
        this.updateUser = this.updateUser.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    updateUser() {
        const userObj = {
            username: this.state.firstName + " " + this.state.lastName,
            email: this.state.eMail,
        }
        axios.put('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users/' + this.props.user.id, userObj)
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
                <div className="card">
                    <h1>Edit User: {this.props.user.id}</h1>
                    <div>First Name
                <input name="firstName" value={this.state.firstName} onChange={this.handleChange} ></input>
                    </div>
                    <div>Last Name
                <input name="lastName" value={this.state.lastName} onChange={this.handleChange}></input>
                    </div>
                    <div>Email
                <input name="eMail" value={this.state.eMail} onChange={this.handleChange}></input>
                    </div>
                </div>
                <div className="row padding-vert-large padding-horiz-large">
                    <button className="button btn-cta small" onClick={this.updateUser}>Update</button>
                    <button className="button btn-cta small" onClick={() => this.props.showUser(this.props.user)}>Show</button>
                    <button className="button btn-cta tertiary small right" onClick={this.props.backToTable} >Go Back</button>
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
        backToTable: () => dispatch({ type: SHOW_TABLE }),
        showUser: (user) => dispatch({ type: SELECT_USER, payload: user })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditUser);
