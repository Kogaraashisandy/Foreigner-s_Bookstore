import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Novelas from "./pages/Novelas";
import Login from "./pages/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/novelas" element={<Novelas />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
