import ItemCard from './ItemCard'

const patterns = [
  {
    title: 'Floral Midi Dress',
    vendor: 'Free People',
    category: 'Dresses',
    status: 'Fresh Sample',
    statusColor: '#7c3aed',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    tags: ['Floral', 'Midi', 'Summer'],
  },
  {
    title: 'Ribbed Knit Cardigan',
    vendor: 'Everlane',
    category: 'Sweaters',
    status: 'Reviewing',
    statusColor: '#f59e0b',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=900&q=80',
    tags: ['Knit', 'Relaxed', 'Neutral'],
  },
  {
    title: 'Oversized Denim Jacket',
    vendor: "Levi's",
    category: 'Outerwear',
    status: 'In Development',
    statusColor: '#8b5cf6',
    image: 'https://images.unsplash.com/photo-1495121605193-b116b5b9c5d4?auto=format&fit=crop&w=900&q=80',
    tags: ['Denim', 'Oversized', 'Street'],
  },
  {
    title: 'Linen Blend Shirt',
    vendor: 'Madewell',
    category: 'Shirts',
    status: 'New Arrival',
    statusColor: '#10b981',
    image: 'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=900&q=80',
    tags: ['Lightweight', 'Classic', 'Wearable'],
  },
  {
    title: 'Cashmere Beanie',
    vendor: 'Naadam',
    category: 'Accessories',
    status: 'Ready',
    statusColor: '#6366f1',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=900&q=80',
    tags: ['Cozy', 'Soft', 'Minimal'],
  },
  {
    title: 'Tie Waist Trousers',
    vendor: 'Zara',
    category: 'Bottoms',
    status: 'Sampled',
    statusColor: '#0ea5e9',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=900&q=80',
    tags: ['Tailored', 'Workwear', 'Neutral'],
  },
]

export default function Gallery() {
  return (
    <main className="gallery">
      <div className="page-head">
        <div>
          <h1 className="page-title">Sample Gallery</h1>
          <p className="subhead">Manage and track product samples from vendors.</p>
        </div>

        <button className="primary-btn">+ Upload Sample</button>
      </div>

      <section className="filters">
        <input className="search-input" placeholder="Search by name, vendor, style..." />
        <select className="select">
          <option>Status: All</option>
          <option>Fresh Sample</option>
          <option>Reviewing</option>
          <option>In Development</option>
        </select>
        <select className="select">
          <option>Category: All</option>
          <option>Dresses</option>
          <option>Sweaters</option>
          <option>Outerwear</option>
        </select>
        <select className="select">
          <option>Date: All Time</option>
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
        </select>
      </section>

      <div className="card-grid">
        {patterns.map((item) => (
          <ItemCard key={item.title} {...item} />
        ))}
      </div>
    </main>
  )
}
