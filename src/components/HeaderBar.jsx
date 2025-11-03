import { Bell, Search, LogOut } from "lucide-react";

export default function HeaderBar() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-100">
      <div className="px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-emerald-900">Dashboard Overview</h1>
          <p className="text-sm text-emerald-700/70">Monitor users, agreements, and market activity</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-emerald-100 bg-white">
            <Search size={18} className="text-emerald-700/70" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none bg-transparent text-sm placeholder:text-emerald-700/60"
            />
          </div>
          <button className="relative inline-flex items-center justify-center size-10 rounded-lg border border-emerald-100 bg-white">
            <Bell className="text-emerald-700" size={18} />
            <span className="absolute -top-1 -right-1 inline-flex size-4 items-center justify-center rounded-full bg-amber-500 text-white text-[10px]">3</span>
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition">
            <LogOut size={16} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </header>
  );
}
