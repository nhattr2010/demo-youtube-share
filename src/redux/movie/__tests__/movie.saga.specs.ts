import { testSaga } from "redux-saga-test-plan";
import { performGetList } from "../movie.saga";
import { GET_LIST } from "../movie.const";
import {
  getSharedMoviesFailure,
  getSharedMoviesStart,
  getSharedMoviesSuccess,
} from "../movie.action";
import { getList as getListAPI } from "../../../apis/movie";

const mockGetListAction = {
  type: GET_LIST,
  payload: {
    offset: 0,
    limit: 10
  }
}
const mockRes = {
  movies: [],
  totalRecord: 0,
};
describe('MovieSaga', () => {
  it('Handle getList successful flow', () => {
    testSaga(performGetList, mockGetListAction)
      .next()
      .put(getSharedMoviesStart())
      .next()
      .call(getListAPI, 0, 10)
      .next({status: 200, data: mockRes})
      .put(getSharedMoviesSuccess(mockRes))
      .next()
      .isDone();
  });

  it('Handle error status code', () => {
    testSaga(performGetList, mockGetListAction)
      .next()
      .put(getSharedMoviesStart())
      .next()
      .call(getListAPI, 0, 10)
      .next({status: 500, data: mockRes})
      .isDone();
  });

  it('Handle getList failure flow', () => {
    testSaga(performGetList, mockGetListAction)
      .next()
      .put(getSharedMoviesStart())
      .next()
      .call(getListAPI, 0, 10)
      .throw(new Error('Error'))
      .put(getSharedMoviesFailure())
      .next()
  });

});
