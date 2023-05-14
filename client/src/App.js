import React from 'react';
<<<<<<< HEAD
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import UserProfile from './components/UserProfile/UserProfile.js';

const App = () => {
  const user = useSelector((state) => state.auth.authData);

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/profile" exact component={UserProfile} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
=======
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

      
     

   </Routes>
   </BrowserRouter>
   
   </div>
  );
}

export default App;
>>>>>>> a00876d90ad433b8956840caedcf738a8b4bf058
