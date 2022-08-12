import { call, put, takeLatest } from 'redux-saga/effects';
import { LOGIN } from "./user.const";
import { SagaIterator } from "redux-saga";
import { loginFailure, loginStart, loginSuccess } from "./user.action";
import { TLoginAction } from "./user.type";
import { Login as loginAPI } from "../../apis/user";
import { TUser } from "../../types/user";

function* performLogin(action: TLoginAction) {
  yield put(loginStart())
  try {
    const {
      email,
      password
    } = action.payload
    const response: TUser = yield call(loginAPI, email, password);
    if (response) {
      yield put(loginSuccess(response));
    }
  } catch (error) {
    yield put(loginFailure());
  }
}

export function* userSaga(): SagaIterator {
  yield takeLatest(LOGIN, performLogin);
}
