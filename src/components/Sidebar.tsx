import "./Sidebar.css"

interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <nav className="sidebar-nav">
        <a href="#" className="sidebar-link active">
          <span className="sidebar-icon">📊</span>
          <span className="sidebar-text">Dashboard</span>
        </a>
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">📁</span>
          <span className="sidebar-text">Projects</span>
        </a>
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">👥</span>
          <span className="sidebar-text">Team</span>
        </a>
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">📈</span>
          <span className="sidebar-text">Analytics</span>
        </a>
        <a href="#" className="sidebar-link">
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Settings</span>
        </a>
      </nav>
    </aside>
  )
}
