import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { Id } = useParams();
  return <div>Blog Post {Id}</div>;
}

export default BlogPost;
