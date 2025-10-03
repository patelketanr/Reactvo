export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-primary text-primary-foreground border-b border-border z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">ReactVo</h1>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Home
          </a>
          <a href="#" className="hover:text-muted-foreground transition-colors">
            About
          </a>
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
