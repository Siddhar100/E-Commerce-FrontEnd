import React from "react";
import NavStyle from "./NavBar.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <div className={NavStyle.Nav}>
        <ul>
          <li className={NavStyle.Item}><Link to="/" className={NavStyle.Anchar}>Home</Link></li>
          <li className={NavStyle.Item}><Link to="/About" className={NavStyle.Anchar}>About</Link></li>
        </ul>
        <div className={NavStyle.search}>
          <form>
            <input
              type="text"
              placeholder="search"
              className={NavStyle.textField}
            />
            <button type="submit" className={NavStyle.buttonField}>
              search
            </button>
          </form>
          <div>
             <Link to="/SignIn" className={NavStyle.signIn}>Sign In</Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
