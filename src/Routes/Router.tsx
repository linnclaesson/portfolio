import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../Components/Layout";
import { HomePage } from "../Pages/HomePage";
import { NotFoundPage } from "../Pages/NotFoundPage";
export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
