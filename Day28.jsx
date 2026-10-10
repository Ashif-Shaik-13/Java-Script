export default function Button({ label, onClick }) {
  return (
    <button onClick={onClick} className="bg-blue-600 text-white px-4 py-2 rounded">
      {label}
    </button>
  );
}

export default function Header({ title }) {
  return (
    <header className="bg-gray-800 text-white p-4 text-xl font-bold">
      {title}
    </header>
  );
}

export default function Footer({ text }) {
  return (
    <footer className="bg-gray-200 text-center p-4 mt-auto">
      {text}
    </footer>
  );
}

import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, footerText, children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title={title} />
      <main className="flex-1 p-6">{children}</main>
      <Footer text={footerText} />
    </div>
  );
}

export default function UserCard({ name, age }) {
  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">Age: {age}</p>
    </div>
  );
}

import Layout from "./Layout";
import UserCard from "./UserCard";
import Button from "./Button";

export default function App() {
  const showMessage = () => alert("Button clicked!");

  return (
    <Layout title="My Website" footerText="© 2026 My Website">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <UserCard name="Ashif" age={25} />
      <div className="mt-4">
        <Button label="Click Me" onClick={showMessage} />
      </div>
    </Layout>
  );
}
