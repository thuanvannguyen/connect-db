import { getPosts } from '@/lib/data'
import React from 'react'

const Blog = async () => {
  const posts = await getPosts();
  console.log(posts);
  console.log("123");
  return (
    <div>Blog</div>
  )
}

export default Blog