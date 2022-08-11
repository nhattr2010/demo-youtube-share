import React, { FC } from 'react';
import Author from '../Core/Author';
import Card from '../Core/Card';
import Description from '../Core/Description';
import Title from '../Core/Title';
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";

export type TData = {
  url: string,
  title: string,
  description: string
  sharedBy: string
  thumbUp: number
  thumbDown: number
}


const SharedListItem: FC<TData> = ({
                                     url,
                                     title,
                                     description,
                                     sharedBy,
                                     thumbDown,
                                     thumbUp
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
          <Title title={title}/>
          <Author sharedBy={sharedBy}/>
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
