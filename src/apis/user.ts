import { TUser } from "../types/user";

export const Login = async (email: string, _password: string): Promise<TUser> => {
  return new Promise<TUser>((resolve) => {
    setTimeout(() => {
      resolve({
        email
      });
    }, 1000);
  })
}
