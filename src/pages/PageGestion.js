import React from "react";
import {Sidebar4} from "../components/Sidebar4";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import UsersTable from "./usersTable";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function PageGestion() {
  return (   
    <>
      <div className="d-flex">
        <Sidebar4 />
        <div className="flex-grow-1">
          <Navbar />
          
           <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/users" element={<UsersTable/>} />
            </Routes>
          

        </div>
      </div>
    </>
  );
}

export default PageGestion;
