import { Box, Button, FormLabel, TextField, Checkbox, FormControlLabel, InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddPckg = () => {
  const histroy = useNavigate()

  //db conn
  const [inputs, setInputs] = useState({
    pid: '',
    category: '',
    name: '',
    overview: '',
    duration: '',
    itininary: '',
    accomodation: '',
    lprice: '',
    fprice: '',
    image: '',
  });

  //define available
  const [checked, setChecked] = useState(false);

  //define handleChange
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  //create request to db
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/packages", {
      pid: String(inputs.pid),
      category: String(inputs.category),
      name: String(inputs.name),
      overview: String(inputs.overview),
      duration: String(inputs.duration),
      itininary: String(inputs.itininary),
      accomodation: String(inputs.accomodation),
      lprice: Number(inputs.lprice),
      fprice: Number(inputs.fprice),
      image: String(inputs.image),
      available: Boolean(inputs.checked)
    }).then(res => res.data);

  }

  //define handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    if (!inputs.pid || !inputs.category || !inputs.name || !inputs.overview || !inputs.duration || !inputs.itininary || !inputs.accomodation || !inputs.lprice || !inputs.fprice || !inputs.image) {
      alert('Please fill in all required fields');
      return;
    }

    sendRequest().then(() => {
      toast.success('Package added successfully!');
      histroy('/packages');
    }).catch(() => {
      toast.error('Failed to add package');
    });
  };


  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent={'center'}
          maxWidth={800}
          alignContent={"center"}
          alignSelf={""}
          marginLeft={"auto"}
          marginRight={"auto"}
          marginTop={10}
          marginBottom={10}
        >

          

          <FormControl variant="outlined" fullWidth margin="normal">
            <InputLabel id="category-label">Category</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              name="category"
              value={inputs.category}
              onChange={handleChange}
              label="Category"
              MenuProps={{
                style: { width: '50%' },
              }}
            >
              <MenuItem value="Cultural & Historical">Cultural & Historical</MenuItem>
              <MenuItem value="Adventure">Adventure</MenuItem>
              <MenuItem value="Beach">Beach</MenuItem>
              <MenuItem value="Ayurveda & Wellness">Ayurveda & Wellness</MenuItem>
              <MenuItem value="Eco">Eco</MenuItem>
            </Select>

          </FormControl>

          <FormLabel>Package ID</FormLabel>
          <TextField
            value={inputs.pid}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="pid"
            inputProps={{
              pattern: "[A-Za-z0-9]+",
              title: "Only letters and numbers are allowed"
            }}
          />

          <FormLabel>Name</FormLabel>
          <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name" />

          <InputLabel id="overview">Overview</InputLabel>
          <TextField
            id="overview"
            name="overview"
            value={inputs.overview}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={5}
            fullWidth
            margin="normal"
          />

          <FormLabel>Duration</FormLabel>
          <TextField value={inputs.duration} onChange={handleChange} type="normal" margin="normal" fullWidth variant="outlined" name="duration" />

          <InputLabel id="Itininary">Itininary</InputLabel>
          <TextField
            id="itininary"
            name="itininary"
            value={inputs.itininary}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            inputProps={{
              style: { maxHeight: '50px', overflowY: 'auto' },
              rowsMax: 4,
            }}

          />

          <InputLabel id="accomodation">Accomodation</InputLabel>
          <TextField
            id="accomodation"
            name="accomodation"
            value={inputs.accomodation}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            inputProps={{
              style: { maxHeight: '50px', overflowY: 'auto' },
              rowsMax: 4,
            }}
          />

          <FormLabel>Price in Rs</FormLabel>
          <TextField
            value={inputs.lprice}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="lprice"
            inputProps={{
              pattern: "[0-9]*",
              title: "Only numbers are allowed",
              min: 0
            }}
          />

          <FormLabel>Price in $</FormLabel>
          <TextField
            value={inputs.fprice}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="fprice"
            inputProps={{
              pattern: "[0-9]*",
              title: "Only numbers are allowed",
              min: 0
            }}
          />

          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
            inputProps={{
              pattern: "(http(s?):)([/|.|\\w|\\s|-])*\\.(?:jpg|jpeg|png)",
              title: "Please enter a valid image URL"
            }}
          />

          <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />


          <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>Submit</Button>
        </Box>
      </form>
    </>
  );
};

export default AddPckg;