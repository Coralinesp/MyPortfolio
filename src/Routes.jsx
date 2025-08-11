import { Routes, Route } from "react-router-dom";
import App from "./App";
import About from "./app/about/page"; // ajusta la ruta según tu estructura

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}
