import React, { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [image, setImage] = useState("");

  const newStudent = {
    name,
    age,
    gender,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      alert("Success");
      await axios.post("http://localhost:8070/Student/add", newStudent);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
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
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="text"
            className="form-control"
            id="age"
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            Gender
          </label>
          <input
            type="text"
            className="form-control"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="file" className="form-control"id="image" onChange={convertToBase64}/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddStudent;
