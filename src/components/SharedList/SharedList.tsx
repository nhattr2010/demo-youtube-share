import React, { useCallback, useEffect } from 'react';
import SharedListItem from './SharedListItem';
import { useDispatch, useSelector } from "react-redux";
import { selectMovieVotes, selectSharedMovies } from "../../selectors/movie";
import { getSharedMovies } from "../../redux/movie/movie.action";
import { selectUserData, selectUserInteractions } from "../../selectors/user";
import { getInteractions } from '../../redux/user/user.action';
import ReactPaginate from "react-paginate";
import { ROW_PER_PAGE } from "../../constants/common";

const SharedList = () => {
  const dispatch = useDispatch();
  const {list: sharedMovies, total} = useSelector(selectSharedMovies)
  const sharedMovieVotes = useSelector(selectMovieVotes)
  const userInteractions = useSelector(selectUserInteractions)
  const user = useSelector(selectUserData)

  useEffect(() => {
    if (dispatch) {
      dispatch(getSharedMovies({offset: 0, limit: ROW_PER_PAGE}))
    }
  }, [dispatch])

  useEffect(() => {
    if (user?._id && sharedMovies.length) {
      dispatch(getInteractions(user._id, sharedMovies.map(sharedMovie => sharedMovie._id)))
    }
  }, [dispatch, user, sharedMovies]);

  const onPageChange = useCallback(({selected}: { selected: number }) => {
    if (dispatch) {
      dispatch(getSharedMovies({offset: selected * ROW_PER_PAGE, limit: ROW_PER_PAGE}))
    }
  }, [dispatch])
  return (
    <div>
      {
        sharedMovies.length ?
          sharedMovies.map((item) => {
            return <SharedListItem key={item._id}
                                   {...item}
                                   {...sharedMovieVotes[item._id]}
                                   interaction={userInteractions[item._id]}/>
          }) :
          <span data-testid={'nodata'}>No data</span>
      }
      <div className={'row center'}>
        {
          total > 1 ? <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={onPageChange}
            pageRangeDisplayed={5}
            pageCount={Math.ceil(total / ROW_PER_PAGE)}
            containerClassName="pagination"
            previousLabel="Previous"
          /> : null
        }
      </div>
    </div>
  );
}

export default SharedList;
