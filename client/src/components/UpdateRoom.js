import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateRoom = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [room, setRoom] = useState({});
  useEffect(() => {
    const getRoom = async () => {
      const res = await axios.get(`/api/rooms/getRoom/${id}`);
      setRoom(res.data.room);
    };
    getRoom();
  }, [id]);

  console.log(room);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRoom((prevRoom) => ({
      ...prevRoom,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      });
      if (result.isConfirmed) {
        const res = await axios.put(`/api/Rooms/updateRooms/${id}`, room);
        Swal.fire("Saved!", "", "success");
        navigate("/admin");
      } else {
        Swal.fire("Changes are not saved", "", "info");
      }
    } catch (err) {
      Swal.fire("Not Updated", err.message, "error");
    }
  };

  return (
    <div style={{ padding: "100px" }}>
      <h1 style={{ marginBottom: "20px" }}>Update Room</h1>
      <div className="row">
        <div className="col-md-5">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="room name"
            defaultValue={room.name}
            onChange={handleInputChange}
          />
          <input
            name="rentperday"
            type="text"
            className="form-control"
            placeholder="rent per day"
            defaultValue={room.rentperday}
            onChange={handleInputChange}
          />
          <input
            name="maxcount"
            type="text"
            className="form-control"
            placeholder="max count"
            defaultValue={room.maxcount}
            onChange={handleInputChange}
          />
          <input
            name="description"
            type="text"
            className="form-control"
            placeholder="description"
            defaultValue={room.description}
            onChange={handleInputChange}
          />
          <input
            name="phonenumber"
            type="text"
            className="form-control"
            placeholder="phone number"
            defaultValue={room.phonenumber}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-5">
          <input
            name="type"
            type="text"
            className="form-control"
            placeholder="type"
            defaultValue={room.type}
            onChange={handleInputChange}
          />
          <input
            name="image1"
            type="text"
            className="form-control"
            placeholder="image URL 1"
            defaultValue={
              room.imageurls && room.imageurls.length > 0
                ? room.imageurls[0]
                : ""
            }
            onChange={handleInputChange}
          />
          <input
            name="image2"
            type="text"
            className="form-control"
            placeholder="image URL 2"
            defaultValue={
              room.imageurls && room.imageurls.length > 0
                ? room.imageurls[1]
                : ""
            }
            onChange={handleInputChange}
          />
          <input
            name="image3"
            type="text"
            className="form-control"
            placeholder="image URL 3"
            defaultValue={
              room.imageurls && room.imageurls.length > 0
                ? room.imageurls[2]
                : ""
            }
            onChange={handleInputChange}
          />

          <div className="text-right">
            <button className="btn btn-primary mt-2" onClick={handleFormSubmit}>
              Update Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRoom;
