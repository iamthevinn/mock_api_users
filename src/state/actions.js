import axios from 'axios'

export const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS"

export function loadUsers() {
  return (dispatch, getState, api) => {
    console.log("in load users")
    axios.get('https://5a747e5b61c2a40012894ab4.mockapi.io/api/v1/users')
      .then(({ data: users }) => {
        console.log("in load users async")
        console.log(users)
        dispatch({type: USER_FETCH_SUCCESS, payload: users})
      })
  }
}