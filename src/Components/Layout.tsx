import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <header>
        <nav className="sticky top-0">
          <Navbar />
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-center p-5">
        © {new Date().getFullYear()} Linn Claesson
      </footer>
    </div>
  );
};
