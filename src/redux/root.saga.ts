import { fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { userSaga } from './user/user.saga';
import { movieSaga } from "./movie/movie.saga";

export default function* rootSaga(): SagaIterator {
  yield fork(userSaga);
  yield fork(movieSaga);
}
