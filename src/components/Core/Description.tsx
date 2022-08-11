import React, { FC } from 'react';

interface TDescriptionProps {
  description: string
}

const Description:FC<TDescriptionProps> = ({description}) => {
  return (
    <div className={'description'}>
      <span>{description}</span>
    </div>
  );
}

export default Description;
