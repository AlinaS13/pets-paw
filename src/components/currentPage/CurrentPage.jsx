import React from "react";
import styles from "./CurrentPage.module.scss";

export const CurrentPage = ({ name }) => {
  return <div className={styles.currentPages}>{name}</div>;
};
