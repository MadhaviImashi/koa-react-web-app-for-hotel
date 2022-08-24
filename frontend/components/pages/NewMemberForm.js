import React, { useState } from "react";
import { registerMember } from "../api/MemberAPI.js";
import { useNavigate } from "react-router";
import "./styles.css";

const NewMemberForm = () => {
  let navigate = useNavigate();

  const [memberDetails, setDetails] = useState({
    fname: "",
    lname: "",
    role: "",
  });

  const handleChange = (event) => {
    setDetails({ ...memberDetails, [event.target.name]: event.target.value });
  };

  const addMember = (uri, data) => {
    registerMember(uri, data)
      .then((res) => {
        console.log("data: ", res);
        if (memberDetails.role === "customer") {
          navigate("/shopping-store");
        } else {
          navigate("/inventory-items");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(memberDetails.fname, memberDetails.lname, memberDetails.role);
    addMember("/members", memberDetails);
  };
  return (
    <div className="center">
      <h2>Create User Profile</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fname">First name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={memberDetails.fname}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input
          type="text"
          id="lname"
          name="lname"
          value={memberDetails.lname}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="radio"
          id="trader"
          name="role"
          value="trader"
          onChange={handleChange}
        />
          <label htmlFor="trader">Trader</label>
        <br /> {" "}
        <input
          type="radio"
          id="customer"
          name="role"
          value="customer"
          onChange={handleChange}
        />
          <label htmlFor="customer">customer</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewMemberForm;
