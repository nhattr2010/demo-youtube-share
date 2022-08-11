import React, { FC } from 'react';
import Author from '../Core/Author';
import Card from '../Core/Card';
import Description from '../Core/Description';
import Title from '../Core/Title';

export type TData = {
  url: string,
  title: string,
  description: string
  sharedBy: string
}


const SharedListItem: FC<TData> = ({
                                     url,
                                     title,
                                     description,
                                     sharedBy
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
          <Description description={description}/>
        </Card>
      </header>
    </div>
  );
}

export default SharedListItem;
