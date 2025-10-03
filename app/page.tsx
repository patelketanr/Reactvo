import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="ml-64 mt-16 mb-14 p-8 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Welcome to ReactVo</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This is your main content area. The header stays fixed at the top, the footer stays fixed at the bottom, and
            the sidebar remains on the left.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Card {i}</h3>
                <p className="text-muted-foreground">
                  This is a sample card to demonstrate the layout with scrollable content.
                </p>
              </div>
            ))}
          </div>

          {/* Add more content to demonstrate scrolling */}
          <div className="mt-12 space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="p-6 bg-card border border-border rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Section {i}</h3>
                <p className="text-muted-foreground">
                  Scroll down to see how the header and footer remain fixed while the content scrolls. The sidebar also
                  stays in place on the left side.
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
