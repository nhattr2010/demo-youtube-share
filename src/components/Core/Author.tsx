import React, { FC } from 'react';

interface TAuthorProps {
  sharedBy: string
}

const Author: FC<TAuthorProps> = ({sharedBy}) => {
  return (
    <div className={'description'}>
      <span>Shared by: {sharedBy}</span>
    </div>
  );
}

export default Author;
