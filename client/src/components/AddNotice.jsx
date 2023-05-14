import { Box, Button, FormLabel, TextField, TextareaAutosize } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddNotice = () => {
  const history = useNavigate();
  const [errors, setErrors] = useState({});

  //db conn
  const [inputs, setInputs] = useState({
    Title:'',
    author:'',
    note: '',
    image: '',
  });

  //define handleChange
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
 

   
  //create request to db
  const sendRequest = async() => {
    await axios.post(`http://localhost:5000/notices`, {
      Title: String(inputs.Title),
      author: String(inputs.author),
      note: String(inputs.note),     
      image: String(inputs.image),      
    }).then(res => res.data);

  }


  //define handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateInputs(inputs));
    console.log("Inputs:", inputs);
    console.log("Errors:", errors);
    sendRequest().then(() => history('/notice'))
  };

  const validateInputs = (values) => {
    let errors = {};

    if (!values.Title) {
      errors.Title = "Title is required";
    }

    if (!values.author) {
      errors.author = "Author is required";
    }

    if (!values.image) {
      errors.image = "Image is required";
    }

    return errors;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        display= "flex"
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
        <FormLabel>Title</FormLabel>
        <TextField value={inputs.Title} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="Title" />
        {errors.Title && <div>{errors.Title}</div>}

        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" />
        {errors.author && <div>{errors.author}</div>}

        <FormLabel>Description</FormLabel>
        <TextareaAutosize value={inputs.note} onChange={handleChange} aria-label="paragraph" minRows={6} placeholder="Type your paragraph here..." name="note"
          style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '1px' }} />

        <FormLabel>Image</FormLabel>
        <TextField value={inputs.Image}  onChange={handleChange} margin="normal" fullWidth variant="outlined"   name="image"/>
        {errors.image && <div>{errors.image}</div>}

        <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>publish</Button>
      </Box>
    </form>

  )
}

export default AddNotice;