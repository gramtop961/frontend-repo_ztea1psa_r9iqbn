import { Home, Users, Layers, ShoppingCart, FileText, AlertTriangle, Bell, Settings, Shield } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Home },
  { label: "Users", icon: Users },
  { label: "Connections", icon: Layers },
  { label: "Market Prices", icon: ShoppingCart },
  { label: "Reports", icon: FileText },
  { label: "Disputes", icon: AlertTriangle },
  { label: "Notifications", icon: Bell },
  { label: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 shrink-0 border-r border-emerald-100 bg-gradient-to-b from-emerald-50/70 to-amber-50/60 backdrop-blur-xl flex flex-col">
      <div className="px-6 pt-6 pb-4 flex items-center gap-3">
        <div className="size-10 rounded-lg bg-emerald-600 grid place-content-center shadow-sm">
          <Shield className="text-amber-100" size={22} />
        </div>
        <div>
          <p className="text-lg font-semibold text-emerald-900 leading-tight">Kuthakais Admin</p>
          <p className="text-xs text-emerald-700/70">Agri Ops Console</p>
        </div>
      </div>

      <nav className="mt-2 px-3 space-y-1">
        {navItems.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-emerald-900 hover:bg-emerald-100/70 transition group"
          >
            <span className="inline-flex size-9 items-center justify-center rounded-md bg-white shadow-sm border border-emerald-100 group-hover:bg-emerald-50">
              <Icon size={18} className="text-emerald-700" />
            </span>
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 text-xs text-emerald-700/70">
        <p className="px-2">© {new Date().getFullYear()} Kuthakais</p>
      </div>
    </aside>
  );
}
