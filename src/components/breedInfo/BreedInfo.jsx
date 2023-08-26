import React from "react";
import styles from "./BreedInfo.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Loader } from "components/loader/Loader";
import { nanoid } from "@reduxjs/toolkit";
import { isLoadingBreeds } from "redux/breeds/breedsSelector";
import { useSelector } from "react-redux";

export const BreedInfo = ({ filteredBreeds }) => {
  const isLoading = useSelector(isLoadingBreeds);
  const breedInfo = filteredBreeds[0].breeds[0];
  return (
    <div className={styles.breedInfo}>
      <div className={styles.swiperWrp}>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, FreeMode, Pagination, Navigation]}
          className={styles.mySwiper}
          style={{
            "--swiper-pagination-color": "#ff868e",
            "--swiper-pagination-bullet-inactive-color": "#FBE0DC",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "6px",
            "--swiper-pagination-bullet-background-color": "#fff",
          }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            filteredBreeds.map((el) => {
              return (
                <SwiperSlide key={nanoid()}>
                  <img src={el.url} alt="breed" className={styles.breedImage} />
                </SwiperSlide>
              );
            })
          )}
        </Swiper>
      </div>
      {!isLoading ? (
        <div className={styles.breedInfoWrp}>
          <h2 className={styles.breedInfoName}>{breedInfo.name}</h2>
          <p className={styles.breedInfoDescription}>{breedInfo.description}</p>
          <div className={styles.breedInfoContainer}>
            <div>
              <p>Temperament:&nbsp;</p>
              <span className={styles.breedTemperamentSpan}>
                {breedInfo.temperament}
              </span>
            </div>
            <div>
              <p>
                Origin:&nbsp;<span>{breedInfo.origin}</span>
              </p>
              <p>
                Weight:&nbsp;<span>{breedInfo.weight.metric}&nbsp;kgs</span>
              </p>
              <p>
                Life span:&nbsp;<span>{breedInfo.life_span}&nbsp;years</span>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
