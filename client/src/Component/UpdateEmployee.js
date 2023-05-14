import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateEmployee() {
  const { id } = useParams();
  const [editEmployee, setEditEmployee] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Employee/get/${id}`)
      .then((res) => setEditEmployee(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const sendRequest = async() => {
    await axios.put(`http://localhost:8070/Employee/update/${id}`, {
      username: String(editEmployee.username), 
      password: String(editEmployee.password), 
      email: String(editEmployee.email),        
      name: String(editEmployee.name),
      mobile_number: String(editEmployee.mobile_number),
      NIC: String(editEmployee.NIC),
      gender: String(editEmployee.gender),
      etype: String(editEmployee.etype),
      esalery: String(editEmployee.esalery),
      
      available: Boolean(checked)
    }).then(res => res.data)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest().then(() => {
      alert("Employee updated successfully");
      navigate("/Employee");
    });
  };

  return (
    <div>
      {editEmployee && 
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
            value={editEmployee.username || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, username: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="username" 
          />

           <FormLabel>password </FormLabel>
          <TextField 
            value={editEmployee.password || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, password: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="password" 
          />

         

          <FormLabel>Email</FormLabel>
          <TextField 
            value={editEmployee.email || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, email: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="email" 
          />
           <FormLabel>Name</FormLabel>
          <TextField 
            value={editEmployee.name || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, name: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />

          <FormLabel>Phone Number</FormLabel>
          <TextField 
            value={editEmployee.mobile_number || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, mobile_number: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="mobile_number" 
          />
          <FormLabel>NIC </FormLabel>
          <TextField 
            value={editEmployee.NIC || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, NIC: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="NIC" 
          />

          <FormLabel>Gender</FormLabel>
          <select
            value={editEmployee.gender || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, gender: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="gender" 
          >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              </select>


            <FormLabel>Employees</FormLabel>
          <select
            value={editEmployee.etype || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, etype: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="etype" 
          >
            <option value="">Select Gender</option>
            <option value="Booking manager">Booking manager</option>
            <option value="Transport manager">Transport manager</option>
            <option value="Hotel manager">Hotel manager</option>
            <option value="Event manager">Event manager</option>
            <option value="Package manager">package manager</option>
           </select> 

           <FormLabel>Basic Salery</FormLabel>
          <TextField 
            value={editEmployee.besalery || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, esalery: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />


          <FormLabel>ot Salery</FormLabel>
          <TextField 
            value={editEmployee.otsalery || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, otsalery: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />


           <div className="mb-3">
          <label for="workinday" className="form-label">workingDays</label>
          <input type="number" className="form-control" id="salery"/>
          </div>



          {/* <FormLabel>Salery</FormLabel>
          <TextField 
            value={editEmployee.esalery || ""} 
            onChange={(e) => setEditEmployee({ ...editEmployee, esalery: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          /> */}



         



      

          <Button variant="contained" type='submit'>Update Employee</Button>
        </Box>
      </form>}
    </div>
  );
}

export default UpdateEmployee;
