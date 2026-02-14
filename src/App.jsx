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
      <label>Name</label>
      <input type="text" name="name" placeholder="Enter your name" />

      <label>E-Mail Address</label>
      <input type="email" name="email" placeholder="Email" />

      <label>Phone Number</label>
      <input type="text" name="number" placeholder="Number" />
    </div>
  );
}
