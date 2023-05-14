import React from 'react';
import axios from "axios";
import {useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DeleteIcon from '@mui/icons-material/Delete';
import './AllUser.css';







function AllUser(){
    const [user, setuser] = useState([]); 
    const [selecteduser, setSelecteduser] = useState(null);
    const [showForm, setShowForm] = useState(false); 
    const [searchTerm, setSearchTerm] = useState(''); 


    useEffect(() => {
      async function fetchData() {
        const response = await axios.get("http://localhost:8070/user/"); 
        setuser(response.data);
      }
      console.log()
      fetchData();
    }, []);



    function handleDelete(userId) {
        // Send a DELETE request to the server to delete the user with the given ID
        axios.delete(`http://localhost:8070/user/delete/${userId}`)
          .then(() => {
            // Remove the deleted user from the array of user
            setuser(user.filter(user => user._id !== userId));
          })
          .catch(err => console.error(err));
      }

      function handleUpdate(user) {
        setSelecteduser(user);
        setShowForm(true);
      }
    
      function handleCloseForm() {
        setSelecteduser(null);
        setShowForm(false);
      }



      
//search 
  function searchuser(searchTerm) {
    return user.filter((user) => {
     
      const email = user.email ? user.email.toLowerCase() : '';
    
      const name = user.name ? user.name.toLowerCase() : '';
      const searchTermLowerCase = searchTerm.toLowerCase();
      
      
      return (
        name.includes(searchTermLowerCase) ||
        email.includes(searchTermLowerCase) 
       
        
      );
    });
  }

  const searcheuser = searchuser(searchTerm);



    return(
        <div className="container">


          

        <input
          type="text"
          className="form-control"
          placeholder="Search by name, email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} style={{width:'1700px'}}
        />
 


            <table className='customers' >
  <thead >

  <tr>
          
          <th>Name</th>
         
          <th>email</th>
         
          
          <th class ="w-100"></th>
          


        </tr>
  </thead>
  <tbody>
  {searcheuser.map((user, index) => (
          <tr key={index}>
            <td>{user.name}</td>

            <td>{user.email}</td>
           

           

            


            <td>

            
          
                  <button onClick={() => handleDelete(user._id)}class="btn btn-success" ><DeleteIcon/>Delete</button>

                  



                </td>
          </tr>
        ))}
  </tbody>
</table>


    

        </div>
    )

}
export default AllUser;