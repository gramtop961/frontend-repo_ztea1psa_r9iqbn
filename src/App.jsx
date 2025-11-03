import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/HeaderBar";
import StatsGrid from "./components/StatsGrid";
import OverviewCharts from "./components/OverviewCharts";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-amber-50 to-emerald-50 text-emerald-950">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 min-h-screen flex flex-col">
          <HeaderBar />
          <div className="px-6 py-6 space-y-6">
            <StatsGrid />
            <OverviewCharts />

            {/* Quick panel for actions - non-functional placeholders matching theme */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-900">User Management</h3>
                <p className="text-sm text-emerald-700/70 mt-1">Filter Farmers, Landowners, Facilitators, Buyers</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {["Farmers", "Landowners", "Facilitators", "Buyers"].map((t) => (
                    <button key={t} className="text-xs px-3 py-1.5 rounded-lg border border-emerald-100 bg-emerald-50 hover:bg-emerald-100/70">{t}</button>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-900">Connections & Agreements</h3>
                <p className="text-sm text-emerald-700/70 mt-1">Approve, reject, or request more info</p>
                <div className="mt-3 h-2 w-full rounded-full bg-gradient-to-r from-emerald-200 via-amber-200 to-emerald-200" />
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white p-4 shadow-sm">
                <h3 className="text-sm font-semibold text-emerald-900">Notifications & Updates</h3>
                <p className="text-sm text-emerald-700/70 mt-1">Send announcements or schedule notices</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  <button className="text-xs px-3 py-1.5 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700">Create</button>
                  <button className="text-xs px-3 py-1.5 rounded-lg border border-emerald-200 bg-white hover:bg-emerald-50">Schedule</button>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
