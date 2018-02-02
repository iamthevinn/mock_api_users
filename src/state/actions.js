import axios from 'axios'

export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS"
export const SELECT_USER = "SELECT_USER"
export const ADD_USER = "ADD_USER"
export const SHOW_TABLE = "SHOW_TABLE"
export const EDIT_USER = "EDIT_USER"
export const DELETE_USER = "DELETE_USER"

export function loadUsers() {
  return (dispatch, getState, api) => {
    axios.get('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')
      .then(({ data: users }) => {
        dispatch({type: USER_FETCH_SUCCESS, payload: users})
      })
  }
}

function getUsers() {
  return (dispatch, getState, api) => {
    axios.get('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')
      .then(({ data: users }) => {
        console.log("in get users")
        dispatch({type: USER_FETCH_SUCCESS, payload: users})
      })
  }
}

export function deleteUserFromList(userId){
  return (dispatch, getState, api) => {
  axios.delete('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users/' + userId)
    .then((response) => {

      dispatch({type: DELETE_USER, payload: response.data})

      axios.get('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')
      .then(({ data: users }) => {
        console.log("in get users")
        dispatch({type: USER_FETCH_SUCCESS, payload: users})
      })
    }
    )
  }
}