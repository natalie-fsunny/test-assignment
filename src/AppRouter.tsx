import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentsExample, Privacy } from "./pages";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/examples" element={<ComponentsExample />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
  );
};
