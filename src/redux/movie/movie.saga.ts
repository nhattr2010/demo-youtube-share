import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_LIST, SHARE_MOVIE } from "./movie.const";
import { SagaIterator } from "redux-saga";
import {
  getSharedMoviesFailure,
  getSharedMoviesStart,
  getSharedMoviesSuccess,
} from "./movie.action";
import { TMovieRes, TQueryAction } from "./movie.type";
import { getList as getListAPI } from "../../apis/movie";
import { EAPIStatus } from "../../constants/apis";

export function* performGetList(action: TQueryAction) {
  yield put(getSharedMoviesStart())
  try {
    const {
      offset,
      limit
    } = action.payload
    const response: TMovieRes = yield call(getListAPI, offset, limit);
    if (response.status === EAPIStatus.Success) {
      yield put(getSharedMoviesSuccess(response.data));
    }
  } catch (error) {
    yield put(getSharedMoviesFailure());
  }
}

export function* movieSaga(): SagaIterator {
  yield takeLatest(GET_LIST, performGetList);
}
