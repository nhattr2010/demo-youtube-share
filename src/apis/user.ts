import { TUser } from "../types/user";

export const Login = async (email: string, password: string): Promise<TUser> => {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email, password, password_confirm: password}),
  };
  const response = await fetch('http://localhost:3001/api/v1/user', requestOptions);
  return await response.json();
}
