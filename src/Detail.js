import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { deleteUserFromList, loadUsers, SHOW_TABLE, EDIT_USER } from './state/actions';
import { connect } from 'react-redux'
import axios from 'axios';


class Detail extends Component {
    constructor(props) {
        super(props);
        //this.deleteUserFromList = this.deleteUserFromList.bind(this)
    }

    // deleteUserFromList(){
    // //   axios.delete('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users/' + this.props.user.id)
    // //     .then((response) => {
    // //       this.props.backToTable()
    // //     }
    // //     )
    // }

  render() {
    return (
        <div className="html, body">
            <div className="card">
                <h3>User ID: {this.props.user.id} </h3>
                <div>Full Name {this.props.user.username}</div>
                <div>Email {this.props.user.email}</div>
                {console.log(this.d)}
                <div>Created At {this.props.user.createdAt}</div>
                <button class="button btn-cta" onClick={() => this.props.editUser(this.props.user)}>Edit</button>
                <button className="button btn-cta tertiary" onClick={() => this.props.deleteUser(this.props.user.id)}>Delete</button>
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
        deleteUser: (userId) => dispatch (deleteUserFromList(userId)),
        loadUsersToState: () => dispatch(loadUsers()),
        backToTable: () => dispatch({type: SHOW_TABLE}),
        editUser: (user) => dispatch({type: EDIT_USER, payload: user}),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
