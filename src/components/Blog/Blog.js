export default function Blog({ name, author, id, content, liked }) {
  return (
    <li key={id} className="blog">
      <div className="card card-shadow vertical-card">
        <div className="card-header"></div>
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-subtext">by {author}</div>
          <div className="card-description">{content.slice(0, 30)}...</div>
        </div>
        <div className="card-buttons">
          <button className="btn btn-primary">READ</button>
          <button className="btn btn-outline-secondary">DELETE</button>
          <i className={liked ? "fas fa-heart" : "far fa-heart"}></i>
        </div>
      </div>
    </li>
  );
}
