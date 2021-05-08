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
  const [date, setDate] = useState("");
  const [comment, setComment] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setName(value);
  };
  const handleDateChange = (event) => {
    const value = event.target.value;
    setDate(value);
  };
  const handleCommentChange = (event) => {
    const value = event.target.value;
    setComment(value);
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
      date: date,
      comment: comment,
    };
    console.log(data);
    axios
      .post(
        "https://sheet.best/api/sheets/449e1967-ee70-48e1-88b1-8673b4c69f2f",
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
      <input
        className={styles.input}
        type="text"
        placeholder="Date Preferred"
        name="date"
        value={date}
        onChange={handleDateChange}
        required
      ></input>
      <input
        className={styles.input}
        type="text"
        placeholder="Comments and/or Questions"
        name="comment"
        value={comment}
        onChange={handleCommentChange}
      ></input>
      <button className={styles.btn} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Email;
