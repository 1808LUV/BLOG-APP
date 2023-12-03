import { Link, useNavigate} from "react-router-dom";
import "./style.css"
import axios from "axios"
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", {
        email,
        password,
      })
      .then(res => {
        if(res.data === "Success") {
          window.location.href = "/home"
        }
      })
      .catch((err) => console.log(err));
    }
  return (
    <div className="signup_container">
      <div className="signup_form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input type="password" placeholder="*********" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button className="signup_btn">Login</button>
        </form>
        <br></br>
        <p>Not registered?</p>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
