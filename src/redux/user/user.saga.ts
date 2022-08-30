import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_INTERACTION, LOGIN } from "./user.const";
import { SagaIterator } from "redux-saga";
import { getInteractionSuccess, loginFailure, loginStart, loginSuccess } from "./user.action";
import { TGetInteractionsAction, TLoginAction, TUserInteractionsRes, TUserRes } from "./user.type";
import { Login as loginAPI } from "../../apis/user";
import { EAPIStatus } from "../../constants/apis";
import { getInteractions as getInteractionsAPI } from "../../apis/interaction";

export function* performLogin(action: TLoginAction) {
  yield put(loginStart())
  try {
    const {
      email,
      password
    } = action.payload
    const response: TUserRes = yield call(loginAPI, email, password);
    if (response.status === EAPIStatus.Success) {
      yield put(loginSuccess(response.data));
    }
  } catch
    (error) {
    yield put(loginFailure());
  }
}

export function* performGetInteraction(action: TGetInteractionsAction) {
  try {
    const {
      userId,
      movies
    } = action.payload
    const response: TUserInteractionsRes = yield call(getInteractionsAPI, userId, movies);
    if (response.status === EAPIStatus.Success) {
      yield put(getInteractionSuccess(response.data));
    }
  } catch
    (error) {
    yield put(loginFailure());
  }
}

export function* userSaga(): SagaIterator {
  yield takeLatest(LOGIN, performLogin);
  yield takeLatest(GET_INTERACTION, performGetInteraction);
}
