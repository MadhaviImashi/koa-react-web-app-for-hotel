import React, { useEffect, useState } from "react";
import { getCustomers } from "../../API/MemberAPI";
import { Link } from "react-router-dom";
import "../../Pages/styles.css";

const Inventory = () => {
  const [loadedCustomers, setLoadedCustomers] = useState([]);

  useEffect(() => {
    getCustomers("/members")
      .then((res) => {
        setLoadedCustomers(res.data);
          console.log(loadedCustomers);
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
          <br />
          <h3>All Our Customers</h3>
      <ul>
        {loadedCustomers.map((item) => (
          <li key={item.id} className="item">
            <div>{item.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Inventory;
