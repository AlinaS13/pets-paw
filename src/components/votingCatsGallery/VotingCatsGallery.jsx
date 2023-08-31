import React from "react";
import styles from "./VotingCatsGallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Loader } from "components/loader/Loader";
import { useSelector } from "react-redux";
import { isLoadingCats } from "redux/search/SearchSelector";
import { nanoid } from "@reduxjs/toolkit";
import { VotingButton } from "components/votingButton/VotingButton";

export const VotingCatsGallery = ({ cats }) => {
  const isLoading = useSelector(isLoadingCats);
  return (
    <div className={styles.breedInfo}>
      <div className={styles.votingGalleryContainer}>
        <div className={styles.swiperWrp}>
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            navigation={true}
            style={{
              "--swiper-navigation-size": "28px",
              "--swiper-navigation-color": "#ff868e",
            }}
          >
            {isLoading ? (
              <Loader />
            ) : (
              cats.map((el) => {
                return (
                  <SwiperSlide key={nanoid()}>
                    <img
                      data-cat-id={el.id}
                      src={el.url}
                      alt="cat"
                      className={styles.breedImage}
                    />
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
        <VotingButton />
      </div>
    </div>
  );
};
