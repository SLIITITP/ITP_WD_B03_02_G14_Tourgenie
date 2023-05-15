import React from 'react';
import './App.css';
import AddStudent from './Component/AddStudent';
import Dashbord from './Component/Dashbord';
import NaveBar from './Component/NaveBar';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import UpdateStudent from './Component/UpdateStudent';
import AllEmployee from './Component/AllEmployee';
import AddEmployee from './Component/AddEmployee';
import AllDriver from './Component/AllDriver';
import AddDriver from './Component/AddDriver';
import Report from './Component/Report';
import UpdateDriver from './Component/UpdateDriver';
import UpdateEmployee from './Component/UpdateEmployee';
import ReportEmployee from './Component/ReportEmployee';
import ReportDriver from './Component/ReportDriver';
import AllHotel from './Component/AllHotel';
import AllVehical from './Component/AllVehical';
import HeaderBar from './Component/HeaderBar';
import AllUser from './Component/AllUser';
import AllPackage from './Component/AllPackage';
import AllTour from './Component/AllTour';


//vehicle
import AddVehicle from "./components/AddVehicle";
import Vehicles from "./components/Vehicle/Vehicles";
import VehicleDetails from "./components/Vehicle/VehicleDetails";
import VehicleUser from "./components/Vehicle/VehicleUser";
import VehicleBooking from "./components/Vehicle/VehicleBooking";





function App() {
  return (
  <div>
    
    <BrowserRouter> 
    <HeaderBar/>
   
     <NaveBar/>
     
    
     
    <Routes>


     {/* <Route path='/add student'exact Component={AddStudent}/>*/}
       <Route path='/'exact Component={Dashbord}/>
       <Route path='/edit/:id'element={<UpdateStudent/>}/>
       <Route path='/Employee'exact Component={AllEmployee}/>
       <Route path='/add/'element={<AddEmployee/>}/>
       <Route path='/driver'exact Component={AllDriver}/>
       <Route path='/add driver/'element={<AddDriver/>}/>
       <Route path='/report/:id'element={<Report/>}/>
       <Route path='/edit driver/:id'element={<UpdateDriver/>}/>
       <Route path='/edit employee/:id'element={<UpdateEmployee/>}/>
       <Route path='/report employee/:id'element={<ReportEmployee/>}/>
       <Route path='/report driver/:id'element={<ReportDriver/>}/>
       <Route path='/hotel'exact Component={AllHotel}/>
       <Route path='/vehical'exact Component={AllVehical}/>
       <Route path='/user'exact Component={AllUser}/>
       <Route path='/package'exact Component={AllPackage}/>
       <Route path='/Tour'exact Component={AllTour}/>

       <Route path="/add" element={<AddVehicle />} exact/>
      <Route path="/vehicles" element={<Vehicles />} exact/>
      <Route path="/vehicles/:id" element={<VehicleDetails />} exact/>
      <Route path="/vehiclesUser" element={<VehicleUser/>} exact/>
       <Route path="/VehicleBooking/:id" element={<VehicleBooking/>} exact/>

      
     

   </Routes>
   </BrowserRouter>
   
   </div>
  );
}

export default App;
