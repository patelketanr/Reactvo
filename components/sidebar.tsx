import { Home, Settings, Users, FileText, BarChart } from "lucide-react"

export function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", href: "#" },
    { icon: Users, label: "Users", href: "#" },
    { icon: FileText, label: "Documents", href: "#" },
    { icon: BarChart, label: "Analytics", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
  ]

  return (
    <aside className="fixed left-0 top-16 bottom-14 w-64 bg-sidebar border-r border-sidebar-border overflow-y-auto">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}
