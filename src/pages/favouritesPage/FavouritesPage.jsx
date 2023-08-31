import React from "react";
import styles from "./FavouritesPage.module.scss";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { getAllFavourites, isLoadingLikes } from "redux/voting/votingSelector";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { Loader } from "components/loader/Loader";

const FavouritesPage = () => {
  const isLoading = useSelector(isLoadingLikes);
  const favourites = useSelector(getAllFavourites);
  return (
    <div className={styles.favouritesPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Favourites" />
      </div>

      <ul className={styles.galleryGrid}>
        {isLoading ? (
          <Loader />
        ) : (
          favourites.map((elem) => {
            return (
              <li key={nanoid()}>
                <img
                  src={elem.image.url}
                  alt="breed"
                  className={styles.favouritesImg}
                />
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default FavouritesPage;
