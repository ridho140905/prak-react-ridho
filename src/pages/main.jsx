import { createRoot } from "react-dom/client";
// Pastikan path ke tailwind.css sudah benar sesuai folder 'assets' kamu
import "../assets/tailwind.css"; 
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Sidebar from "../layouts/Sidebar";
import Header from "../layouts/Header";

// Render utama
createRoot(document.getElementById("root")).render(
   render(
      <BrowserRouter>
		      <App />
      </BrowserRouter>
  )
);