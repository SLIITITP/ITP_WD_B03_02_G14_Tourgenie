import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateStudent() {
  const { id } = useParams();
  const [editStudent, setEditStudent] = useState({});
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:8070/Student/get/${id}`)
      .then((res) => setEditStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const sendRequest = async() => {
    await axios.put(`http://localhost:8070/Student/update/${id}`, {
      name: String(editStudent.name),
      age: Number(editStudent.age),
      gender: String(editStudent.gender),
      available: Boolean(checked)
    }).then(res => res.data)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendRequest().then(() => {
      alert("Student updated successfully");
      navigate("/");
    });
  };

  return (
    <div>
      {editStudent && 
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
          <FormLabel>Name</FormLabel>
          <TextField 
            value={editStudent.name || ""} 
            onChange={(e) => setEditStudent({ ...editStudent, name: e.target.value })}
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="name" 
          />

          <FormLabel>Age</FormLabel>
          <TextField 
            value={editStudent.age || ""} 
            onChange={(e) => setEditStudent({ ...editStudent, age: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="age" 
          />

          <FormLabel>Gender</FormLabel>
          <TextField 
            value={editStudent.gender || ""} 
            onChange={(e) => setEditStudent({ ...editStudent, gender: e.target.value })} 
            margin="normal" 
            fullWidth 
            variant="outlined" 
            name="gender" 
          />

      

          <Button variant="contained" type='submit'>Update Student</Button>
        </Box>
      </form>}
    </div>
  );
}

export default UpdateStudent;
