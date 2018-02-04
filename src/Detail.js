import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import { deleteUserFromList, loadUsers, SHOW_TABLE, EDIT_USER } from './state/actions';
import { connect } from 'react-redux'

class Detail extends Component {

    render() {
        return (
            <div className="row padding-vert-large padding-horiz-xlarge" >
                <div className="card">
                    <h1>User ID: {this.props.user.id} </h1>
                    <div><b>Full Name: </b>{this.props.user.username}</div>
                    <div><b>Email: </b>{this.props.user.email}</div>
                    <div><b>Created At: </b>{new Date(this.props.user.createdAt * 1000).toLocaleString('en-US')}</div>
                </div>
                <div className="row padding-vert-large padding-horiz-large">
                    <button className="button btn-cta small" onClick={() => this.props.editUser(this.props.user)}>Edit</button>
                    <button className="button btn-cta small" onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
                    <button className="button btn-cta tertiary right small" onClick={this.props.backToTable} >Go Back</button>
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
        deleteUser: (userId) => dispatch(deleteUserFromList(userId)),
        loadUsersToState: () => dispatch(loadUsers()),
        backToTable: () => dispatch({ type: SHOW_TABLE }),
        editUser: (user) => dispatch({ type: EDIT_USER, payload: user }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
