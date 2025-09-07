import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-neutral-50 p-5">
      <header>
        <nav className="sticky top-0">
          <Navbar />
        </nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-center">
        © {new Date().getFullYear()} Linn Claesson
      </footer>
    </div>
  );
};
