import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <nav className="sticky top-0">navbar</nav>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="flex justify-center p-3">
        © {new Date().getFullYear()} Linn Claesson Dev
      </footer>
    </div>
  );
};
