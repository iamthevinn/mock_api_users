import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { loadUsers, SHOW_TABLE } from './state/actions';
import { connect } from 'react-redux'


class Detail extends Component {

  componentDidMount() {
    this.props.loadUsersToState()
  }

  render() {
    return (
        <div className="App">
            <h1>User ID: {this.props.user.id} </h1>
            <div>Full Name {this.props.user.username}</div>
            <div>Email {this.props.user.email}</div>
            <div>Created At {this.props.user.createdAt}</div>
            <button onClick={this.props.backToTable}>back to userpage</button>
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
        backToTable: () => dispatch({type: SHOW_TABLE})
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
