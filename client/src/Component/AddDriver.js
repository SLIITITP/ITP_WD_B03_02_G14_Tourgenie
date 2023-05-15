import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function AddDriver() {
  const navigate = useNavigate();
  const [empid, setEmpid] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile_number, setMobileNumber] = useState("");
  const [NIC, setNIC] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [license_number, setLicenseNumber] = useState("");
  const [lexpire_date, setLicenseExpireDate] = useState("");
  const [dsalery, setDSalery] = useState("");
  const [image, setImage] = useState("");

  const newdriver = {
    empid,
    name,
    email,
    mobile_number,
    NIC,
    gender,
    location,
    license_number,
    lexpire_date,
    dsalery,
    image,
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

  const submit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !empid ||
      !name ||
      !email ||
      !mobile_number ||
      !NIC ||
      !gender ||
      !location ||
      !license_number ||
      !lexpire_date ||
      !dsalery ||
      !image
    ) {
      toast.error("Please fill in all the fields");
      return;
    }

    try {
      toast.success("Driver added successfully");
      await axios.post("http://localhost:8070/driver/add", newdriver);
      navigate("/driver");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="empid" className="form-label">
            Employee Id
          </label>
          <input
            type="text"
            className="form-control"
            id="empid"
            onChange={(e) => {
              setEmpid(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="mobile_number" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="mobile_number"
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
        id="NIC"
        onChange={(e) => {
          setNIC(e.target.value);
        }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="gender" className="form-label">
        Gender
      </label>
      <select
        className="form-control"
        id="gender"
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>

    <div className="mb-3">
      <label htmlFor="location" className="form-label">
        Location
      </label>
      <input
        type="text"
        className="form-control"
        id="location"
        onChange={(e) => {
          const locationValue = e.target.value;
          const regex = /^[a-zA-Z\s]*$/;
          if (!regex.test(locationValue)) {
            e.target.setCustomValidity("Please enter a valid location");
          } else {
            e.target.setCustomValidity("");
            setLocation(locationValue);
          }
        }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="license_number" className="form-label">
        License Number
      </label>
      <input
        type="text"
        className="form-control"
        id="license_number"
        onChange={(e) => {
          setLicenseNumber(e.target.value);
        }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="lexpire_date" className="form-label">
        License expire date
      </label>
      <input
        type="date"
        className="form-control"
        id="lexpire_date"
        onChange={(e) => {
          setLicenseExpireDate(e.target.value);
        }}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="dsalery" className="form-label">
        Salary
      </label>
      <input
        type="text"
        className="form-control"
        id="dsalery"
        onChange={(e) => {
          setDSalery(e.target.value);
        }}
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

export default AddDriver;