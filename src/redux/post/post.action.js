import { postTypes } from './post.types';

export function getAllPosts() {
    return {
        type: postTypes.GET_ALL_POSTS
    };
}

export function addPostsToState(value) {
    return {
        type: postTypes.ADD_POSTS_TO_STATE,
        payload: value
    }
}