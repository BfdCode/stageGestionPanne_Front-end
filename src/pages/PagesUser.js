import React from "react";
import { SidebarUser } from "../components/sidebardUser";
import Navbar from "../components/Navbar";
import Apropos from "./apropos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageSignal from "./pageSignal";
import HomePage from "./HomePage";
function PageUser() {
  return (   
    <>
      <div className="d-flex">
          <SidebarUser />
          <div className="flex-grow-1">
              <Navbar />
            
             <Routes>
             <Route path="/accueilUser" element={<HomePage/>} />
                <Route path="/signalerpanne" element={<PageSignal />} />
                <Route path="/info" element={<Apropos />} />
             </Routes>

          </div>
      </div>
    </>
  );
}

export default PageUser;