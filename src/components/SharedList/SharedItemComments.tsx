import React, { useCallback, useEffect, useState } from 'react';
import SharedListItem from './SharedListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovieVotes, selectSharedMovies } from '../../selectors/movie';
import { getSharedMovies } from '../../redux/movie/movie.action';
import { selectUserData, selectUserInteractions } from '../../selectors/user';
import { getInteractions } from '../../redux/user/user.action';
import ReactPaginate from 'react-paginate';
import { ROW_PER_PAGE } from '../../constants/common';

type TShareItemComments = {
  movieId: string
}
const ShareItemComments = ({
                             movieId,
                           }: TShareItemComments) => {
  const user = useSelector(selectUserData);
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const changeComment = (value: string) => {
    setComment(value);
  };
  const onSubmit = useCallback(async () => {
    setLoading(true);
    try {
      if (user && user._id) {
        submitComment({
          userId: user._id,
          comment,
          movieId,
        });
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, [comment, movieId, user._id]);
  return (
    <div>
      {/*CommentList*/}
      <div className={'row'}>
        <input
          placeholder={'Comment text'}
          value={comment}
          data-testid='comment'
          onChange={(e) => changeComment(e.target.value)}
        />
        <button
          onClick={onSubmit}
          disabled={loading}
          data-testid='login-btn'>
          Login / Register
        </button>
      </div>
    </div>

  );
};

export default ShareItemComments;
