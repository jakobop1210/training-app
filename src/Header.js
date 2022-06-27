import React from "react";
  
const Header = () => {
    return (
        <>
        <div className="headerDiv">
            <ul className="headerMenu">
                <li className="register">Register</li>
                <li className="login">Login</li>
            </ul>
        </div>
        <div className="menuDiv">
          <ul className="menuList">
            <li>Training</li>
            <li>Weight</li>
            <li>Food</li>
            <li>My profile</li>
          </ul>
        </div>
        </>
    )
}

export default Header;
