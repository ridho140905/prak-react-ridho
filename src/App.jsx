import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./assets/tailwind.css";
// import Dashboard from "./pages/Dashboard";

import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";

// Import komponen ErrorPage yang baru
// import ErrorPage from "./pages/ErrorPage";
// import MainLayout from "./layouts/MainLayout";
// import Login from "./pages/auth/Login";
// import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
// import AuthLayout from "./layouts/AuthLayout";
const Customers = React.lazy(() => import("./pages/Customers"))
const Orders = React.lazy(() => import("./pages/Orders"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))
const Dashboard = React.lazy(() => import("./pages/Dashboard"))

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
      <Routes>
        {/* Rute Halaman Utama */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />

          {/* RUTE ERROR (400, 401, 403) */}
          <Route
            path="/error-400"
            element={
              <ErrorPage
                kodeError="400"
                deskripsiError="Bad Request! Ada yang salah dengan permintaanmu."
                gambarError="https://illustrations.popsy.co/blue/crashed-error.svg"
              />
            }
          />

          <Route
            path="/error-401"
            element={
              <ErrorPage
                kodeError="401"
                deskripsiError="Unauthorized! Kamu harus login dulu."
                gambarError="https://illustrations.popsy.co/blue/web-design.svg"
              />
            }
          />

          <Route
            path="/error-403"
            element={
              <ErrorPage
                kodeError="403"
                deskripsiError="Forbidden! Akses ditolak masuk ke halaman ini."
                gambarError="https://illustrations.popsy.co/blue/surreal-hourglass.svg"
              />
            }
          />

          {/* Rute * (Bintang) untuk 404 Not Found. Taruh di paling bawah! */}
          <Route
            path="*"
            element={
              <ErrorPage
                kodeError="404"
                deskripsiError="Halaman Tidak Ditemukan. Sepertinya link yang kamu tuju sudah pindah atau tidak ada."
                gambarError="https://illustrations.popsy.co/blue/web-design.svg"
              />
            }
          />
        </Route>
         <Route element={<AuthLayout/>}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/forgot" element={<Forgot/>} />
        </Route> 
      </Routes>
      </Suspense>
    </>
  );
}

export default App;
