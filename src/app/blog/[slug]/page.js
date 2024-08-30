

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3001/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};


const Detail = async ({ params }) => {
  const { slug } = params;
  const post = await getData(slug);
  console.log("Chi tiết", post);
  // const post = await getPost(slug);
  return (
    <div>Detail</div>
  )
}

export default Detail