import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ switchToLogin }) {
  const [message, setMessage] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const age = e.target.age.value;
    const password = e.target.password.value;

    // Always fetch users array
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // check if user already exists by email
    if (users.some((u) => u.email === email)) {
      setMessage("⚠️ User already exists. Please login.");
      return;
    }

    // push new user
    users.push({ username, email, phone, age, password });
    localStorage.setItem("users", JSON.stringify(users));

    // success message
    setMessage("✅ Sign up successful! Please login.");
    e.target.reset();

    // switch to login after success
    setTimeout(() => switchToLogin(), 1500);
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp} className="form">
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <input type="number" name="age" placeholder="Age" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account?{" "}
        <span onClick={switchToLogin}>Login</span>
      </p>
      <p className="message">{message}</p>
    </div>
  );
}

export default SignUp;
