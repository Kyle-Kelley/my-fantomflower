import React from "react";
import styles from "../styles/Email.module.css";

const Email = () => {
  return (
    <div className={styles.email}>
      <input type="email" placeholder="Email"></input>
    </div>
  );
};

export default Email;
