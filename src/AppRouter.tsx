import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Privacy } from "./pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
};
