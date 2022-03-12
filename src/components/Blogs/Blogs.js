import { useBlogs } from "../../context/blogContext";
import Blog from "../Blog/Blog";

export default function Blogs() {
  const [{ blogs }] = useBlogs();
  return (
    <>
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          name={blog.name}
          author={blog.author}
          id={blog.id}
        />
      ))}
    </>
  );
}
