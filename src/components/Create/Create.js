import { useState } from "react";
import { useBlogs } from "../../context/blogContext";
import { v4 as uuidv4 } from "uuid";

export default function Create() {
  const [blogs, dispatch] = useBlogs();

  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_BLOG",
      payload: { name, author, id: new Date().getTime(), content, liked: false }
    });
    setAuthor("");
    setName("");
    setContent("");
  };

  return (
    <div>
      <form
        className="create-blog flex-column align-center justify-center"
        onSubmit={formSubmitHandler}
      >
        <label>Author</label>
        <input
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          type="text"
          required
        />
        <label>Blog Title</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
        <label>Blog Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Enter Text Here"
          required
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
