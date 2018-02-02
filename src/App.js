import React, { Component } from 'react';
import './ui-toolkit/css/nm-cx/main.css';
import './App.css';

class App extends Component {
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
                  <tr>
                      <td>Rent</td>
                      <td>$1,480</td>
                      <td>Monthly</td>
                      <td>dummy</td>
                  </tr>
                  <tr>
                      <td>Resident Service Fee</td>
                      <td>$51</td>
                      <td>Monthly</td>
                      <td>dummy</td>
                  </tr>
                  <tr>
                      <td>Cell Phone</td>
                      <td>$90</td>
                      <td>Monthly</td>
                      <td>dummy</td>
                  </tr>
              </tbody>
          </table>
          <button>Add a new User</button>
      </div>
    );
  }
}

export default App;
