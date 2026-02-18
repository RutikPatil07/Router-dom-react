import { Routes, Route } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import API from "./API";
import NavScroll from "./NavScroll";

export default function App() {
  return (
    <Routes>

      {/* Default Page = Login */}
      <Route path="/" element={<Login />} />

      {/* All Pages After Login */}
      <Route path="/home" element={<><NavScroll /><Home /></>} />
      <Route path="/about" element={<><NavScroll /><About /></>} />
      <Route path="/contact" element={<><NavScroll /><Contact /></>} />
      <Route path="/ser" element={<><NavScroll /><Service /></>} />
      <Route path="/api" element={<><NavScroll /><API /></>} />

    </Routes>
  );
}
