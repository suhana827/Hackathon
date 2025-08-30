import React, { useState } from "react";
import "./SignOut.css";

function SignOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignOut = (e) => {
    e.preventDefault();

    // Fetch users array from localStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user to remove
    const userIndex = users.findIndex(
      (u) => u.email === email && u.password === password
    );

    if (userIndex !== -1) {
      // Remove user from array
      users.splice(userIndex, 1);
      localStorage.setItem("users", JSON.stringify(users));
      setMessage("✅ Signed out successfully!");
    } else {
      setMessage("❌ Email or Password is incorrect");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignOut} className="form-box">
        <h2>Sign Out</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Out</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default SignOut;



