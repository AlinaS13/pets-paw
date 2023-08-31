import React from "react";
import styles from "./VotingLogsList.module.scss";
import { Loader } from "components/loader/Loader";
import { useSelector } from "react-redux";
import { isLoadingCats } from "redux/search/SearchSelector";
import LikeSVG from "assets/svg/LikeSVG";
import FavouriteSVG from "assets/svg/FavouriteSVG";
import DislikeSVG from "../../assets/svg/DislikeSVG";

export const VotingLogsList = ({ votes, favourites }) => {
  const isLoading = useSelector(isLoadingCats);

  const allLogs = [...votes, ...favourites];

  const formatTime = (timestamp) => {
    const dateObj = new Date(timestamp);
    dateObj.setUTCHours(dateObj.getUTCHours() + 3);
    const hours = String(dateObj.getUTCHours()).padStart(2, "0");
    const minutes = String(dateObj.getUTCMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };
  allLogs.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at);
  });

  return (
    <div className={styles.votingLogsWrp}>
      {isLoading ? (
        <Loader />
      ) : (
        allLogs.map((log) => {
          return (
            <ul key={log.id} className={styles.votingLogsList}>
              <li className={styles.votingLogsItem}>
                <div className={styles.votingContentWrp}>
                  <div className={styles.votingLogsTimeWrp}>
                    <p className={styles.votingLogsTime}>
                      {formatTime(log.created_at)}
                    </p>
                  </div>
                  <div className={styles.votingLogsText}>
                    Image ID:&nbsp;
                    <span className={styles.votingLogsId}>
                      {log.image.id}&nbsp;
                    </span>
                    was added to&nbsp;
                    {log.value === 1 ? (
                      <span>Likes</span>
                    ) : log.value === -1 ? (
                      <span>Dislikes</span>
                    ) : (
                      <span>Favourites</span>
                    )}
                  </div>
                </div>
                {log.value === 1 ? (
                  <div className={styles.votingLikeWrp}>
                    <LikeSVG />
                  </div>
                ) : log.value === -1 ? (
                  <div className={styles.votingDislikesWrp}>
                    <DislikeSVG />
                  </div>
                ) : (
                  <div className={styles.votingFavouriteWrp}>
                    <FavouriteSVG />
                  </div>
                )}
              </li>
            </ul>
          );
        })
      )}
    </div>
  );
};
