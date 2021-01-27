import React from "react";
import styles from "./index.module.css";
import vectorImage from "../images/image-victor.jpg";
class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cols}>
            <div className={styles.topSection}>
              <img className={styles.profile} src={vectorImage} alt="profile" />
            </div>
            <div className={styles.bottomSection}>
              <div>
                <p
                  style={{ marginBottom: "-2%", fontWeight: 700 }}
                  className={styles.veryDarkDesaturatedBlue}
                >
                  Victor Crest{" "}
                  <span
                    style={{ fontWeight: 400 }}
                    className={styles.darkGrayishBlue}
                  >
                    26
                  </span>
                </p>
                <p
                  style={{ marginTop: "-2%", fontWeight: 400 }}
                  className={styles.darkGrayishBlue}
                >
                  London
                </p>
              </div>
              <div>
                <div className={styles.staticContainer}>
                  <p className={styles.veryDarkDesaturatedBlue}>80K</p>
                  <p className={styles.darkGray}>Followers</p>
                </div>
                <div className={styles.staticContainer}>
                  <p className={styles.veryDarkDesaturatedBlue}>803K</p>
                  <p className={styles.darkGray}>Likes</p>
                </div>
                <div className={styles.staticContainer}>
                  <p className={styles.veryDarkDesaturatedBlue}>1.4K</p>
                  <p className={styles.darkGray}>Photos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
