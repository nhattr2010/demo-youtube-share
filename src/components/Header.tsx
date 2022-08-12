import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { ERoute } from "../constants/route";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../selectors/user";
import AuthForm from "./AuthForm/AuthForm";
import { logout } from "../redux/user/user.action";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(selectUserData)
  const onShareClick = useCallback(() => {
    navigate(ERoute.Share);
  }, [navigate])

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])

  return (
    <div>
      <header className="row app-header">
        <div>
          Funny Movies
        </div>
        <div className={'row'}>
          {user.email ? <>
            <span className={'header-email'}>Welcome <b>{user.email}</b></span>
            <button onClick={onShareClick}>Share a movie</button>
            <button onClick={onLogout}>Log out</button>
          </> : <AuthForm/>
          }
        </div>
      </header>
    </div>
  );
}

export default Header;
