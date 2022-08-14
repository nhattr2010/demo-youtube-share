import React, { useCallback, useState } from 'react';
import { useSelector } from "react-redux";
import { shareMovie as shareMovieAPI } from '../apis/movie';
import { selectUserData } from "../selectors/user";
import { TMovieSharedRes } from "../redux/movie/movie.type";
import { EAPIStatus } from "../constants/apis";
import { ERoute } from "../constants/route";
import { useNavigate } from "react-router-dom";

function Share() {
  const navigate = useNavigate();
  const user = useSelector(selectUserData)
  const [loading, setLoading] = useState(false)
  const [url, setUrl] = useState('');

  const onShareClick = useCallback(async () => {
      if (user?._id && url) {
        setLoading(true)
        try {
          const sharedMovieRes: TMovieSharedRes = await shareMovieAPI(url, user._id);
          if (sharedMovieRes.status === EAPIStatus.Success) {
            navigate(ERoute.Home)
          }
          setLoading(false)
        } catch (e) {
          setLoading(false)
        }
      }
    },
    [navigate, url, user?._id]
  )

  return (
    <div className="share-form">
      <h1>Share a Youtube movie</h1>
      <div className={'row'}>
        <label>Youtube URL</label>
        <input data-testid="video-input" value={url} onChange={
          (e) => setUrl(e.target.value)
        }/>
      </div>
      <br/>
      <button onClick={onShareClick} data-testid={'share-btn'} disabled={loading}>Share</button>
    </div>
  );
}

export default Share;
