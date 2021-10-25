const initialState = {
    data:[],
    limit: 0,
    page: 0,
    total: 0,
};

   
function posts(state = initialState, action) {
    switch (action.type) {
        case 'ADD_POSTS':
            return action.payload

        default:
            return state;
    }
}
export default posts
