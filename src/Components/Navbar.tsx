import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <Link className="flex items-center gap-3" to="/">
        <img className="h-8" src="/icon.svg" alt="Logo" />
        <p className="font-roboto-mono text-xl font-bold">Linn Claesson</p>
      </Link>
      <div className="flex gap-5">
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};
