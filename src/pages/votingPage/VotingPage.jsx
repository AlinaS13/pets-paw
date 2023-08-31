import React, { useEffect } from "react";
import styles from "./VotingPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { useDispatch, useSelector } from "react-redux";
// import { fetchVoting } from "redux/voting/votingOperation";
// import { getVoting } from "redux/voting/votingSelector";
import { fetchRandomCats } from "redux/search/searchOperation";
import { getSearchCats } from "redux/search/SearchSelector";
import { VotingCatsGallery } from "components/votingCatsGallery/VotingCatsGallery";
import { getAllFavourites, getAllVotes } from "redux/voting/votingSelector";
import { VotingLogsList } from "components/votingLogsList/VotingLogsList";

const VotingPage = () => {
  const dispatch = useDispatch();
  const cats = useSelector(getSearchCats);
  const votes = useSelector(getAllVotes);
  const favourites = useSelector(getAllFavourites);

  useEffect(() => {
    dispatch(fetchRandomCats());
  }, [dispatch]);

  return (
    <div className={styles.votingPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Voting" />
      </div>
      <VotingCatsGallery cats={cats} />
      <VotingLogsList votes={votes} favourites={favourites} />
    </div>
  );
};

export default VotingPage;
