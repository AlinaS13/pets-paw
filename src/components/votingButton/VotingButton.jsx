import styles from "./VotingButton.module.scss";
import LikeSVG from "assets/svg/LikeSVG";
import FavouriteSVG from "assets/svg/FavouriteSVG";
import DislikeSVG from "assets/svg/DislikeSVG";
import {
  addFavouritesFetch,
  addVotingFetch,
  getAllFavouritesFetch,
  getAllVotingFetch,
} from "redux/voting/votingOperation";
import { useDispatch } from "react-redux";

export const VotingButton = () => {
  const dispatch = useDispatch();

  const handleLike = async () => {
    const catId = document
      .getElementsByClassName("swiper-slide-active")[0]
      .getElementsByTagName("img")[0].dataset.catId;
    await dispatch(
      addVotingFetch({
        image_id: catId,
        sub_id: "userId",
        value: 1,
      })
    );

    await dispatch(getAllVotingFetch());
  };
  const handleDislike = async () => {
    const catId = document
      .getElementsByClassName("swiper-slide-active")[0]
      .getElementsByTagName("img")[0].dataset.catId;
    await dispatch(
      addVotingFetch({
        image_id: catId,
        sub_id: "userId",
        value: -1,
      })
    );
    await dispatch(getAllVotingFetch());
  };
  const handleFavourite = async () => {
    const catId = document
      .getElementsByClassName("swiper-slide-active")[0]
      .getElementsByTagName("img")[0].dataset.catId;
    await dispatch(
      addFavouritesFetch({
        image_id: catId,
        sub_id: "userId",
      })
    );
    await dispatch(getAllFavouritesFetch());
  };
  return (
    <div className={styles.votingButtonWrp}>
      <button
        type="button"
        onClick={handleLike}
        className={styles.votingButtonLike}
      >
        <LikeSVG />
      </button>
      <button
        type="button"
        onClick={handleFavourite}
        className={styles.votingButtonFavourite}
      >
        <FavouriteSVG />
      </button>
      <button
        type="button"
        onClick={handleDislike}
        className={styles.votingButtonDislike}
      >
        <DislikeSVG />
      </button>
    </div>
  );
};
