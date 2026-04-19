import React from 'react'
import {Routes, Route} from "react-router-dom";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import DashBoard from "./Pages/DashBoard.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
const App = () => {
  return (
    <>
   <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  <Route
    path="/"
    element={
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    }
  />
</Routes>
    </>
  )
}

export default App