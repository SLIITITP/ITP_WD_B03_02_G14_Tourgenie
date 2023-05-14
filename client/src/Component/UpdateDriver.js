import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateDriver() {
  const { id } = useParams();
  const [editDriver, setEditDriver] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Driver/get/${id}`)
      .then((res) => setEditDriver(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const sendRequest = async() => {
    await axios.put(`http://localhost:8070/Driver/update/${id}`, {
      empid: String(editDriver.empid),        
      name: String(editDriver.name),
      email: String(editDriver.email),
      mobile_number: String(editDriver.mobile_number),
      NIC: String(editDriver.NIC),
      gender: String(editDriver.gender),
      location: String(editDriver.location),
      license_number: String(editDriver.license_number),
      lexpire_date: String(editDriver.lexpire_date),
      dsalery: String(editDriver.dsalery),
      available: Boolean(checked)
    }).then(res => res.data)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest().then(() => {
      alert("Driver updated successfully");
      navigate("/");
    });
  };

  return (
    <div>
      {editDriver && 
      <form onSubmit={handleSubmit}>
        <Box 
          display= "flex" 
          flexDirection="column" 
          justifyContent={'center'} 
          maxWidth={700}
          alignContent={"center"}
          alignSelf={"auto"}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
        >


         <FormLabel>Employee Id </FormLabel>
          <TextField 
            value={editDriver.empid || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, empid: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="empid" 
          />

          <FormLabel>Name</FormLabel>
          <TextField 
            value={editDriver.name || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, name: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />

          <FormLabel>Email</FormLabel>
          <TextField 
            value={editDriver.email || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, email: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="email" 
          />

          <FormLabel>Phone Number</FormLabel>
          <TextField 
            value={editDriver.mobile_number || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, mobile_number: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="mobile_number" 
          />
          <FormLabel>NIC </FormLabel>
          <TextField 
            value={editDriver.NIC || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, NIC: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="NIC" 
          />

          <FormLabel>Gender</FormLabel>
          <select
            value={editDriver.gender || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, gender: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="gender" 
          >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              </select>


            <FormLabel>Location</FormLabel>
          <TextField 
            value={editDriver.location || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, location: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="location" 
          />

         <FormLabel>License Number</FormLabel>
          <TextField 
            value={editDriver.license_number || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, license_number: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="license_number" 
          />


        <FormLabel>License Expire date</FormLabel>
          <input type="date"
            value={editDriver.lexpire_date || ""} 
            onChange={(e) => setEditDriver({ ...editDriver, lexpire_date: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="location" 
          />
            <FormLabel>Salery</FormLabel>
          <TextField 
            value={editDriver.dsalery || ""} 
            onChange={(e) => setEditDriver({ ...editDriver,dsalery: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />



      

          <Button variant="contained" type='submit'>Update Driver</Button>
        </Box>
      </form>}
    </div>
  );
}

export default UpdateDriver;
