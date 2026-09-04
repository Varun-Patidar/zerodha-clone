import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

import HomePage from "./landing_page/home/HomePage";
import AboutPage from "./landing_page/about/AboutPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SupportPage from "./landing_page/support/SupportPage";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

//import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";

const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <Routes>

      {/* ================= LANDING PAGE ================= */}

      <Route
        path="/"
        element={
          <>
            <Navbar />
            <HomePage />
            <Footer />
          </>
        }
      />

      {/* ================= ABOUT ================= */}

      <Route
        path="/about"
        element={
          <>
            <Navbar />
            <AboutPage />
            <Footer />
          </>
        }
      />

      {/* ================= PRODUCTS ================= */}

      <Route
        path="/products"
        element={
          <>
            <Navbar />
            <ProductsPage />
            <Footer />
          </>
        }
      />

      {/* ================= PRICING ================= */}

      <Route
        path="/pricing"
        element={
          <>
            <Navbar />
            <PricingPage />
            <Footer />
          </>
        }
      />

      {/* ================= SUPPORT ================= */}

      <Route
        path="/support"
        element={
          <>
            <Navbar />
            <SupportPage />
            <Footer />
          </>
        }
      />

      {/* ================= LOGIN ================= */}

      <Route
        path="/login"
        element={<Login />}
      />

      {/* ================= SIGNUP ================= */}

      <Route
        path="/signup"
        element={<Signup />}
      />

      {
      /* ================= DASHBOARD ================= */}

      <Route
  path="/dashboard/*"
  element={
    <ProtectedRoute>
      <Suspense fallback={<div>Loading Dashboard...</div>}>
        <Dashboard />
      </Suspense>
    </ProtectedRoute>
  }
/>

    </Routes>  
  );
}

export default App;