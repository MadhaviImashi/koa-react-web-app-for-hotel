import React, { useState } from "react";
import { useNavigate } from "react-router";
import "../styles.css";
import { addRoom } from "../../api/room.js";

const NewRoomForm = () => {
  let navigate = useNavigate();

  const [room, setDetails] = useState({
    code: "",
    amount: null,
    wing: "",
    pax: null,
    categories: []
  });

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
        <label htmlFor="description">Wing</label>
        <br />
        <input
          type="text"
          id="wing"
          name="wing"
          value={room.wing}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="pax">Pax</label>
        <br />
        <input
          type="Number"
          id="pax"
          name="pax"
          value={room.pax}
          onChange={handleChange}
              />
              <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewRoomForm;
