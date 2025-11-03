import { Users, Leaf, Handshake, ShoppingCart, FileCheck, AlertTriangle } from "lucide-react";

const stats = [
  { label: "Total Farmers", value: "1,284", icon: Leaf, accent: "bg-emerald-100 text-emerald-700", ring: "ring-emerald-200" },
  { label: "Total Landowners", value: "842", icon: Users, accent: "bg-amber-100 text-amber-700", ring: "ring-amber-200" },
  { label: "Facilitators Active", value: "156", icon: Handshake, accent: "bg-lime-100 text-lime-700", ring: "ring-lime-200" },
  { label: "Buyers Registered", value: "603", icon: ShoppingCart, accent: "bg-emerald-100 text-emerald-700", ring: "ring-emerald-200" },
  { label: "Active Agreements", value: "219", icon: FileCheck, accent: "bg-amber-100 text-amber-700", ring: "ring-amber-200" },
  { label: "Pending Verifications", value: "31", icon: AlertTriangle, accent: "bg-orange-100 text-orange-700", ring: "ring-orange-200" },
];

export default function StatsGrid() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {stats.map(({ label, value, icon: Icon, accent, ring }) => (
        <div key={label} className={`group rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm hover:shadow-md transition ${ring} ring-0 hover:ring-2`}>
          <div className="flex items-center gap-3">
            <div className={`size-10 rounded-lg grid place-content-center ${accent}`}>
              <Icon size={18} />
            </div>
            <div>
              <p className="text-sm text-emerald-700/70">{label}</p>
              <p className="text-2xl font-semibold text-emerald-900">{value}</p>
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full rounded-full bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-200"></div>
        </div>
      ))}
    </section>
  );
}
