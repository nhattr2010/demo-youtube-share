import React, { FC, PropsWithChildren } from 'react';

interface TCardProps extends PropsWithChildren {
}

const Card:FC<TCardProps> = ({children}) => {
  return (
    <div className={'card'}>
      {children}
    </div>
  );
}

export default Card;
