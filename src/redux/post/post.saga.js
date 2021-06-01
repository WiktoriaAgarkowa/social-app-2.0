import { all, takeLatest, call, put } from "redux-saga/effects";

import { addPostsToState } from './post.action';
import axios from 'axios';

export function* postSagas() {
    yield all([call(listenToApiRequest)])
}

export function* listenToApiRequest() {
    yield takeLatest('GET_ALL_POSTS', callFunctionPostRequest)
}

export function getAllPostsFunction() {

    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
    
    return axios.post(
        'https://akademia108.pl/api/social-app/post/latest',
        {},
        {'headers': headers})
        .then((res) => res.data)
        .catch((err) => {
            console.log("AXIOS ERROR: ", err);
        })
}

export function* callFunctionPostRequest() {
    const newPosts = yield call(getAllPostsFunction);
    yield put(addPostsToState(newPosts))
}

