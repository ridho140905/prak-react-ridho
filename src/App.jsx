import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./assets/tailwind.css";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

// Import komponen ErrorPage yang baru
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <div id="app-container" className="bg-gray-100 h-screen flex w-full">
        <div id="layout-wrapper" className="flex flex-row flex-1 w-full overflow-hidden">
          <Sidebar />
          <div id="main-content" className="flex-1 p-4 flex flex-col overflow-y-auto">
            <Header />
            <Routes>
              {/* Rute Halaman Utama */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              
              {/* RUTE ERROR (400, 401, 403) */}
              <Route path="/error-400" element={
                <ErrorPage 
                  kodeError="400" 
                  deskripsiError="Bad Request! Ada yang salah dengan permintaanmu." 
                  gambarError="https://illustrations.popsy.co/blue/crashed-error.svg" 
                />
              } />
              
              <Route path="/error-401" element={
                <ErrorPage 
                  kodeError="401" 
                  deskripsiError="Unauthorized! Kamu harus login dulu." 
                  gambarError="https://illustrations.popsy.co/blue/web-design.svg" 
                />
              } />

              <Route path="/error-403" element={
                <ErrorPage 
                  kodeError="403" 
                  deskripsiError="Forbidden! Akses ditolak masuk ke halaman ini." 
                  gambarError="https://illustrations.popsy.co/blue/surreal-hourglass.svg" 
                />
              } />

              {/* Rute * (Bintang) untuk 404 Not Found. Taruh di paling bawah! */}
              <Route path="*" element={
                <ErrorPage 
                  kodeError="404" 
                  deskripsiError="Halaman Tidak Ditemukan. Sepertinya link yang kamu tuju sudah pindah atau tidak ada." 
                  gambarError="https://illustrations.popsy.co/blue/web-design.svg" 
                />
              } />

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;