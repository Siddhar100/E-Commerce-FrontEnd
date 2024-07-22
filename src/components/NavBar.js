import React from "react";
import NavStyle from "./NavBar.module.css";
const NavBar = () => {
  return (
    <div>
      <div className={NavStyle.Nav}>
        <ul>
          <li className={NavStyle.Item}><a href="#" className={NavStyle.Anchar}>Home</a></li>
          <li className={NavStyle.Item}><a href="#" className={NavStyle.Anchar}>About</a></li>
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
             <a href="#" className={NavStyle.signIn}>Sign In</a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavBar;
