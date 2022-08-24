import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../styles.css";
import { addRoom, getRoomById } from "../../api/room.js";

const UpdateRoomForm = (props) => {
  let navigate = useNavigate();

  const [room, setDetails] = useState({
    code: "",
    amount: null,
    wing: "",
    pax: null,
    categories: []
  });

  useEffect(() => {
    console.log('prop.id: ', props.selectedRoomId);
    getRoomById("/api/rooms/", props.selectedRoomId)
      .then((res) => {
          setDetails(res.data);
          console.log('res.data: ', res.data, 'roommmm: ', room);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  const handleChange = (event) => {
    setDetails({ ...room, [event.target.name]: event.target.value });
  };

  const addroom = (uri, data) => {
    addRoom(uri, data)
      .then((res) => {
          console.log("new room: ", res);
          navigate('/rooms');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(room.code, room.amount, room.wing, room.pax, room.categories);
    addroom("/api/rooms/add", room);
  };
  return (
    <div className="center">
      <h2>Add New Room</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Room Number</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={room.code}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="price">price</label>
        <br />
        <input
          type="text"
          id="price"
          name="price"
          value={room.amount}
          onChange={handleChange}
              />
              <br />
        <label htmlFor="description">Price</label>
        <br />
        <input
          type="text"
          id="wing"
          name="wing"
          value={room.wing}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UpdateRoomForm;
