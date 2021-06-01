import { postTypes } from './post.types';

const INITIAL_SATE = {
    posts: []
};

const postReducer = (state=INITIAL_SATE, action) => {
    switch(action.type) {
        case postTypes.ADD_POSTS_TO_STATE: 

            let newState = action.payload

            return {
                ...state,
                posts: newState
            };

        default:
            return state
    }
}

export default postReducer;