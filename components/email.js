import React from "react";
import { useState } from "react";
import styles from "../styles/Email.module.css";
import axios from "axios";
// // import * as AWS from "aws-sdk";
// // import { APIGateway } from "aws-sdk/clients/all";
// import Amplify from "aws-amplify";
// import { API } from "aws-amplify";
// // import awsExports from "./aws-exports";
// // Amplify.configure(awsExports);

const Email = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(email);
  //   alert("Thank you!");
  //   event.target.reset();
  // };

  async function AddContact(event) {
    event.preventDefault();
    const data = {
      name: name,
      email: email,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/c099cfb9-2a22-4ea6-ad14-1d9cd1d6851e",
        data
      )
      .then((response) => {
        console.log(response);
      });
    alert("Thank you!");
    event.target.reset();
  }

  return (
    <form className={styles.inputContainer} onSubmit={AddContact}>
      <input
        className={styles.input}
        type="text"
        placeholder="Full Name"
        name="name"
        value={name}
        onChange={handleNameChange}
        required
      ></input>
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        name="email"
        value={email}
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
