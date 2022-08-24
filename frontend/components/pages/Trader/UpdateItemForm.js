import React, { useState } from "react";
import { getItemById } from "../../api/category.js";
import { useNavigate } from "react-router";
import "../styles.css";

const NewItemForm = () => {
    let navigate = useNavigate();
    
    useEffect(() => {
        getItemById("/inventory", id)
          .then((res) => {
              setLoadedInventoryItems(res.data);
              console.log(loadedInventoryItems);
          })
          .catch((err) => {
            console.log(err);
          });
      }, []);

  const [inventoryItem, setDetails] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleChange = (event) => {
    setDetails({ ...inventoryItem, [event.target.name]: event.target.value });
  };

  const addInventoryItem = (uri, data) => {
    addItem(uri, data)
      .then((res) => {
          console.log("data: ", res);
          navigate('/inventory-items');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inventoryItem.name, inventoryItem.description, inventoryItem.price);
    addInventoryItem("/inventory", inventoryItem);
  };
  return (
    <div className="center">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name</label>
        <br />
        <input
          type="text"
          id="name"
          name="name"
          value={inventoryItem.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Description</label>
        <br />
        <input
          type="text"
          id="description"
          name="description"
          value={inventoryItem.description}
          onChange={handleChange}
              />
              <br />
        <label htmlFor="description">Price</label>
        <br />
        <input
          type="text"
          id="price"
          name="price"
          value={inventoryItem.price}
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
