import React from "react";
import CardStyle from "./ByeItem.module.css";

const ByeItem = () => {
  return (
    <div className={CardStyle.Card}>
      <div></div>
      <div className={CardStyle.ItemImage}></div>
      <div className={CardStyle.ItemDetails}>
        <div>
          <h1>
            Iphone 13C (Starshine Green, 4GB RAM, 128GB Storage) | Powered by 4G
            MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera
          </h1>
          <br />
        </div>
        <hr />
        <div>
          <h1> $51,000 </h1>
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
                <li><h3>4GB RAM</h3></li><br/>
                <li><h3>128GB Storage</h3></li><br/>
                <li><h3>I5 Processer</h3></li><br/>
                <li><h3>IPS Display</h3></li><br/>
                <li><h3>Figerprint Senser</h3></li><br/>
            </ul>
            </center>
        </div>
        <hr/>
        <div>
            <center>
            <form>
                <button type="submit" className={CardStyle.ByeNow}>Bye Now</button>
            </form>
            </center>
        </div>
      </div>
    </div>
  );
};

export default ByeItem;
