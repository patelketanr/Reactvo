"use client"

import "./Header.css"

interface HeaderProps {
  onToggleSidebar: () => void
}

export function Header({ onToggleSidebar }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <button className="menu-button" onClick={onToggleSidebar} aria-label="Toggle sidebar">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 4h16M2 10h16M2 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <div className="logo">
            <span className="logo-icon">🚀</span>
            <span className="logo-text">ReactVo</span>
          </div>
        </div>
        <div className="header-center">
          <div className="search-box">
            <svg
              className="search-icon"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 12.5C10.0376 12.5 12.5 10.0376 12.5 7C12.5 3.96243 10.0376 1.5 7 1.5C3.96243 1.5 1.5 3.96243 1.5 7C1.5 10.0376 3.96243 12.5 7 12.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5 14.5L11 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <input type="text" className="search-input" placeholder="Search..." aria-label="Search" />
          </div>
        </div>
        <div className="header-right">
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
      </div>
    </header>
  )
}
