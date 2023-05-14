import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";






function AllHotel(){
    const [room, setRoom] = useState([]); 
    const [selectedroom, setSelectedroom] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/hotel/"); 
        setRoom(response.data);
      }
      console.log()
      fetchData();
    }, []);



    

      
      function handleCloseForm() {
        setSelectedroom(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1>All room</h1>

            <table class="table"style={{width:'1400px'}}>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>
        <tr>
          <th>Name</th>
          <th>Max Count</th>
          <th>Contact Number</th>
          <th>Rent per day</th>
          <th>Hotel type</th>
          
        </tr>
      </thead>
      <tbody>
        {room.map((room, index) => (
          <tr key={index}>
            <td>{room.name}</td>
            <td>{room.maxcount}</td>
            <td>{room.phonenumber}</td>
            <td>{room.rentperday}</td>
            <td>{room.type}</td>
           
           
            
          </tr>
        ))}
      </tbody>
    </table>
    

        </div>
    )

}
export default AllHotel;