import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");

  //if no dependency array =>useEffect is called on every render
  //if dependency is empty =[]=>useEffect is called on initial render(just once)
  //if dependency array is [btnNameReact]=> called everytime btnNameReact is used
  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  return (
    <div className="header">
      <div className="Logo-Container">
        <img className="Logo" src={LOGO_URL} />
      </div>
      <div className="Nav-bar">
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US </Link>
          </li>
          <li>CART</li>
          <button
            className="Login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
