import React, { useState } from "react";
import "./Login.css";

function Login({ switchToSignUp }) {
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      setMessage(`✅ Welcome, ${user.username}!`);
      e.target.reset();
    } else {
      setMessage("❌ Invalid email or password.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="form">
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don’t have an account?{" "}
        <span onClick={switchToSignUp}>Sign Up</span>
      </p>
      <p className="message">{message}</p>
    </div>
  );
}

export default Login;
