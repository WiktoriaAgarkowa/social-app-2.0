import { all, call } from "redux-saga/effects";
import { postSagas } from "./post/post.saga";

export default function* rootSaga() {
  yield all([call(postSagas)]);
}
