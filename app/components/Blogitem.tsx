import React from 'react'

type props= {
  id: string;
  title: string;
  desc: string;
  imageUrl: string;
  createdAt: string;
  categoryId: string;
  location: string;
}

const  BlogItem =(props:props)=> {
  return (
    <div>{props.title}</div>
  )
}
export default BlogItem;
