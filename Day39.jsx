import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold text-cyan-400">Dashboard</h1>
        <Link
          to="/services"
          className="rounded-lg bg-cyan-500 px-5 py-2 font-semibold text-slate-950 hover:bg-cyan-400"
        >
          Services
        </Link>
      </nav>

      <div className="max-w-4xl">
        <p className="mb-3 text-cyan-400">Welcome back</p>
        <h2 className="text-5xl font-bold mb-6">Your Dashboard</h2>
        <p className="text-slate-400 text-lg">
          Manage your account and explore available services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {["Users", "Projects", "Revenue"].map((item, i) => (
            <div key={item} className="rounded-xl bg-slate-900 p-6 border border-slate-800">
              <p className="text-slate-400">{item}</p>
              <p className="text-3xl font-bold mt-2">{[128, 24, "$8.4K"][i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-900 p-8">
      <nav className="flex justify-between items-center mb-16">
        <h1 className="text-3xl font-bold text-orange-600">Services</h1>
        <Link
          to="/"
          className="rounded-lg bg-stone-900 px-5 py-2 text-white font-semibold hover:bg-stone-700"
        >
          Dashboard
        </Link>
      </nav>

      <div className="max-w-5xl">
        <p className="mb-3 text-orange-600">What we offer</p>
        <h2 className="text-5xl font-bold mb-6">Our Services</h2>
        <p className="text-stone-600 text-lg">
          Choose from our professional services designed for your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {["Web Development", "UI/UX Design", "Consulting"].map(service => (
            <div
              key={service}
              className="rounded-2xl bg-white p-6 shadow-md border border-orange-100"
            >
              <h3 className="text-xl font-bold text-orange-600">{service}</h3>
              <p className="mt-3 text-stone-500">
                Professional solutions tailored to your requirements.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}
