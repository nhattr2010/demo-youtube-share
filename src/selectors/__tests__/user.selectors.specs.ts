import { selectUser, selectUserData, selectUserLoggingIn } from "../user";
import { MOCK_USER } from "../../mock/user";
import { EReducerNamespaces } from "../../constants/reducerNamespaces";
import { IApplicationState } from "../../types/applicationState";


const mockState: IApplicationState = {
  [EReducerNamespaces.User]: {
    data: {...MOCK_USER},
    loggingIn: false,
  },
};
describe('userSelector', () => {
  it('should return user for selectUserData', () => {
    expect(selectUserData(mockState)).toEqual(MOCK_USER);
  });

  it('should return user logging in state for selectUserLoggingIn', () => {
    expect(selectUserLoggingIn(mockState)).toEqual(false);
  });
});
