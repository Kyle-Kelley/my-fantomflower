import React, { useState } from "react";
import styles from "../styles/Popup.module.css";

const Popup = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(true);
    // checked === true
    //   ? (document.getElementById("Popup").style.display = "none") &&
    //     document.getElementById("Popup").classList.remove("popupBox")
    //   : null;
  };

  //   const closePopup = () =>
  //     checked === true
  //       ? (document.getElementById("Popup").style.display = "none")
  //       : null;

  return (
    <div>
      {!checked && (
        <div className={styles.popupBox}>
          <div id="Popup" className={styles.popup}>
            <img src="fantom.jpg" height={50} width={50} />
            <h1>Are you 21 or over?</h1>
            <form>
              <label>
                <input
                  id="Yes"
                  onChange={handleChange}
                  checked={checked}
                  name="yes"
                  type="checkbox"
                />
                Yes
              </label>
              <label>
                <input type="checkbox" />
                No
              </label>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
