import { useBlogs } from "../../context/blogContext";

export default function Blog({ name, author, id, content, liked }) {
  const [blogs, dispatch] = useBlogs();

  const deleteBlog = (id) => {
    dispatch({ type: "DELETE_BLOG", payload: id });
  };

  const likeBlog = (id) => {
    dispatch({ type: "TOGGLE_LIKE", payload: id });
  };

  return (
    <li key={id} className="blog">
      <div className="card card-shadow vertical-card">
        <div className="card-header"></div>
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-subtext">by {author}</div>
          <div className="card-description">{content.slice(0, 30)}...</div>
        </div>
        <div className="card-buttons flex-row align-center">
          <button className="btn btn-primary">READ</button>
          <button
            onClick={() => deleteBlog(id)}
            className="btn btn-outline-secondary"
          >
            DELETE
          </button>
          <i
            onClick={() => likeBlog(id)}
            className={liked ? "fas fa-heart" : "far fa-heart"}
            style={{ fontSize: "1.5rem", cursor: "pointer", color: "red" }}
          ></i>
        </div>
      </div>
    </li>
  );
}
