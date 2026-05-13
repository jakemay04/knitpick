import { useState } from 'react'

const navSections = [
  {
    title: 'OPERATIONS',
    items: [
      { key: 'action', label: 'Action Center', icon: '🎯' },
      { key: 'transfers', label: 'Transfers', icon: '🔁' },
      { key: 'inventory', label: 'Inventory', icon: '📦' },
      { key: 'stores', label: 'Stores', icon: '🏬' },
      { key: 'purchase-orders', label: 'Purchase Orders', icon: '🧾' },
    ],
  },
  {
    title: 'EXPLORATION',
    items: [
      { key: 'gallery', label: 'Sample Gallery', icon: '🖼️' },
      { key: 'lifecycle', label: 'Lifecycle Logic', icon: '⚡' },
    ],
  },
  {
    title: 'ACCOUNTING',
    items: [
      { key: 'financials', label: 'Financials', icon: '💰' },
      { key: 'history', label: 'History Log', icon: '📜' },
    ],
  },
  {
    title: 'SYSTEM',
    items: [
      { key: 'config', label: 'Configuration', icon: '⚙️' },
    ],
  },
]

function NavItem({ icon, label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`nav-item ${active ? 'active' : ''}`}
    >
      <span className="nav-item-icon">{icon}</span>
      <span>{label}</span>
    </button>
  )
}

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('gallery')

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-mark">🧶</span>
          <div>
            <div className="logo-name">KnitPick</div>
            <div className="logo-subtitle">Sample management</div>
          </div>
        </div>
      </div>

      <div className="sidebar-body">
        {navSections.map((section) => (
          <div key={section.title} className="nav-section">
            <div className="nav-section-title">{section.title}</div>
            <div className="nav-section-list">
              {section.items.map((item) => (
                <NavItem
                  key={item.key}
                  icon={item.icon}
                  label={item.label}
                  active={activeTab === item.key}
                  onClick={() => setActiveTab(item.key)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="sidebar-footer">
        <button type="button" className="cta-button">
          Launch iPad App
        </button>
        <div className="profile-row">
          <div className="avatar">JD</div>
          <div>
            <div className="profile-name">Jane Doe</div>
            <div className="profile-role">Lead Planner</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
