import React, { FC } from 'react';
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

interface TTitleProps {
  title: string
}

const Title:FC<TTitleProps> = ({title}) => {
  return (
    <div className={'row title-container'}>
      <span className={'title'}>{title}</span>
      <div>
        <button><FaThumbsUp size={18}/></button>
        <button><FaThumbsDown size={18}/></button>
      </div>
    </div>
  );
}

export default Title;
