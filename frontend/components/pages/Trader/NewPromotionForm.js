import React, { useState } from "react";
import { addPromotion } from "../../API/PromotionsAPI";
import { useNavigate } from "react-router";
import "../styles.css";

const NewItemForm = () => {
  let navigate = useNavigate();

  const [promotion, setDetails] = useState({
    name: "",
    description: "",
    discount: "",
  });

  const handleChange = (event) => {
    setDetails({ ...promotion, [event.target.name]: event.target.value });
  };

  const addpromotion = (uri, data) => {
    addPromotion(uri, data)
      .then((res) => {
          console.log("data: ", res);
          navigate('/promotions');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(promotion.name, promotion.description, promotion.discount);
    addpromotion("/promotions", promotion);
  };
  return (
    <div className="center">
      <h2>Add New Promotion</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={promotion.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={promotion.description}
          onChange={handleChange}
              />
              <br />
        <label htmlFor="description">discount</label>
        <br />
        <input
          type="text"
          id="discount"
          name="discount"
          value={promotion.discount}
          onChange={handleChange}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default NewItemForm;
