"use client"

import { useState } from "react"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import { TeamPage } from "./pages/TeamPage"
import { InboxPage } from "./pages/InboxPage"
import "./App.css"

type PageType = "dashboard" | "projects" | "team" | "analytics" | "settings" | "inbox"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [currentPage, setCurrentPage] = useState<PageType>("dashboard")

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case "inbox":
        return <InboxPage />
      case "team":
        return <TeamPage />
      case "dashboard":
      default:
        return (
          <>
            <h1>Welcome to ReactVo</h1>
            <p>
              This is the main content area. The header stays fixed at the top, the footer stays fixed at the bottom,
              and the sidebar is on the left.
            </p>

            <section className="content-section">
              <h2>Section 1</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </section>

            <section className="content-section">
              <h2>Section 2</h2>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
              </p>
            </section>

            <section className="content-section">
              <h2>Section 3</h2>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </section>
          </>
        )
    }
  }

  return (
    <div className="app-container">
      <Header onToggleSidebar={toggleSidebar} />
      <div className="main-layout">
        <Sidebar isOpen={isSidebarOpen} currentPage={currentPage} onNavigate={handleNavigate} />
        <main className={`main-content ${currentPage === "inbox" ? "no-padding" : ""}`}>{renderPageContent()}</main>
      </div>
      <Footer />
    </div>
  )
}

export default App
