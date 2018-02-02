import React, { Component } from 'react';
import Table from '../Table';
import Detail from '../Detail';
import AddUser from '../AddUser';
import EditUser from '../EditUser';
import { USER_FETCH_SUCCESS, SELECT_USER, ADD_USER, SHOW_TABLE, EDIT_USER, DELETE_USER } from './actions'

const initalState = {
    selectedUser: undefined,
    users: [],
    currentPage: <Table />,
    deletedUser: undefined
}
function reducer(state = initalState, action) {
    switch (action.type) {
        case USER_FETCH_SUCCESS:
            return { ...state, users: action.payload }
        case SELECT_USER:
            return { ...state, selectedUser: action.payload, currentPage: <Detail /> }
        case ADD_USER:
            return { ...state, currentPage: <AddUser /> }
        case SHOW_TABLE:
            return {...state, currentPage: <Table />, selectedUser: undefined }
        case EDIT_USER:
            return {...state, selectedUser: action.payload, currentPage: <EditUser />}
        case DELETE_USER:
            return {...state, deletedUser: action.payload, currentPage: <Table />}
        default:
            return state;
    }
}
export default reducer;