import React from 'react';
import Card from '../Core/Card';
import Description from '../Core/Description';
import Title from '../Core/Title';
import SharedListItem, { TData } from './SharedListItem';

const mockData: TData[] = [{
  url: "https://www.youtube.com/embed/AJIw1FULZhw",
  title: "Lorem ipsum dolor sit amet",
  description: "thích team này vì có 2 ông này quậy nhất vui vẻ ,tình cảm mà lao động giỏi ,dám nghĩ ,dám làm. Chúc các thành viên team Châu phi mạnh khoẻ ,mỗi người phụ  trách một công việc nhưng đều hoàn thành xuất sắc.",
  sharedBy: "Nhat Truong"
},{
  url: "https://www.youtube.com/embed/AJIw1FULZhw",
  title: "Lorem ipsum dolor sit amet",
  description: "thích team này vì có 2 ông này quậy nhất vui vẻ ,tình cảm mà lao động giỏi ,dám nghĩ ,dám làm. Chúc các thành viên team Châu phi mạnh khoẻ ,mỗi người phụ  trách một công việc nhưng đều hoàn thành xuất sắc.",
  sharedBy: "Nhat Truong"
}]
const SharedList = () => {
  return (
    <div>
      {
        mockData.map((item, index) => {
          return <SharedListItem key={index} {...item} />
        })
      }
    </div>
  );
}

export default SharedList;
