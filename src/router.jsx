import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App.jsx";
import CarDetail from "./pages/CarDetail.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />} path="/" />
        <Route element={<CarDetail />} path="/car/:id" />
        <Route element={<div>Not found</div>} path="*" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
