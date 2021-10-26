import { combineReducers } from 'redux';

import posts from './posts';
import user from './user';
import searchTags from './searchTags';
const rootReducer = combineReducers({
    posts,
    user,
    searchTags,
})

export default rootReducer
