const initalState = {
    users: [],
    pageToDisplay: ""
}
function reducer(state = initalState, action) {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case PAGE_LOADS:
            return {...state,pageToDisplay: "table"}
        default:
            return state;
    }
}
export default reducer;