import React, { FC } from 'react';

interface TAuthorProps {
  createdBy: string
}

const Author: FC<TAuthorProps> = ({createdBy}) => {
  return (
    <div className={'description'}>
      <span>Shared by: {createdBy}</span>
    </div>
  );
}

export default Author;
