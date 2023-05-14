import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PMdashbrd from "./components/PMdashbrd";
import AddPckg from "./components/AddPckg";
import Packages from "./components/Package/Packages";
import PckgDetails from "./components/Package/PckgDetails";

function App() {
    return (
        <React.Fragment>
          <ToastContainer />
          <header>
              <Header />
          </header>
          <main>
            <PMdashbrd/>
            <Routes>
              <Route path="/add" element={<AddPckg />} exact/>
              <Route path="/packages" element={<Packages />} exact/>
              <Route path="/packages/:id" element={<PckgDetails />} exact/>
              
            </Routes>
          </main>

        </React.Fragment>
    )
};

export default App;
