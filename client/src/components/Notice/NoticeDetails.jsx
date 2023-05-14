import { Box, Button, FormLabel, TextField, TextareaAutosize } from "@mui/material";
import axios from 'axios';
import React, { useEffect, useState } from 'react'

import { toast } from "react-toastify";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useNavigate, useParams } from 'react-router-dom'

const NoticeDetails = () => {
  const [inputs, setInputs] = useState({});
  const id = useParams().id;
  //const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const histroy = useNavigate();
  //console.log(id);

  useEffect(() => {
    const fetchHandler = async() => {
        await axios
        .get(`http://localhost:5000/notices/${id}`)
        .then((res) => res.data)
        .then(data => setInputs(data.package));
    };
    fetchHandler()
    //.then((data) => setInputs(data.packag));
  }, [id]);

  //create request to db
  const sendRequest = async() => {
    await axios.put(`http://localhost:5000/notices/${id}`, {
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
    sendRequest()
      .then(() => {
        toast.success("update successful!");
        histroy("/notice");
      })
      .catch(() => {
        toast.error("failed!");
      });
  };
    //define handleChange
    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
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

    
    <div>
    {inputs && 
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
        <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" />
        {errors.image && <div>{errors.image}</div>}


    <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>publish</Button>
    </Box>
    </form>}
    </div>
  );
};

export default NoticeDetails