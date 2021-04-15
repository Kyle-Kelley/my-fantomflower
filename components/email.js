import React from "react";
import { useState } from "react";
import styles from "../styles/Email.module.css";
import * as AWS from "aws-sdk";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    alert("Thank you!");
    event.target.reset();
  };

  return (
    <form className={styles.inputContainer} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        placeholder="Full Name"
        onChange={handleChange}
        required
      ></input>
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        onChange={handleChange}
        required
      ></input>
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Email;
