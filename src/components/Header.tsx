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

  const onHomeClick = useCallback(() => {
    navigate(ERoute.Home);
  }, [navigate])

  const onShareClick = useCallback(() => {
    navigate(ERoute.Share);
  }, [navigate])

  const onLogout = useCallback(() => {
    dispatch(logout())
  }, [dispatch])
  return (
    <div>
      <header className="row app-header">
        <div onClick={onHomeClick} data-testid={'title'} className={'pointer'}>
          Funny Movies
        </div>
        <div className={'row'}>
          {user?.email ? <div data-testid={'user-info'}>
            <span className={'header-email'}>Welcome <b>{user.email}</b></span>
            <button onClick={onShareClick} data-testid={'share-btn'}>Share a movie</button>
            <button onClick={onLogout} data-testid={'logout-btn'}>Log out</button>
          </div> : <AuthForm/>
          }
        </div>
      </header>
    </div>
  );
}

export default Header;
