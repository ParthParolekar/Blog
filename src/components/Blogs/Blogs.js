import { useBlogs } from "../../context/blogContext";
import Blog from "../Blog/Blog";

export default function Blogs() {
  const [{ blogs }] = useBlogs();
  return (
    <div className="bloglist flex-row align-center justify-center">
      {blogs.map(({ id, name, author, content, liked }) => (
        <Blog
          key={id}
          name={name}
          author={author}
          id={id}
          content={content}
          liked={liked}
        />
      ))}
    </div>
  );
}
