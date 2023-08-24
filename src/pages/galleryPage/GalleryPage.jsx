import React from "react";
import styles from "./GalleryPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { Upload } from "components/upload/Upload";
import { ExpandedFilter } from "components/expandedFilter/ExpandedFilter";

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
      <ExpandedFilter />
    </div>
  );
};

export default GalleryPage;
