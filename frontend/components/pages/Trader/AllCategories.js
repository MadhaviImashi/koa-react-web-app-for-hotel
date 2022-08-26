import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";

const Categories = () => {
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    getAllCategories("/api/categories/all")
      .then((res) => {
          setLoadedCategories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
          <Link to="/logout"><span className="link">All rooms</span></Link>
      </div>
      <br /><h3>All Categories</h3><br />
      <ul>
        {loadedCategories.map((item) => (
          <li key={item._id} className="item">
            <div>{item.name}</div>
                <div>Description: {item.description}</div><br/>
                <div>Room: {item.room}</div><br/>
                <button>Update</button>
                <br/><br/>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
