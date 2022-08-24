import React, { useEffect, useState } from "react";
import { getCustomers } from "../../API/MemberAPI";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";

const Inventory = () => {
  const [loadedPromotions, setPromotions] = useState([]);

  useEffect(() => {
    getCustomers("/promotions")
      .then((res) => {
        setPromotions(res.data);
          console.log(loadedPromotions);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
          <div>
              <Link to="/inventory-items"><span className="link">Inventory</span></Link>
              <Link to="/customers"><span className="link">All Customers</span></Link>
              <Link to="/promotions"><span>Promotions</span></Link>
          </div>
          <br /><h3>All Our Promotions</h3><br />
          <div>
              <Link to="/add-new-promotion"><button className="add-button">Add New Promotion</button></Link>
          </div>
         <br/>
      <ul>
        {loadedPromotions.map((item) => (
          <li key={item.id} className="item">
            <div>{item.name}</div><br/>
            <div>{item.description}</div><br/>
            <div>Discount - {item.discount}</div><br/><br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
