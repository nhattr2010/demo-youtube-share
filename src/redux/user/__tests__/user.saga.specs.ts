import { loginFailure, loginStart, loginSuccess } from "../user.action";
import { MOCK_USER } from "../../../mock/user";
import { testSaga } from "redux-saga-test-plan";
import { Login as loginAPI } from "../../../apis/user";
import { performLogin } from "../user.saga";
import { LOGIN } from "../user.const";

const mockLoginAction = {
  type: LOGIN,
  payload: {
    email: MOCK_USER.email,
    password: 'password',
  }
}

describe('UserSaga', () => {
  it('Handle successful flow', () => {
    testSaga(performLogin, mockLoginAction)
      .next()
      .put(loginStart())
      .next()
      .call(loginAPI, MOCK_USER.email, 'password')
      .next(MOCK_USER)
      .put(loginSuccess(MOCK_USER))
      .next()
      .isDone()
  });

  it('Handle failure flow', () => {
    testSaga(performLogin, mockLoginAction)
      .next()
      .put(loginStart())
      .next()
      .call(loginAPI, MOCK_USER.email, 'password')
      .throw(new Error('Error'))
      .put(loginFailure())
      .next()
      .isDone()
  });

});
