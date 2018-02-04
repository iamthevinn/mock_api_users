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
                <h1>Edit User: {this.props.user.id}</h1>
                <form>
                    <div className="row">
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_1" tabIndex="1" name="firstName" value={this.state.firstName} onChange={this.handleChange} required />
                            <label htmlFor="input_1">First Name</label>
                            <span className="icon icon-sysicon-edit" />
                        </div>
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_2" tabIndex="2" name="lastName" value={this.state.lastName} onChange={this.handleChange} required />
                            <label htmlFor="input_2">Last Name</label>
                            <span className="icon icon-sysicon-edit" />
                        </div>
                        <div className="small-12 columns md-text-field with-floating-label icon-left" >
                            <input type="text" id="input_3" tabIndex="3" name="eMail" value={this.state.eMail} onChange={this.handleChange} required />
                            <label htmlFor="input_3">Email</label>
                            <span className="icon icon-sysicon-edit" />
                        </div>
                    </div>
                </form>
                <div className="row padding-vert-small padding-horiz-medium">
                    <button className="button btn-cta small" onClick={this.updateUser}>Update</button>
                </div>
                <div className="row padding-vert-small padding-horiz-medium">
                    <ul className="filter-nav">
                        <li className="filter-nav-entry">
                            <button onClick={() => this.props.showUser(this.props.user)}>Show</button>
                        </li>
                        <li className="filter-nav-entry">
                            <button onClick={this.props.backToTable} >Go Back</button>
                        </li>
                     </ul>
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
