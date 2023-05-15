import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function AddEmployee() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [NIC, setNIC] = useState("");
  const [gender, setGender] = useState("");
  const [etype, setEType] = useState("");
  const [esalary, setEsalary] = useState("");
  const [image, setImage] = useState("");

  const convertToBase64 = (e) => {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{0,11}$/;
    const isValid = regex.test(phoneNumber);

    if (!isValid) {
      toast.error("Invalid phone number input");
    }

    return isValid;
  };

  const validateForm = () => {
    if (
      !username ||
      !password ||
      !email ||
      !name ||
      !mobile_number ||
      !NIC ||
      !gender ||
      !etype ||
      !esalary ||
      !image
    ) {
      toast.error("Please fill in all fields");
      return false;
    }

    if (!validatePhoneNumber(mobile_number)) {
      return false;
    }

    return true;
  };

  const submit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      toast.success("Success");
      const response = await axios.post("http://localhost:8070/Employee/add", {
        username,
        password,
        email,
        name,
        mobile_number,
        NIC,
        gender,
        etype,
        esalary,
        image,
      });
      navigate("/Employee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer />
      <form action="post">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="number"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className ="form-label">
Name
</label>
<input
type="text"
className="form-control"
id="name"
onChange={(e) => setName(e.target.value)}
/>


</div>
<div className="mb-3">
<label htmlFor="number" className="form-label">
Phone Number
</label>
<input
  type="number"
  maxLength="10"
  className="form-control"
  id="nic"
  value={mobile_number}
  onChange={(e) => setMobileNumber(e.target.value.slice(0, 10))}
/>
</div>
<div className="mb-3">
<label htmlFor="NIC" className="form-label">
NIC
</label>
<input
type="text"
className="form-control"
id="nic"
onChange={(e) => setNIC(e.target.value)}
/>
</div>
<div className="mb-3">
<label htmlFor="gender" className="form-label">
Gender
</label>
<select
className="form-control"
id="gender"
onChange={(e) => setGender(e.target.value)}
>
<option value="">Select Gender</option>
<option value="male">Male</option>
<option value="female">Female</option>
</select>
</div>
<div className="mb-3">
<label htmlFor="Employee" className="form-label">
Employee
</label>
<select
className="form-control"
id="etype"
onChange={(e) => setEType(e.target.value)}
>
<option value="">Select Employee</option>
<option value="Booking manager">Booking manager</option>
<option value="Transport manager">Transport manager</option>
<option value="Hotel manager">Hotel manager</option>
<option value="Event manager">Event manager</option>
<option value="Package manager">Package manager</option>
</select>
</div>
<div className="mb-3">
<label htmlFor="email" className="form-label">
Salary (Rs.)
</label>
<input
type="text"
className="form-control"
id="email"
onChange={(e) => setEsalary(e.target.value)}
/>
</div>
<div className="mb-3">
<label htmlFor="image" className="form-label">
Image
</label>
<input
         type="file"
         className="form-control"
         id="image"
         onChange={convertToBase64}
       />
</div>
<button type="submit" onClick={submit} className="btn btn-primary">
Submit
</button>
</form>
</div>
);
}

export default AddEmployee;