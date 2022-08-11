import React, { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { ERoute } from "../constants/route";
const Header = () => {
  const navigate = useNavigate();
  const onShareClick = useCallback(() => {
    navigate(ERoute.Share);
  },[navigate])

  return (
    <div>
      <header className="row app-header">
        <div>
          Funny Movies
        </div>
        <div className={'row'}>
          {/*<span>Welcome thnhat.cse@gmail.com</span>*/}
          <input placeholder={'Email'}/>
          <input placeholder={'Password'}/>
          <button onClick={onShareClick}>Share a movie</button>
          <button>Login / Register</button>
          <button>Logout</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
