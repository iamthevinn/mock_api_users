import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { loadUsers, SHOW_TABLE, EDIT_USER } from './state/actions';
import { connect } from 'react-redux'
import axios from 'axios';


class Detail extends Component {
    constructor(props) {
        super(props);
        this.deleteUserFromList = this.deleteUserFromList.bind(this)
    }

    deleteUserFromList(){
      axios.delete('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users/' + this.props.user.id)
        .then((response) => {
          this.props.backToTable()
        }
        )
    }

  render() {
    return (
        <div className="App">
            <h1>User ID: {this.props.user.id} </h1>
            <div>Full Name {this.props.user.username}</div>
            <div>Email {this.props.user.email}</div>
            <div>Created At {this.props.user.createdAt}</div>
            <button onClick={this.props.editUser}>Edit</button>
            <button onClick={this.deleteUserFromList}>Delete</button>
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
        loadUsersToState: () => dispatch(loadUsers()),
        backToTable: () => dispatch({type: SHOW_TABLE}),
        editUser: () => dispatch({type: EDIT_USER}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
