import { Link } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-xl font-bold">AI Compass</div>
      <nav className="space-x-4">
        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
        <Link to="/about" className="hover:text-yellow-400 transition">Why I Built This</Link>
        <a href="#footer" className="hover:text-yellow-400 transition">Contact</a>
      </nav>
    </header>
  );
}
