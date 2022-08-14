import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user/user.action";
import { selectUserLoggingIn } from "../../selectors/user";

const AuthForm = () => {
  const dispatch = useDispatch();
  const isLoggingIn = useSelector(selectUserLoggingIn)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onSubmit = () => {
    dispatch(login({email, password}));
  }
  return (
    <>
      <input placeholder={'Email'}
             value={email}
             data-testid="email"
             onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder={'Password'}
        value={password}
        type="password"
        data-testid="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={onSubmit}
        disabled={isLoggingIn}
        data-testid="login-btn">
        Login / Register
      </button>
    </>
  );
}

export default AuthForm;
