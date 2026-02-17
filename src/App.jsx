import React from "react";
import "./index.css";
import { useState } from "react";

export default function App() {
  const [Form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });

  return (
    <div>
      <h1>User Form</h1>
      <label>Name</label>
      <input type="text"  placeholder="Enter your name" />

      <label>E-Mail</label>
      <input type="email" placeholder="Enter your email" />

      <label>Number</label>
      <input type="text" placeholder="Enter your number" />
    </div>
  );
}
