import "./Sidebar.css"

export function Sidebar() {
  return (
    <aside className="sidebar">
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
