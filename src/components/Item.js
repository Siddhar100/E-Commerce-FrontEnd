import React from "react";
import ItemStyles from "./Item.module.css";
import IPhone from "../images/iphone.png";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const nevigate = useNavigate();
  const itemPage = () =>{
    nevigate('/bye',{state:{item_name:props.name,item_price:props.price}});
  }
  return (
    <div className={ItemStyles.itemStyle}>
      <img src={IPhone} alt="sorry" height="300vh" width="300vw" />
      <hr />
      <h2> &nbsp;{props.name} </h2>
      <p className={ItemStyles.titleStyle}>
        {" "}
        {props.description}
      </p>
      <hr />
      <div>
        &nbsp; <p className={ItemStyles.priceStyle}>$ {props.price}</p>
        <div>
          &nbsp; MRP <strike>51000</strike>
        </div>
      </div>
      <form onSubmit={itemPage}>
         <input type="submit" className={ItemStyles.ButtonStyle} value="Bye Now"/>
      </form>
    </div>
  );
};

export default Item;
