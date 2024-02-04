import "./styles.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Thanks from "./Thanks";
import Rating from "./Rating";
import Layout from "./Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Rating" element={<Rating />} />
          <Route path="Thanks" element={<Thanks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
