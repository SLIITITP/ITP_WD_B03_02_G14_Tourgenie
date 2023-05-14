
import StorageIcon from '@mui/icons-material/Storage';
import React from "react";
//import './NaveBar.css';


function NaveBar(){
    return(
<div className ="list" >

{/* 
<div>
<ul>
  <li><a href="/">Dashbord</a></li>
  <li><a href="/Employee">Managers</a></li>
  <li><a href="/driver">Drivers</a></li>
  <li><a href="/Hotel">Hotel</a></li>
  <li><a href="/Tour">Tour</a></li>
  <li><a href="/package">Package</a></li>
  <li><a href="#about">User</a></li>
</ul>
</div>  */}








<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{marginTop:'100px'}} ><StorageIcon/></button>

<div class="offcanvas offcanvas-start" style={{backgroundColor:'#3A1078',width:'200px', marginTop:'60px',color:'white'}} data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">HR Management</h5>

     <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> 
  </div>
  
  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" >
    <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="/" role="tab" aria-controls="v-pills-home" aria-selected="true"style={{color:'white'}}>Dash board</a>

    <a className="nav-link" id="v-pills-messages-tab" href="/Employee" role="tab" aria-controls="v-pills-messages" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Employee</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="/driver" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Driver</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="#" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Hotel</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="#" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Tours</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="#" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Vehical</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="/user" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">User</a>
    
    <a className="nav-link" id="v-pills-settings-tab" href="#" role="tab" aria-controls="v-pills-settings" aria-selected="false"style={{color:'white'}} onClick="showOffcanvas()">Package</a>
  </div>
  
  

  
</div> 


</div>
        
    );
}
export default NaveBar;