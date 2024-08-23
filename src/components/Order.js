import React from 'react';
import Oder from './Oder.module.css';
import OrderImage from "../images/checklist.png";
const Orders = (props) =>{
    return (
        <div className={Oder.OrderView}>
              <div className={Oder.Icon}>
                  <img src={OrderImage} alt='sorry' height="90%" width="100%"/>
              </div>
              <div className={Oder.Desc}>
                 <h2>{props.name}</h2>
              </div>
              <div className={Oder.Status}>
                   <form>
                      <button type="submit" className={Oder.submitButton}>Cancel</button>
                   </form>
              </div>
        </div>
    )
};

export default Orders;