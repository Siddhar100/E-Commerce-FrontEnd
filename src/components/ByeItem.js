import React from "react";
import CardStyle from "./ByeItem.module.css";
import IPhone from "../images/iphone.png";

const ByeItem = (props) => {
  return (
    <div className={CardStyle.Card}>
      <div></div>
      <div className={CardStyle.ItemImage}>
        <img src={IPhone} />
      </div>
      <div className={CardStyle.ItemDetails}>
        <div>
          <h1>{props.item_name}</h1>
          <br />
        </div>
        <hr />
        <div>
          <h1> ${props.item_price} </h1>
          <p>
            M.R.P <strike>120000</strike>
          </p>
          <h3>
            Inclusive of all taxes EMI starts at ₹373. No Cost EMI available EMI
            options
          </h3>
          <br />
        </div>
        <hr />
        <div>
          <center>
            <ul type="none">
              <li>
                <h3>4GB RAM</h3>
              </li>
              <br />
              <li>
                <h3>128GB Storage</h3>
              </li>
              <br />
              <li>
                <h3>I5 Processer</h3>
              </li>
              <br />
              <li>
                <h3>IPS Display</h3>
              </li>
              <br />
              <li>
                <h3>Figerprint Senser</h3>
              </li>
              <br />
            </ul>
          </center>
        </div>
        <hr />
        <div>
          <center>
            <form>
              <button type="submit" className={CardStyle.ByeNow}>
                Bye Now
              </button>
            </form>
          </center>
        </div>
      </div>
    </div>
  );
};

export default ByeItem;
