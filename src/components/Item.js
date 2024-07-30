import React from "react";
import ItemStyles from './Item.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

const Item = (props) => {
  return (
    
      <div className={ItemStyles.itemStyle}>
        <img src="" alt="sorry" height="300vh" width="300vw" />
        <hr />
        <h2 > &nbsp;{props.uri} </h2>
        <p className={ItemStyles.titleStyle}> similique ab, atque sint assumenda! Mollitia quam sequi corporis
          aliquid ut? Neque dolorem exercitationem .
        </p>
        <hr />
        <div >
          &nbsp; <p className={ItemStyles.priceStyle}>$ 51,000</p>
          <div>
            &nbsp; MRP <strike>$1000000</strike>
          </div>
        </div>

        
          <Link to="bye/device" className={ItemStyles.ButtonStyle}>Bye now</Link>
        
      </div>
    
  );
};

export default Item;
