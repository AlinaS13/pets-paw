import React, { useEffect, useState } from "react";
import styles from "./BreedsPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";
import { CurrentPage } from "components/currentPage/CurrentPage";
import { FilterAllBreeds } from "components/filterAllBreeds/FilterAllBreeds";
import { getAllBreeds, getBreedById } from "redux/breeds/breedsOperation";
import { useDispatch, useSelector } from "react-redux";
import {
  getBreeds,
  getFilteredBreeds,
  isLoadingBreeds,
} from "../../redux/breeds/breedsSelector.js";
import { Loader } from "components/loader/Loader";
import { nanoid } from "@reduxjs/toolkit";

const BreedsPage = () => {
  const breeds = useSelector(getBreeds);
  const isLoading = useSelector(isLoadingBreeds);
  const filteredBreeds = useSelector(getFilteredBreeds);
  // const [allBreeds, setAllBreeds] = useState(false);
  const [breed, setBreed] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBreeds());
  }, [dispatch]);

  useEffect(() => {
    if (breed) {
      const filteredBreed = Object.values(breeds).filter(function (value) {
        return value.name === breed;
      })[0];
      dispatch(getBreedById(filteredBreed.id));
      console.log(filteredBreeds);
      // setBreed(false);
    }
    console.log(breed);
  }, [dispatch, breed, breeds]);

  // const filteredBreeds = breeds.filter(() => {
  //   if (!breed) {
  //     return true;
  //   }
  //   const breedsFilterResult = !breeds || breeds.breeds.includes(breeds);
  // });

  return (
    <div className={styles.breedsPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <CurrentPage name="Breeds" />
        <FilterAllBreeds breeds={breeds} setBreed={(data) => setBreed(data)} />
      </div>

      {!breed ? (
        <ul className={styles.galleryGrid}>
          {isLoading ? (
            <Loader />
          ) : (
            breeds.map((breed) => {
              return (
                <li key={nanoid()}>
                  <img src={breed.image.url} alt="breed" />
                </li>
              );
            })
          )}
        </ul>
      ) : (
        <ul className={styles.galleryGrid}>
          {isLoading ? (
            <Loader />
          ) : (
            filteredBreeds.map((el) => {
              return (
                <li key={nanoid()}>
                  <img src={el.url} alt="breed" />
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
};

export default BreedsPage;
