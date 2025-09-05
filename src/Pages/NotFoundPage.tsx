import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <section className="flex h-full flex-col items-center justify-center bg-neutral-50">
      <p className="text-gray-600">404 – Page not found</p>
      <p className="text-gray-600">
        The page you’re looking for doesn’t exist.
      </p>
      <Link to="/" className="underline">
        Go back home
      </Link>
    </section>
  );
};
