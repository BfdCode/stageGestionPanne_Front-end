import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UsersTable from "./pages/usersTable";
// import  Login  from "./pages/Login";
import Login from "./pages/Login";
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginHandler = () => {
      setIsAuthenticated(true);
  };

  const logoutHandler = () => {
      sessionStorage.removeItem("jwt");
      setIsAuthenticated(false);
  };

  return (

    <BrowserRouter>
    <Login onLogin={loginHandler} />
    <Routes>
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/users" element={<UsersTable/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
