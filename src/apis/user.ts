import { TUser } from "../types/user";
import { API_V1_ENDPOINT } from "../constants/common";

export const Login = async (email: string, password: string): Promise<TUser> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password, password_confirm: password}),
  };
  const response = await fetch(`${API_V1_ENDPOINT}/user`, requestOptions);
  return await response.json();
}
