import React from 'react';
import SharedListItem, { TData } from './SharedListItem';

const mockData: TData[] = [{
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  sharedBy: "Nhat Truong",
  thumbDown: 21,
  thumbUp: 23
}, {
  url: "https://www.youtube.com/embed/XqZsoesa55w",
  title: "Lorem ipsum dolor sit amet",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  sharedBy: "Nhat Truong",
  thumbDown: 21,
  thumbUp: 23
},
  {
    url: "https://www.youtube.com/embed/XqZsoesa55w",
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sharedBy: "Nhat Truong",
    thumbDown: 21,
    thumbUp: 23
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
