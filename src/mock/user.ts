import { TUser, TUserInteraction } from "../types/user";

export const MOCK_USER: TUser = {
  _id: '1',
  email: 'mockemail@gmail.com'
}
export const MOCK_INTERACTIONS: TUserInteraction[] = [
  {
    _id: "1",
    movie: "1",
    user: "1",
    value: 1,
  },
  {
    _id: "2",
    movie: "2",
    user: "2",
    value: -1,
  }
]
