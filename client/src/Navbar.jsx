import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import { useContext } from "react";
import { userContext } from "./App";
import axios from "axios";

function Navbar() {
  const user = useContext(userContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("http://localhost:3001/logout")
      .then((res) => {
        if (res.data === "Success") navigate(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="navbar-header">
      <div>
        <h3>BLOG</h3>
      </div>
      <div>
        <Link to="/home" className="link">
          Home
        </Link>
        {
            user.username ? 
            <Link to="/create" className="link">Create</Link>
            : <></>
        }
      </div>
      {user.username ? (
        <div>
          <input
            type="button"
            value="Logout"
            className="btn_input"
            onClick={handleLogout}
          />
        </div>
      ) : (
        <div>
          <h5>
            <Link to="/register" className="link">
              Register/Login
            </Link>
          </h5>
        </div>
      )}
    </div>
  );
}

export default Navbar;
