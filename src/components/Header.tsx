import "./Header.css"

export function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <span className="logo-icon">🚀</span>
          <span className="logo-text">ReactVo</span>
        </div>
        <nav className="nav">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            About
          </a>
          <a href="#" className="nav-link">
            Services
          </a>
          <a href="#" className="nav-link">
            Contact
          </a>
        </nav>
        <div className="user-section">
          <button className="user-button">Profile</button>
        </div>
      </div>
    </header>
  )
}
