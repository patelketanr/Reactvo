export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-14 bg-primary text-primary-foreground border-t border-border z-50">
      <div className="flex items-center justify-between h-full px-6">
        <p className="text-sm">© 2025 ReactVo. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-muted-foreground transition-colors">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
