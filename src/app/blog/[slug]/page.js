import { getPost } from '@/lib/data';
import React from 'react'

const Detail = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  console.log("Chi tiết", post);
  return (
    <div>Detail</div>
  )
}

export default Detail