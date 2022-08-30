import { selectUserData, selectUserInteractions, selectUserLoggingIn } from "../user";
import { MOCK_INTERACTIONS, MOCK_USER } from "../../mock/user";
import { EReducerNamespaces } from "../../constants/reducerNamespaces";
import { IApplicationState } from "../../types/redux/applicationState";
import { appState } from "../../redux/store";


const mockState: IApplicationState = {
  ...appState,
  [EReducerNamespaces.User]: {
    data: {...MOCK_USER},
    loggingIn: false,
    interactions: {
      "1": MOCK_INTERACTIONS[0]
    }
  },
};
describe('userSelector', () => {
  it('should return user for selectUserData', () => {
    expect(selectUserData(mockState)).toEqual(MOCK_USER);
  });

  it('should return user logging in state for selectUserLoggingIn', () => {
    expect(selectUserLoggingIn(mockState)).toEqual(false);
  });

  it('should return interactions in state for selectUserInteractions', () => {
    expect(selectUserInteractions(mockState)).toEqual({
      "1": MOCK_INTERACTIONS[0]
    });
  });
});
