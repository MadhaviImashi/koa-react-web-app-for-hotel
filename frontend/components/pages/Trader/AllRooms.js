import React, { useEffect, useState } from "react";
import { getAllRooms } from "../../api/room";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";
// import UpdateRoomForm from "./UpdateRoomForm";
import { useNavigate } from "react-router";
import UpdateRoomForm from "./UpdateRoomForm";

const Categories = () => {
  const [loadedRooms, setloadedRooms] = useState([]);
  const [UpdateFormIsOpen, showUpdateForm] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    getAllRooms("/api/rooms/all")
      .then((res) => {
          console.log(res.data);
          setloadedRooms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('after2', loadedRooms);

  const navigateToUpdateRoomForm = (roomId) => {
    console.log('room id', roomId);
    navigate('/update-room');
  }

  return (
    <div>
      {!UpdateFormIsOpen ? 
        <div>
            <div>
                <Link to="/add-room"><span className="link">Add new room</span></Link>
            </div>
            <br /><h3>All Rooms</h3><br />
            <ul>
              {loadedRooms.map((item) => (
                <li key={item._id} className="item">
                  <div>{item.code}</div>
                      <div>Description: {item.amount}</div><br/>
                      <div>Room: {item.wing}</div><br/>
                      <div>Room: {item.pax}</div><br/>
                      <div>Categories list: {item.categories.map((category) => (
                        <li key={category.id} className="item">{category.name}</li>
                      ))}</div>
                  <button onClick={() => { showUpdateForm(true); setSelectedRoomId(item._id); }}>Update room</button>
                  {/* {UpdateFormIsOpen ? () => { navigateToUpdateRoomForm(item.id) } : null} */}
                </li>
              ))}
            </ul>
          </div>
          : <UpdateRoomForm selectedRoomId={selectedRoomId} />}
    </div>
  );
};

export default Categories;
