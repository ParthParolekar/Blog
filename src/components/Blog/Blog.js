export default function Blog({ name, author, id }) {
  return (
    <li key={id}>
      <div className="card card-shadow vertical-card">
        <div className="card-content">
          <div className="card-title">{name}</div>
          <div className="card-subtext">by {author}</div>
        </div>
        <div className="card-buttons">
          <button className="btn btn-primary">READ</button>
          <button className="btn btn-outline-secondary">LIKE</button>
        </div>
      </div>
    </li>
  );
}
