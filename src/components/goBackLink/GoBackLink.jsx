import React from "react";
import GoBackSVG from "assets/svg/GoBackSVG";
import styles from "./GoBackLink.module.scss";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const GoBackLink = () => {
  const navigate = useNavigate();
  return (
    <NavLink onClick={() => navigate(-1)} className={styles.goBackLink}>
      <GoBackSVG />
    </NavLink>
  );
};
