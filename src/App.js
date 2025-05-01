import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import UsersTable from "./pages/usersTable";
import UtilisateurSmple from "./pages/utilisateurSmple";
import PageUser from "./pages/PagesUser";
import PageTech from "./pages/PageTech";
import PageGestion from "./pages/PageGestion";
import PageSignal from "./pages/pageSignal";
import Login from "./pages/Login";
import Inscription from "./pages/inscription";
import Gestionaire from "./pages/gestionaire";
import HomePage from "./pages/HomePage";
import Apropos from "./pages/apropos";
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
    <PageGestion />
    {/* <PageUser/> */}
     {/* < Apropos/> */}
    {/* <PageTech/> */}
    {/* <Inscription/> */}
    {/* <Login onLogin={loginHandler} /> */}

    <Routes>
    {/* <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/users" element={<UsersTable/>} /> */}
    {/* <Route path="/Utilisateursimple" element={<UtilisateurSmple/>}/> */}
    <Route path="/page-gestion" element={<Gestionaire/>}/>
    <Route path="/page-user" element={<PageUser/>}/>
    <Route path="/page-tech" element={<PageTech/>}/>
    {/* <Route path="/signalerpanne" element={<PageSignal/>}/> */}



    </Routes>
    </BrowserRouter>
  );
}

export default App;
