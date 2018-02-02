import { USER_FETCH_SUCCESS } from './actions'

const initalState = {
    users: [],
    pageToDisplay: "table"
}
function reducer(state = initalState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case USER_FETCH_SUCCESS:
            return {...state, users: action.payload}
        default:
            return state;
    }
}
export default reducer;