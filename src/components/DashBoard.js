import React from "react";
import DashBoardStyle from "./DashBoard.module.css";
import Orders from "../images/checklist.png";
import Security from "../images/lock.png";
import Payments from "../images/payment.png";
import Support from "../images/contact.png";
import LogOut from "../images/logout.jpg";
import { useNavigate } from 'react-router-dom';

const DashBoard = () => {
  const navigate = useNavigate();
  const logout = () =>{
    localStorage.removeItem("user_name");
    navigate("/signIn");
  }
  return (
    <div className={DashBoardStyle.formInput}>
      <div className={DashBoardStyle.Option}>
        <div className={DashBoardStyle.OptionImage}>
          <img src={Orders} alt="sorry" height="98%" width="95%" />
        </div>
        <div className={DashBoardStyle.OptionInfo}>
          <center>
            <h2>Orders</h2>
            <p>Orders product.</p>
            <a href="#">Click Here</a>
          </center>
        </div>
      </div>

      <div className={DashBoardStyle.Option}>
        <div className={DashBoardStyle.OptionImage}>
          <img src={Security} alt="sorry" height="98%" width="95%" />
        </div>
        <div className={DashBoardStyle.OptionInfo}>
          <center>
            <h2>Security</h2>
            <p>Change Password.</p>
            <a href="#">Click Here</a>
          </center>
        </div>
      </div>

      <div className={DashBoardStyle.Option}>
        <div className={DashBoardStyle.OptionImage}>
          <img src={Payments} alt="sorry" height="98%" width="95%" />
        </div>
        <div className={DashBoardStyle.OptionInfo}>
          <center>
            <h2>Payments</h2>
            <p>Change payments mode.</p>
            <a href="#">Click Here</a>
          </center>
        </div>
      </div>

      <div className={DashBoardStyle.Option}>
        <div className={DashBoardStyle.OptionImage}>
          <img src={Support} alt="sorry" height="98%" width="95%" />
        </div>
        <div className={DashBoardStyle.OptionInfo}>
          <center>
            <h2>Support</h2>
            <p>Contact Us.</p>
            <a href="#">Click Here</a>
          </center>
        </div>
      </div>

      <div className={DashBoardStyle.Option}>
        <div className={DashBoardStyle.OptionImage}>
          <img src={LogOut} alt="sorry" height="98%" width="95%" />
        </div>
        <div className={DashBoardStyle.OptionInfo}>
          <center>
            <h2>Log Out</h2>
            <p>Sign out from DashBoard.</p>
            <a href="#" onClick={logout}>Log Out</a>
          </center>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
