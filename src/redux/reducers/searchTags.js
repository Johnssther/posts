const initialState = {
    searchTags:['pet', 'dog']
};

   
function searchTags(state = initialState, action) {
    switch (action.type) {
        case 'ADD_SEARCH_TAGS':
            return action.payload

        default:
            return state;
    }
}
export default searchTags
