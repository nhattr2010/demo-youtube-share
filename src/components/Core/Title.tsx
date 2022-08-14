import React, { FC, useCallback, useState } from 'react';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";
import { selectUserData } from "../../selectors/user";
import { useDispatch, useSelector } from "react-redux";
import { TUserInteraction } from "../../types/user";
import { interact as interactAPI } from "../../apis/interaction";
import { EAPIStatus } from "../../constants/apis";
import { TUserInteractRes } from "../../redux/user/user.type";
import { interactSuccess } from "../../redux/user/user.action";

interface TTitleProps {
  id: string,
  title: string,
  interaction?: TUserInteraction
}

const Title: FC<TTitleProps> = ({id, title, interaction}) => {
  const user = useSelector(selectUserData)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onInteraction = useCallback(async (value: number) => {
    if (user?._id) {
      setLoading(true);
      try {
        const interactionRes: TUserInteractRes = await interactAPI(id, user._id, value);
        if (interactionRes.status === EAPIStatus.Success) {
          dispatch(interactSuccess(interactionRes.data));
        }
        setLoading(false);
      } catch (e) {
        console.log(e)
        setLoading(false);
      }
    }
  }, [dispatch, id, user?._id])

  return (
    <div className={'row title-container'}>
      <span className={'title'}>{title}</span>
      {
        user && !loading ?
          <div>
            <span className={'icon'}>
              {
                interaction ?
                  interaction.value > 0 ? <FaThumbsUp size={18}/> : <FaThumbsDown size={18}/> : <>
                    <button onClick={() => onInteraction(1)}><FaThumbsUp size={18}/></button>
                    <button onClick={() => onInteraction(-1)}><FaThumbsDown size={18}/></button>
                  </>
              }
            </span>

          </div> : null
      }
    </div>
  );
}

export default Title;
