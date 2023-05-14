import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom';

function Addroom() {
  const navigate = useNavigate()

  const [name, setname] = useState("")
  const[rentperday, setrentperday] = useState()
  const [maxcount , setmaxcount]= useState()
  const[description, setdescription] = useState()
  const[phonenumber, setphonenumber] = useState()
  const[type, settype] = useState()
  const[imageurl1, setimageurl1] = useState()
  const[imageurl2, setimageurl2]= useState()
  const[imageurl3, setimageurl3]= useState()

  async function addRoom(){
    if(name === ""){
      Swal.fire("Must include a hotel name!","","success")
    }

    const newroom= {
      name,
      rentperday,
      maxcount,
      description,
      phonenumber,
      type,
      imageurls:[imageurl1, imageurl2, imageurl3]

    }

    try{
     
      console.log(name)
      const result = await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });
      if (result.isConfirmed) {
        const result = await (await axios.post('/api/rooms/addroom',newroom)).data
        Swal.fire("Saved!", "", "success");
        navigate("/admin");
      } else {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (err) {
      Swal.fire("Not Updated", err.message, "error");
    }

     
    


  }


  return (
    <div className="row">
    <div className="col-md-5">
      <input
        name="name"
        type="text"
        className="form-control"
        placeholder="room name"
        value={name}
        onChange={(e) => {
          setname(e.target.value);
        }}
      />
      <input
        name="rentperday"
        type="text"
        className="form-control"
        placeholder="rent per day"
        value={rentperday}
        onChange={(e) => {
          setrentperday(e.target.value);
        }}
      />
      <input
        name="maxcount"
        type="text"
        className="form-control"
        placeholder="max count"
        value={maxcount}
        onChange={(e) => {
          setmaxcount(e.target.value);
        }}
      />
      <input
        name="description"
        type="text"
        className="form-control"
        placeholder="description"
        value={description}
        onChange={(e) => {
          setdescription(e.target.value);
        }}
      />
      <input
        type="text"
        className="form-control"
        placeholder="phone number"
        value={phonenumber}
        onChange={(e) => {
          setphonenumber(e.target.value);
        }}
      />
    </div>
    <div className="col-md-5">
      <input
        name="type"
        type="text"
        className="form-control"
        placeholder="type"
        value={type}
        onChange={(e) => {
          settype(e.target.value);
        }}
      />
      <input
        name="image1"
        type="text"
        className="form-control"
        placeholder="image URL 1"
        value={imageurl1}
        onChange={(e) => {
          setimageurl1(e.target.value);
        }}
      />
      <input
        name="image2"
        type="text"
        className="form-control"
        placeholder="image URL 2"
        value={imageurl2}
        onChange={(e) => {
          setimageurl2(e.target.value);
        }}
      />
      <input
        name="image3"
        type="text"
        className="form-control"
        placeholder="image URL 3"
        value={imageurl3}
        onChange={(e) => {
          setimageurl3(e.target.value);
        }}
      />

      <div className="text-right">
        <button className="btn btn-primary mt-2" onClick={addRoom}>
          Add Room
        </button>
      </div>
    </div>
  </div>
  )
}

export default Addroom