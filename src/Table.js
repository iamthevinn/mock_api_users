import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { loadUsers } from './state/actions';
import { connect } from 'react-redux'


class Table extends Component {

  componentDidMount() {
    this.props.loadUsersToState()
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
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>stuff</td>
                        </tr>)
                    }
                </tbody>
            </table>
            <button>Add a new User</button>
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
        loadUsersToState: () => dispatch(loadUsers())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Table);
