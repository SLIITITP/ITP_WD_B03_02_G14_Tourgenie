import { Box, Button, Modal, Typography } from '@mui/material';
import axios from "axios";
import React from 'react';
import "./Notice.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const style = {
  position: 'fixed',
  top: '50%',
  left: '55%',  
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 620,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '50px',
  boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
  overflow: 'scroll',
  p: 4,
};




  const Package = (props) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const history = useNavigate();
  const { _id, Title, author, note,image,date} = props.packag;

  //deleteHandler
  const deleteHandler = async() => {
    if (window.confirm("Are you sure you want to delete this package?")) {
      await axios
      .delete(`http://localhost:5000/notices/${_id}`)
      .then(res => res.data)
      .then(() => {
        history("/");
        history("/notice");
        toast.success('Package deleted successfully!');
      })
      .catch((err) => {
        console.error(err);
        toast.error('Error deleting package');
      });
    }
  };

  return (
    <div className='cards'>

       

<h1 className="bold-heading" style={{ backgroundColor: '#242443',}}>
         {Title} </h1>
       
        <h3 className="bold-italic-heading">{author}</h3>
        <h2 className="bold-italic-heading">{date}</h2>
        <Button 
        onClick={handleOpen}
        sx={{ 
          mt:"auto",
          backgroundColor: "#3A1078",
          color: "#fff",
          '&:hover': {
            backgroundColor: "#1c2c4c",
            color: "white"
          },
          mr: 1 ,// add margin-right of 16px
          width: "100px", // set width to 100px
          height:"20px"
        }}
        >
        View
        </Button>

        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <h1 className="bold-heading" style={{ backgroundColor: '#242443' }}>{Title}</h1>
        <img src={image} alt={image} /> 
        <br></br>
        <h3>by {author}</h3>        
        <h3>at {date}</h3>  
        <br></br>      
        <p>{note}</p>      
         <br></br> 


       
    <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
      <Button 
        LinkComponent={Link} 
        to={`/notice/${_id}`} 
        sx={{ 
          mt: "auto",
          backgroundColor: "#3A1078",
          color: "#fff",
          '&:hover': {
            backgroundColor: "#19b3bd",
            color: "#3A1078"
          },
          mr: 1 ,// add margin-right of 16px
          width: "100px", // set width to 100px
          height:"20px"
        }}
      >
        Edit
      </Button>

      <Button 
        onClick={deleteHandler} 
        sx={{ 
          mt: "auto",
          backgroundColor: "#3A1078",
          color: "#fff",
          '&:hover': {
            backgroundColor: "#19b3bd",
            color: "#3A1078"
          },
          display: 'inline-flex', // add display inline-flex
          width: "100px", // set width to 100px
          height:"20px"
        }}
      >
        Delete
      </Button>
      </Box>
</Typography>
</Box>
</Modal>
</div>
        
    </div>
  );
};

export default Package;