import React, { Component } from 'react';
import Table from '../Table';
import Detail from '../Detail';
import AddUser from '../AddUser';
import { USER_FETCH_SUCCESS, SELECT_USER, ADD_USER, SHOW_TABLE } from './actions'

const initalState = {
    selectedUser: undefined,
    users: [],
    currentPage: <Table />
}
function reducer(state = initalState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case USER_FETCH_SUCCESS:
            return { ...state, users: action.payload }
        case SELECT_USER:
            return { ...state, selectedUser: action.payload, currentPage: <Detail /> }
        case ADD_USER:
            return { ...state, currentPage: <AddUser /> }
        case SHOW_TABLE:
            return {...state, currentPage: <Table /> }
        default:
            return state;
    }
}
export default reducer;