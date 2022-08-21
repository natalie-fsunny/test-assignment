import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ComponentsExample } from "./pages/ComponentsExample";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/examples" element={<ComponentsExample />} />
      </Routes>
    </BrowserRouter>
  );
};
