import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Sidebar } from "./components/Sidebar"
import "./App.css"

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-layout">
        <Sidebar />
        <main className="main-content">
          <h1>Welcome to ReactVo</h1>
          <p>
            This is the main content area. The header stays fixed at the top, the footer stays fixed at the bottom, and
            the sidebar is on the left.
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
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
