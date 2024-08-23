import React, { useState } from "react";
import { useEffect } from "react";
import OrdersStyle from "./Oders.module.css";
import Oder from "./Order.js";

const Orders = () => {
  const [odersData, setData] = useState([]);
  const getItems = async () => {
    const url = process.env.REACT_APP_URL;
    const emailId = localStorage.getItem('user_name');
    const response = await fetch(`${url}/api/oders/getOrders`,{
        method : 'POST',
        headers : {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({email:emailId})
    });
    const json = await response.json();
    setData(json);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <div className={OrdersStyle.BackGround}>
      {odersData.length > 0
        ? odersData.map((data, index) => {
            return (
              <Oder
                key={index}
                name={data.itemCode}
              />
            );
          })
        : "No Orders has been made!"}
    </div>
  );
};
export default Orders;
