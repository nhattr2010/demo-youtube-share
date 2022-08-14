import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from "./user.const";
import { SagaIterator } from "redux-saga";
import {
  loginFailure,
  loginStart,
  loginSuccess
} from "./user.action";
import { TLoginAction, TUserRes } from "./user.type";
import { Login as loginAPI } from "../../apis/user";
import { EAPIStatus } from "../../constants/apis";

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

export function* userSaga(): SagaIterator {
  yield takeLatest(LOGIN, performLogin);
}
