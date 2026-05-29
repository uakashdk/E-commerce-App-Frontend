import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import DashBoard from "./Pages/DashBoard.jsx";
import CreateProduct from "./Pages/CreateProduct.jsx";
import UpdateProduct from "./Pages/UpdateProduct.jsx";
import ProductList from "./Pages/ProductList.jsx";
import CreateCategory from "./Pages/createCategory.jsx";

import PrivateRoute from "./components/PrivateRoute.jsx";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";

const DashboardLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {children}
      </main>

      <Footer />
    </>
  );
};

const App = () => {
  return (
    <Routes>

      {/* Public Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <DashBoard />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard/create-product"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <CreateProduct />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard/update-product/:id"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <UpdateProduct />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard/product-list"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <ProductList />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

      <Route
        path="/dashboard/create-category"
        element={
          <PrivateRoute>
            <DashboardLayout>
              <CreateCategory />
            </DashboardLayout>
          </PrivateRoute>
        }
      />

    </Routes>
  );
};

export default App;