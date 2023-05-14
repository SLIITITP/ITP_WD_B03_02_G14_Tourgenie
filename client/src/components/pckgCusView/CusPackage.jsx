import { Box, Button, Modal, Typography } from '@mui/material';
import axios from "axios";
import React from 'react';
import "./CusPackage.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CusPackage = (props) => {
    const { _id, pid, category, name, overview, duration, itininary, accomodation, lprice, fprice, image, date } = props.packag;


    return (
    
        <div className='card'>
          <h3 className="bold-heading">{pid}</h3>
          <img src={image} alt={name} />
          <h2 className="bold-italic-heading">{name}</h2>
          <Button
            onClick={handleOpen}
            sx={{
              backgroundColor: "#3A1078",
              color: "#fff",
              '&:hover': {
                backgroundColor: "#fff",
                color: "#3A1078"
              }
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
              <Box sx={{...style, maxHeight: '80vh', overflowY: 'auto'}}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <b>{pid}</b>
                  <img src={image} alt={name} />
                  <b>{category}</b>
                  <br/>
                  <b>{name}</b>
                  <br/>
                  <br/>
                  <h5> {overview} </h5>
                  <br/>
                  <h5>{duration}</h5>
                  <br/>
                  <h2>{itininary}</h2>
                  <br/>
                  <h2>{accomodation}</h2>
                  <br/>
                  <h3>Rs.{lprice} / $ {fprice}</h3>
                  <br/>
                  <h3>{date}</h3>
    
                  <Button
                    LinkComponent={Link}
                    to={`/packages/${_id}`}
                    sx={{
                      mt: "auto",
                      backgroundColor: "#3A1078",
                      color: "#fff",
                      '&:hover': {
                        backgroundColor: "#00ff00",
                        color: "#3A1078"
                      },
                      mr: 20 // add margin-right of 16px
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
                        backgroundColor: "#ff0000",
                        color: "#3A1078"
                      },
                      ml: 20 // add margin-left of 16px
                    }}
                  >
                    Delete
                  </Button>
                </Typography>
              </Box>
            </Modal>
          </div>
    
        </div>
      );
}

export default CusPackage;