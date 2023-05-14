import React from "react";
<<<<<<< HEAD
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
=======
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PMdashbrd from "./components/PMdashbrd";
import AddNotice from "./components/AddNotice";
import Notices from "./components/Notice/Noticez";
import NoticeDetails from "./components/Notice/NoticeDetails";
import BookingTable from "./components/Booking/BookingTable";
import RoomForm from "./components/hotel_booking/hotel_bookingTable";
import Pack_bookingTable from "./components/package_booking/package_booking";
import Count from "./components/dashboard/dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <header>
        <Header />
      </header>
      <main >
        <PMdashbrd />
       
          <Routes>

           
            <Route path="/add" element={<AddNotice />} exact />  {/* addNotice */}
            <Route path="/notice" element={<Notices />} exact />  {/* noticeboard */}
            <Route path="/notice/:id" element={<NoticeDetails />} exact /> {/* view notice */}
            <Route path="/bookings" element={<BookingTable />} exact />  {/* booking table */}
            <Route path="/hotel" element={<RoomForm />} exact />  {/* hotel_booking table */}
            <Route path="/packageBooking" element={<Pack_bookingTable />} exact />  {/* package_booking table */}
            <Route path="/dashboard" element={<Count/>} exact />  {/* dashboard */}
          </Routes>
        
      </main>
    </React.Fragment>
  );
}
>>>>>>> d2e79b22933d788dc568ad7586b8a2251a0a9f61

export default App;
