import { BarChart3 } from "lucide-react";

function Bar({ value, color }) {
  return (
    <div className="flex-1 flex items-end">
      <div
        className={`w-full rounded-md ${color}`}
        style={{ height: `${value}%` }}
      />
    </div>
  );
}

function MiniLegend({ items }) {
  return (
    <div className="flex flex-wrap gap-3 text-xs">
      {items.map((it) => (
        <div key={it.label} className="flex items-center gap-2">
          <span className={`inline-block w-3 h-3 rounded ${it.dot}`} />
          <span className="text-emerald-800/80">{it.label}</span>
        </div>
      ))}
    </div>
  );
}

export default function OverviewCharts() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Weekly New Users */}
      <div className="col-span-1 lg:col-span-1 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-emerald-900">Weekly New Users</h3>
            <p className="text-xs text-emerald-700/70">Farmers, Landowners, Buyers</p>
          </div>
          <BarChart3 className="text-emerald-700" size={18} />
        </div>
        <div className="mt-4 h-40 flex items-end gap-2">
          {[35, 55, 42, 64, 58, 72, 61].map((v, i) => (
            <Bar key={i} value={v} color="bg-gradient-to-t from-emerald-200 to-emerald-500" />
          ))}
        </div>
      </div>

      {/* Crop Requests Trends */}
      <div className="col-span-1 lg:col-span-1 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-emerald-900">Crop Requests Trends</h3>
            <p className="text-xs text-emerald-700/70">Top requested crop categories</p>
          </div>
          <BarChart3 className="text-amber-700" size={18} />
        </div>
        <div className="mt-4 space-y-3">
          {[
            { label: "Rice", pct: 72, color: "from-amber-200 to-amber-500" },
            { label: "Wheat", pct: 54, color: "from-emerald-200 to-emerald-500" },
            { label: "Vegetables", pct: 63, color: "from-lime-200 to-lime-500" },
          ].map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between text-sm text-emerald-900">
                <span>{row.label}</span>
                <span className="text-emerald-700/70">{row.pct}%</span>
              </div>
              <div className="mt-1 h-2.5 w-full rounded-full bg-emerald-50">
                <div
                  className={`h-2.5 rounded-full bg-gradient-to-r ${row.color}`}
                  style={{ width: `${row.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <MiniLegend
            items={[
              { label: "Rice", dot: "bg-amber-500" },
              { label: "Wheat", dot: "bg-emerald-500" },
              { label: "Vegetables", dot: "bg-lime-500" },
            ]}
          />
        </div>
      </div>

      {/* Revenue / Transactions */}
      <div className="col-span-1 lg:col-span-1 rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-emerald-900">Transactions Overview</h3>
            <p className="text-xs text-emerald-700/70">Daily successful payments</p>
          </div>
          <BarChart3 className="text-lime-700" size={18} />
        </div>
        <div className="mt-4 h-40 grid grid-cols-12 gap-1 items-end">
          {[12, 22, 18, 30, 26, 38, 34, 28, 42, 36, 48, 45].map((v, i) => (
            <div key={i} className="flex items-end">
              <div
                className="w-full rounded-sm bg-gradient-to-t from-emerald-300 to-emerald-600"
                style={{ height: `${v + 20}%` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
