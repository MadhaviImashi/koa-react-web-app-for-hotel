import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../api/category";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";

const Categories = () => {
  const [loadedCategories, setLoadedCategories] = useState([]);

  useEffect(() => {
    getAllCategories("/api/categories/all")
      .then((res) => {
          console.log(res.data);
          setLoadedCategories(res.data);
          console.log('after', loadedCategories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log('after2', loadedCategories);

  return (
    <div>
          <div>
              <Link to="/logout"><span className="link">All rooms</span></Link>
          </div>
          <br /><h3>All Categories</h3><br />
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
