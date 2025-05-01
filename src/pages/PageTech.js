import React from "react";
import { SidebarTech } from "../components/sidebardTech";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import HomeTech from "./HomeTech";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PannesTechnicien from "../components/panneTech";

function PageTech() {
  return (   
    <>
      <div className="d-flex">
        <SidebarTech />
        <div className="flex-grow-1">
          <Navbar />
          
           <Routes>
           <Route path="/dashboard" element={<Dashboard/>} />
           <Route path="/accueilTech" element={<HomeTech/>} />
           <Route path="/pannes" element={<PannesTechnicien/>} />

           

              
            </Routes>
          

        </div>
      </div>
    </>
  );
}

export default PageTech;