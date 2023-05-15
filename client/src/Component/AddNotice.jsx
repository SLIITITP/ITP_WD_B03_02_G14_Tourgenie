import { Box, Button, FormLabel, TextField, TextareaAutosize, Select, MenuItem } from "@mui/material";
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const errors = validateInputs(inputs);
    setErrors(errors);
  
    if (Object.keys(errors).length === 0) {
      sendRequest().then(() => history('/notice'));
    } else {
      const errorMessage = Object.values(errors).map(error => `${error}`).join(' ');
      toast.error(`Please fill in this required fields: ${errorMessage}`);
    }
  };


   


  const validateInputs = (values) => {
    let errors = {};



    if (!values.Title) {
      errors.Title = "Title is required";
    }else if (!/^[a-zA-Z ]+$/.test(values.Title)) {
      errors.Title = "Title must contain only letters and spaces";
    }

    if (!values.author) {
      errors.author = "Author is required";
    }

    // if (values.note.length > 2) {    
    
    //  errors.note('Maximum message length exceeded (2 characters)');
    //   toast.errors.note('Maximum message length exceeded (2 characters)');}
   
      if (!values.note) {    
    
        errors.note = "Description is required";}


    

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


         <br></br><br></br> <br></br>  
        <FormLabel>Ttile</FormLabel>
        <TextField value={inputs.Title} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="Title" style={{ marginBottom: 16 }} />
        





        <FormLabel style={{ marginLeft: 16 }}>Author</FormLabel> 
        <Box display="flex" alignItems="center">
         
          <Select value={inputs.authorPrefix} onChange={handleChange} name="authorPrefix" style={{ marginLeft: 3 }}>
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
            <MenuItem value="Ms.">Ms.</MenuItem>
          </Select>      

          
        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author" style={{ marginBottom: 16 }} />
       

        </Box>
        

        
        <FormLabel>Description</FormLabel>
        <TextareaAutosize value={inputs.note} onChange={handleChange} aria-label="paragraph" minRows={6} placeholder="Type your paragraph here..." name="note"
          style={{ borderStyle: 'solid', borderColor: 'black', borderWidth: '1px', marginBottom: 16 }} />

          

        <FormLabel>Image</FormLabel>
        <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image" style={{ marginBottom: 16 }} />
        
        
        <Button variant="contained" type='submit' style={{ backgroundColor: "#3A1078", color: "#fff" }}>publish</Button>
      </Box>
    </form>

  )
}

export default AddNotice;