import React, { useEffect, useState } from "react";
import Item from "./Item.js";
import ItemsStyle from "./Items.module.css";
import axios from "axios";

const Items = () => {
  const [userData, setData] = useState([]);
  const getAllData = async () => {
    const url = process.env.REACT_APP_URL;
  await axios.get(`${url}/api/add/getItems`).then(
      (res) => {
        setData(res.data);
        //console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className={ItemsStyle.ItemStyle}>
      {userData.length > 0
        ? userData.map((data, index) => {
            return (
              <Item
                key={index}
                name={data.item}
                price={data.price}
                description={data.description}
              />
            );
          })
        : "No Items!"}
    </div>
  );
};
export default Items;
