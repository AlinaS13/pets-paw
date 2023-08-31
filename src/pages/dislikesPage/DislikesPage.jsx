import React from "react";
import styles from "./DislikesPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { useSelector } from "react-redux";
import { getAllVotes, isLoadingLikes } from "redux/voting/votingSelector";
import { Loader } from "components/loader/Loader";
import { nanoid } from "@reduxjs/toolkit";

const DislikesPage = () => {
  const isLoading = useSelector(isLoadingLikes);
  const votes = useSelector(getAllVotes);
  const dislikesVotes = votes.filter((elem) => elem.value === -1);
  return (
    <div className={styles.dislikesPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Dislikes" />
      </div>
      <ul className={styles.galleryGrid}>
        {isLoading ? (
          <Loader />
        ) : (
          dislikesVotes.map((elem) => {
            return (
              <li key={nanoid()}>
                <img
                  src={elem.image.url}
                  alt="breed"
                  className={styles.dislikesImg}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default DislikesPage;
