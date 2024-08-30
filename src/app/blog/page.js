import { getPosts } from '@/lib/data'
import React from 'react'

const Blog = async () => {
  const posts = await getPosts();
  console.log("posts", posts);
  return (
    <div>Blog</div>
  )
}

export default Blog