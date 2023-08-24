import React from "react";
import styles from "./VotingPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import LikeSVG from "assets/svg/LikeSVG";
import FavouriteSVG from "assets/svg/FavouriteSVG";
import DislikeSVG from "assets/svg/DislikeSVG";

const VotingPage = () => {
  return (
    <div className={styles.votingPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Voting" />
      </div>
      <div className={styles.votingButtonWrp}>
        <button className={styles.votingButtonLike}>
          <LikeSVG />
        </button>
        <button className={styles.votingButtonFavourite}>
          <FavouriteSVG />
        </button>
        <button className={styles.votingButtonDislike}>
          <DislikeSVG />
        </button>
      </div>
    </div>
  );
};

export default VotingPage;
