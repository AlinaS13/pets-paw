import React from "react";
import styles from "./BreedsPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { FilterAllBreeds } from "components/filterAllBreeds/FilterAllBreeds";
const BreedsPage = () => {
  return (
    <div className={styles.breedsPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Breeds" />
        <FilterAllBreeds />
      </div>
      <h3>some text</h3>
    </div>
  );
};

export default BreedsPage;
