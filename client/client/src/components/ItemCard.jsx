export default function ItemCard({ title, vendor, category, status, statusColor, image, tags }) {
  return (
    <article className="card">
      <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
        <span className="card-badge" style={{ backgroundColor: statusColor }}>
          {status}
        </span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-meta">{vendor} · {category}</p>
        <div className="tags">
          {tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </article>
  )
}
