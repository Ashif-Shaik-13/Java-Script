export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto">

        <header className="md:col-span-4 bg-indigo-600 text-white rounded-xl p-6">
          <h1 className="text-3xl font-bold">My Webpage</h1>
          <p className="text-indigo-200 mt-1">Modern Tailwind Grid Layou</p>
        </header>

        <aside className="md:col-span-1 bg-white rounded-xl p-5 shadow">
          <h2 className="font-bold text-lg mb-4">Navigation</h2>
          <div className="space-y-3 text-slate-600">
            <p>Dashboard</p>
            <p>Profile</p>
            <p>Messages</p>
            <p>Settings</p>
          </div>
        </aside>

        <main className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <section className="sm:col-span-2 bg-white rounded-xl p-6 shadow">
            <h2 className="text-2xl font-bold">Welcome Back!</h2>
            <p className="text-slate-500 mt-2">
              This is the main content area of the webpage.
            </p>
          </section>

          <div className="bg-white rounded-xl p-6 shadow">
            <p className="text-slate-500">Users</p>
            <h3 className="text-3xl font-bold mt-2">1,248</h3>
          </div>

          <div className="bg-white rounded-xl p-6 shadow">
            <p className="text-slate-500">Revenue</p>
            <h3 className="text-3xl font-bold mt-2">$6,560</h3>
          </div>

          <section className="sm:col-span-2 bg-white rounded-xl p-6 shadow">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <div className="space-y-3">
              <p className="border-b pb-2">New user registered</p>
              <p className="border-b pb-2">Project updated</p>
              <p>Payment received</p>
            </div>
          </section>
        </main>

        <footer className="md:col-span-4 bg-slate-900 text-white rounded-xl p-5 text-center">
          © 2029 My Webpage
        </footer>

      </div>
    </div>
  );
}
