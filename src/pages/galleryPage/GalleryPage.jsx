import React from "react";
import styles from "./GalleryPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { Upload } from "components/upload/Upload";

const GalleryPage = () => {
  return (
    <div className={styles.galleryPageContainer}>
      <div className={styles.headWrp}>
        <div className={styles.headContainer}>
          <GoBackLink />
          <CurrentPage name="Gallery" />
        </div>
        <Upload />
      </div>
    </div>
  );
};

export default GalleryPage;
