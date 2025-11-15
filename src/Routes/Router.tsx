import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { HomePage } from "../Pages/HomePage";
import { NotFoundPage } from "../Pages/NotFoundPage";
import { AboutPage } from "../Pages/AboutPage";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
