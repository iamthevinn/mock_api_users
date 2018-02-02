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

  loadUsersToTable(){
    this.props.loadUsersToState()
  }

  deleteFromTable(userId) {
    this.props.deleteUser(userId);
    //this.loadUsersToTable();
  }

 
  render() {
    return (
        <div className="App">
            <h1>Users</h1>
            <table className="table" summary="This summary is for screen readers and should summarize the structure of the table headers and rows">
                <caption className="show-for-sr">Basic Table</caption>
                <thead>
                    <tr>
                        <th width="200">Name</th>
                        <th width="200">Email</th>
                        <th width="300">Created At</th>
                        <th width="350">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) =>
                        <tr key={user.id}>
                            <td onClick={() => this.props.selectUser(user)} >{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>
                                <div onClick={() => this.props.selectUser(user)}>Show</div>
                                <div onClick={() => this.props.editUser(user)}>Edit</div>
                                <div onClick={() => this.deleteFromTable(user.id)}>Delete</div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
            <button onClick={this.props.addNewUser}>Add a new User</button>
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
        selectUser: (user) => dispatch({type: SELECT_USER, payload: user}),
        editUser: (user) => dispatch({type: EDIT_USER, payload: user}),
        addNewUser: (user) => dispatch({type: ADD_USER})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
