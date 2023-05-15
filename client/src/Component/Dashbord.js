import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import './Dashbord.css';


function Dashbord() {
  const [count, setCount] = useState(0);
  const [Pcount, PsetCount] = useState(0);
  const [Hcount, HsetCount] = useState(0);
  const [Tcount, TsetCount] = useState(0);
  const [Ucount, UsetCount] = useState(0);

  useEffect(() => {
    async function getCount() {
      const response = await fetch('http://localhost:8070/driver/count');
      const data = await response.json();
      setCount(data.count);
    }

    getCount();
  }, []);



  useEffect(() => {
    async function getCount() {
      const response = await fetch('http://localhost:8070/package/count');
      const data = await response.json();
      PsetCount(data.Pcount);
    }

    getCount();
  }, []);



  useEffect(() => {
    async function getCount() {
      const response = await fetch('http://localhost:8070/hotel/count');
      const data = await response.json();
      HsetCount(data.Hcount);
    }

    getCount();
  }, []);


  useEffect(() => {
    async function getCount() {
      const response = await fetch('http://localhost:8070/Tour/count');
      const data = await response.json();
      TsetCount(data.Tcount);
    }

    getCount();
  }, []);



  useEffect(() => {
    async function getCount() {
      const response = await fetch('http://localhost:8070/User/count');
      const data = await response.json();
      UsetCount(data.Ucount);
    }

    getCount();
  }, []);

  

  return (
    <div>

      <div className='dev'>
      <div className="container">
      
       <div className='card1'>
          
           <h1> Drivers </h1>
        <div className='container1'>
          
          <h1>  {count} </h1>
          </div>
        
      </div>


      <div className='card2'>
          
          <h1> Pacakages </h1>
       <div className='container2'>
         
         <h1>  {Pcount} </h1>
         </div>
       
     </div>



     
     <div className='card3'>
          
          <h1> Hotels </h1>
       <div className='container3'>
         
         <h1>  {Hcount} </h1>
         </div>
       
     </div>



     
     <div className='card4'>
          
          <h1>  Tour </h1>
       <div className='container4'>
         
         <h1>  {Tcount} </h1>
         </div>
       
     </div>


     <div className='card5'>
          
          <h1> User </h1>
       <div className='container5'>
         
         <h1>  {Ucount} </h1>
         </div>
       
     </div>

     </div>

     </div>
    </div>
  );
}

export default Dashbord;