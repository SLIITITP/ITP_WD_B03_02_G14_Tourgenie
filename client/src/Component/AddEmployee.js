import React,{useState} from "react"
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';


function AddEmployee(){
  const navigate = useNavigate();


    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [name,setName]=useState("");
    const [mobile_number,setMobilenumber]=useState("");
    const [NIC,setNIC]=useState("");
    const [gender,setgender]=useState("");
    const [etype,setEType]=useState("");
    const [esalery,setEsalery]=useState("");
    const [image,setImage]=useState("");
    
/*
    const senData =(e)=>{
        e.preventDefault();*/
        


        const newEmployee ={
            username,
            password,
            email,
            name,
            mobile_number,
            NIC,
            gender,
            etype,
            esalery,
            image


        };
        function convertToBase64(e) {
          var reader = new FileReader();
          reader.readAsDataURL(e.target.files[0]);
          reader.onload = () => {
            console.log(reader.result);
            setImage(reader.result);
          };
          reader.onerror = (error) => {
            console.log("Error: ", error);
          };
        }


        

        const submit =async(e) =>{
            e.preventDefault();



            try{
                alert("susses");
                axios.post("http://localhost:8070/Employee/add",newEmployee)
                navigate("/Employee");

            }
            catch(e){
                console.log(e);


            }

            

        }
        

    return(
<div className="container">
 
        <form action="post">
  <div className="mb-3">
    <label for="username" class="form-label">User Name</label>
    <input type="text" class="form-control" id="username"  onChange={(e)=>{setUsername(e.target.value);}}/>
    
  </div>
  <div className="mb-3">
    <label for="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="number"onChange={(e)=>{setPassword(e.target.value);}}/>
  </div>
 
  <div className="mb-3">
    <label for="email" className="form-label">Email</label>
    <input type="text" className="form-control" id="email"onChange={(e)=>{setEmail(e.target.value);}}/>
  </div>

  <div className="mb-3">
    <label for="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"onChange={(e)=>{setName(e.target.value);}}/>
  </div>

  <div className="mb-3">
  <label htmlFor="contact number" className="form-label">Contact Number</label>
  <input type="text" className="form-control" id="mobile_number" onKeyPress={(e) => {
    const keyCode = e.which || e.keyCode; // get the key code of the pressed key
    const keyValue = String.fromCharCode(keyCode); // convert key code to character

    if (/[^0-9]/.test(keyValue)) { // if the entered character is not a number
      e.preventDefault(); // prevent the character from being entered
    } else {
      let mobileNumber = e.target.value; // get the current value of the input field
      if (mobileNumber.length === 10) { // if 10 numerical characters are entered, prevent further input
        e.preventDefault();
      } else {
        mobileNumber += keyValue; // add the entered character to the input field value
        e.target.value = mobileNumber.slice(0, 10); // update the input field value and allow only 10 digits
      }
    }
  }} />
</div>


  <div className="mb-3">
  <label for="NIC" className="form-label">NIC</label>
  <input type="text" className="form-control" id="NIC" onKeyPress={(e) => {
    const keyCode = e.which || e.keyCode; // get the key code of the pressed key
    const keyValue = String.fromCharCode(keyCode); // convert key code to character

    if (/[^0-9]/.test(keyValue)) { // if the entered character is not a number
      e.preventDefault(); // prevent the character from being entered
    } else {
      let nicValue = e.target.value; // get the current value of the input field
      if (nicValue.length === 9 && !/v/i.test(nicValue)) { // if 9 numerical characters are entered, add 'v' at the end
        nicValue += 'v';
      }
      e.target.value = nicValue; // update the input field value
    }
  }} />
</div>


  <div className="mb-3">
  <label for="gender" className="form-label">Gender</label>
  <select className="form-control" id="gender" onChange={(e)=>{setgender(e.target.value);}}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
</div> 

<div className="mb-3">
  <label for="Employee" className="form-label">Employee</label>
  <select className="form-control" id="etype" onChange={(e)=>{setEType(e.target.value);}}>
    <option value="">Select Employee</option>
    <option value="Booking manager">Booking manager</option>
    <option value="Transport manager">Transport manager</option>
    <option value="Hotel manager">Hotel manager</option>
    <option value="Event manager">Event manager</option>
    <option value="Package manager">package manager</option>
  </select>
</div>

<div className="mb-3">
    <label for="email" className="form-label">Salery (Rs.)</label>
    <input type="text" className="form-control" id="email"onChange={(e)=>{setEsalery(e.target.value);}}/>
  </div>



  <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file" className="form-control"id="image" onChange={convertToBase64}/>
        </div>
  <button type="submit"  onClick={submit} className="btn btn-primary">Submit</button>
</form>


</div>

    );
}
export default AddEmployee;