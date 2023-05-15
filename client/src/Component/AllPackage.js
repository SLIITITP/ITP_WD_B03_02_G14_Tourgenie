import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './AllPackage.css';





function AllPackage(){
    const [Package, setPacage] = useState([]); 
    const [selectpackage, setSelectpackage] = useState(null);
    const [showForm, setShowForm] = useState(false); 

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/Package/"); 
        setPacage(response.data);
      }
      console.log()
      fetchData();
    }, []);



    

      
      function handleCloseForm() {
        setSelectpackage(null);
        setShowForm(false);
      }



    return(
        <div className="container">
            <h1>All Package</h1>

            <table className='packages'>
  <thead class="tab" style={{backgroundColor:'#5091ca'}}>
        <tr>
          <th>Category</th>
          <th>Package Name</th>
          <th>Overview</th>
          <th>Duration</th>
          <th>Itininary</th>
          <th>Accomodation</th>
          <th>Price</th>
          <th>Pacengers</th>

        </tr>
      </thead>
      <tbody>
        {Package.map((Package, index) => (
          <tr key={index}>
            <td>{Package.category}</td>
            <td>{Package.name}</td>
            <td>{Package.overview}</td>
            <td>{Package.duration}</td>
            <td>{Package.itininary}</td>
            <td>{Package.accomodation}</td>
            <td>{Package.lprice}</td>
            <td>{Package.fprice}</td>

            


 
          </tr>
        ))}
      </tbody>
    </table>
    

        </div>
    )

}
export default AllPackage;