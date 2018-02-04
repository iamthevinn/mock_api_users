import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { deleteUserFromList, loadUsers } from './state/actions';
import { connect } from 'react-redux'
import { SELECT_USER, ADD_USER, EDIT_USER } from './state/actions.js'

class Table extends Component {

    componentDidMount() {
        this.loadUsersToTable();
    }

    loadUsersToTable() {
        this.props.loadUsersToState()
    }

    deleteFromTable(userId) {
        this.props.deleteUser(userId);
        //this.loadUsersToTable();
    }

    render() {
        return (
            <div className="row padding-vert-large padding-horiz-xlarge" >
                <h1>Users</h1>
                <table className="table scrollable" >
                    <caption className="show-for-sr">Basic Table</caption>
                    <thead>
                        <tr>
                            <th width="200">Name</th>
                            <th width="200">Email</th>
                            <th width="300">Created At</th>
                            <th width="350">Actions</th>
                        </tr>
                    </thead>
                    <tbody height="500" >
                        {this.props.users.map((user) =>
                            <tr key={user.id}>
                                <td style={{ cursor: "pointer" }} onClick={() => this.props.selectUser(user)} ><a>{user.username}</a></td>
                                <td>{user.email}</td>
                                <td>{new Date(user.createdAt * 1000).toLocaleString('en-US')}</td>
                                <td className="heading-nav">
                                    <div className="heading-nav-entry" style={{ cursor: "pointer" }} onClick={() => this.props.selectUser(user)}><a>Show</a></div>
                                    <div className="heading-nav-entry" style={{ cursor: "pointer" }} onClick={() => this.props.editUser(user)}><a>Edit</a></div>
                                    <div className="heading-nav-entry" style={{ cursor: "pointer" }} onClick={() => this.deleteFromTable(user.id)}><a>Delete</a></div>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
                <div className="row padding-vert-small padding-horiz-medium">
                    <ul className="filter-nav">
                        <li className="filter-nav-entry">
                            <button onClick={this.props.addNewUser}>Add a new User</button>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => dispatch(deleteUserFromList(userId)),
        loadUsersToState: () => dispatch(loadUsers()),
        selectUser: (user) => dispatch({ type: SELECT_USER, payload: user }),
        editUser: (user) => dispatch({ type: EDIT_USER, payload: user }),
        addNewUser: (user) => dispatch({ type: ADD_USER })
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
