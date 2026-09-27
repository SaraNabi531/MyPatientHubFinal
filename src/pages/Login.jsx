import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter your email and password.");
      return;
    }

    navigate("/dashboard");
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          M
        </div>

        <h1>MyPatientHUB</h1>

        <p className="login-subtitle">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="forgot-password">
            <a
              href="#"
              onClick={(e) => e.preventDefault()}
            >
              Forgot Password?
            </a>
          </div>

          <button type="submit">
            Login
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;