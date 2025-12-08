import { useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Dashboard from "./components/Dashboard";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
