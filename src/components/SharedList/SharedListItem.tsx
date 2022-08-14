import React, { FC } from 'react';
import Author from '../Core/Author';
import Card from '../Core/Card';
import Description from '../Core/Description';
import Title from '../Core/Title';
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import { TUserInteraction } from "../../types/user";

export type TData = {
  _id: string,
  url: string,
  title: string,
  description: string
  createdBy: string
  thumbUp?: number
  thumbDown?: number
  interaction?: TUserInteraction
}


const SharedListItem: FC<TData> = ({
                                     _id,
                                     url,
                                     title,
                                     description,
                                     createdBy,
                                     thumbDown = 0,
                                     thumbUp = 0,
                                     interaction
                                   }) => {
  return (
    <div>
      <header className="row shared-list-item">
        <div>
          <iframe width="320" height="215" style={{border: 'none'}}
                  src={url}>
          </iframe>
        </div>
        <Card>
          <Title title={title} id={_id} interaction={interaction}/>
          <Author createdBy={createdBy}/>
          <div className={'row'}>
            <div className={'reaction'}><span>{thumbUp}</span> <FaRegThumbsUp/></div>
            <div className={'reaction'}><span>{thumbDown}</span> <FaRegThumbsDown/></div>
          </div>
          <Description description={description}/>
        </Card>
      </header>
    </div>
  );
}

export default SharedListItem;
