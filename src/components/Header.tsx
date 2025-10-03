"use client"

import "./Header.css"

interface HeaderProps {
  onToggleSidebar: () => void
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <button className="menu-button" onClick={onToggleSidebar} aria-label="Toggle sidebar">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 4h16M2 10h16M2 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
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
