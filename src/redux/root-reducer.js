import { combineReducers } from 'redux';
import postReducer from './post/post.reducer';

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['cart']
// }

const rootReducer = combineReducers({
    post: postReducer
})

export default rootReducer;