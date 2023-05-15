import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllTour.css';





function AllTour(){
    const [Tour, setTour] = useState([]); 
    const [selectedTour, setSelectedTour] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/Tour/"); 
        setTour(response.data);
      }
      console.log()
      fetchData();
    }, []);



    

      
      function handleCloseForm() {
        setSelectedTour(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1>All Tour</h1>

            <table className='Toures'>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>
        <tr>
          <th>title</th>
          <th> city</th>
          <th> address</th>
          <th> distance</th>
          <th>price</th>
         
          
        </tr>
      </thead>
      <tbody>
        {Tour.map((Tour, index) => (
          <tr key={index}>
            <td>{Tour.title}</td>
            <td>{Tour.city}</td>
            <td>{Tour.address}</td>
            <td>{Tour.distance}</td>
            <td>{Tour.price}</td>
    
           
           
            
          </tr>
        ))}
      </tbody>
    </table>
    

        </div>
    )

}
export default AllTour;