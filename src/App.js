import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';
import { loadUsers } from './state/actions';
import { connect } from 'react-redux';
import Table from './Table';
import Detail from './Detail';

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
    pageToDisplay: state.currentPage
  };
};

export default connect(mapStateToProps)(App);
