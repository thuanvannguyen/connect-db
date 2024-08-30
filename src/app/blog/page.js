
const getData = async () => {
  const res = await fetch("http://localhost:3001/api/blog", { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};
const Blog = async () => {
  const posts = await getData();

  // const posts = await getPosts();
  console.log("posts 123", posts);
  return (
    <div>Blog</div>
  )
}

export default Blog



