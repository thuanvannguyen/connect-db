import { getPost } from '@/lib/data';
import React from 'react'

const Detail = async ({ params }) => {
  const { slug } = params;
  // console.log(params);

  const post = await getPost(slug);
  // console.log(post);
  return (
    <div>Detail</div>
  )
}

export default Detail