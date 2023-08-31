import React from "react";
import styles from "./LikesPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { useSelector } from "react-redux";
import { getAllVotes, isLoadingLikes } from "redux/voting/votingSelector";
import { Loader } from "components/loader/Loader";
import { nanoid } from "@reduxjs/toolkit";

const LikesPage = () => {
  const isLoading = useSelector(isLoadingLikes);
  const votes = useSelector(getAllVotes);
  const likesVotes = votes.filter((elem) => elem.value === 1);
  return (
    <div className={styles.likesPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="LIKES" />
      </div>
      <ul className={styles.galleryGrid}>
        {isLoading ? (
          <Loader />
        ) : (
          likesVotes.map((elem) => {
            return (
              <li key={nanoid()}>
                <img
                  src={elem.image.url}
                  alt="breed"
                  className={styles.likesImg}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default LikesPage;
