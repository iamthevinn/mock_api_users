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
                    <div className="row">
                        <div className="small-2 columns" ><h5>Full Name: </h5></div>
                        <div className="small-10 columns" >{this.props.user.username}</div>
                    </div>
                    <div className="row">
                        <div className="small-2 columns" ><h5>Email: </h5></div>
                        <div className="small-10 columns" >{this.props.user.email}</div>
                    </div>
                    <div className="row">
                        <div className="small-2 columns" ><h5>Created : </h5></div>
                        <div className="small-10 columns" >{new Date(this.props.user.createdAt * 1000).toLocaleString('en-US')}</div>
                    </div>
                </div>
                <div className="row padding-vert-small padding-horiz-medium">
                    <ul className="filter-nav">
                        <li className="filter-nav-entry">
                            <button onClick={() => this.props.editUser(this.props.user)}>Edit</button>
                        </li>
                        <li className="filter-nav-entry">
                            <button onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
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
        deleteUser: (userId) => dispatch(deleteUserFromList(userId)),
        loadUsersToState: () => dispatch(loadUsers()),
        backToTable: () => dispatch({ type: SHOW_TABLE }),
        editUser: (user) => dispatch({ type: EDIT_USER, payload: user }),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
