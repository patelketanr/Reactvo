"use client"

import "./Sidebar.css"

interface SidebarProps {
  isOpen: boolean
  currentPage: string
  onNavigate: (page: "dashboard" | "projects" | "team" | "analytics" | "settings" | "inbox") => void
}

export function Sidebar({ isOpen, currentPage, onNavigate }: SidebarProps) {
  return (
    <aside className={`sidebar ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <nav className="sidebar-nav">
        <button
          onClick={() => onNavigate("inbox")}
          className={`sidebar-link ${currentPage === "inbox" ? "active" : ""}`}
        >
          <span className="sidebar-icon">📧</span>
          <span className="sidebar-text">Inbox</span>
        </button>
        <button
          onClick={() => onNavigate("dashboard")}
          className={`sidebar-link ${currentPage === "dashboard" ? "active" : ""}`}
        >
          <span className="sidebar-icon">📊</span>
          <span className="sidebar-text">Dashboard</span>
        </button>
        <button
          onClick={() => onNavigate("projects")}
          className={`sidebar-link ${currentPage === "projects" ? "active" : ""}`}
        >
          <span className="sidebar-icon">📁</span>
          <span className="sidebar-text">Projects</span>
        </button>
        <button onClick={() => onNavigate("team")} className={`sidebar-link ${currentPage === "team" ? "active" : ""}`}>
          <span className="sidebar-icon">👥</span>
          <span className="sidebar-text">Team</span>
        </button>
        <button
          onClick={() => onNavigate("analytics")}
          className={`sidebar-link ${currentPage === "analytics" ? "active" : ""}`}
        >
          <span className="sidebar-icon">📈</span>
          <span className="sidebar-text">Analytics</span>
        </button>
        <button
          onClick={() => onNavigate("settings")}
          className={`sidebar-link ${currentPage === "settings" ? "active" : ""}`}
        >
          <span className="sidebar-icon">⚙️</span>
          <span className="sidebar-text">Settings</span>
        </button>
      </nav>
    </aside>
  )
}
