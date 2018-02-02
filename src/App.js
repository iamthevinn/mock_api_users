import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { loadUsers } from './state/actions';
import { connect } from 'react-redux';
import Table from './Table';

class App extends Component {

  // componentDidMount() {
  //   this.props.loadUsersToState()
  // }

  render() {
    return (
      this.props.pageToDisplay
    )};
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    pageToDisplay: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
