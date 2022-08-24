import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";

const Categories = () => {
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    getAllCategories("/api/categories/all")
      .then((res) => {
          setLoadedCategories(res.data);
          console.log(loadedCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
          <div>
              <Link to="/rooms"><span className="link">All rooms</span></Link>
          </div>
          <br /><h3>All Categories</h3><br />
          <div>
              <Link to="/add-new-item"><button className="add-button">Add New Item</button></Link>
          </div>
         <br/>
      <ul>
        {loadedCategories.map((item) => (
          <li key={item.id} className="item">
            <div>{item.name}</div>
                <div>Description: {item.description}</div><br/>
                <div>Room: {item.room}</div><br/>
                <button>Update</button>
                <br/><br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
