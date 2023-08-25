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
// import { BreedInfo } from "components/breedList/BreedInfo";

const BreedsPage = () => {
  const breeds = useSelector(getBreeds);
  const isLoading = useSelector(isLoadingBreeds);
  const filteredBreeds = useSelector(getFilteredBreeds);
  // const [allBreeds, setAllBreeds] = useState(false);
  const [breed, setBreed] = useState(false);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState("asc");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBreeds(20));
  }, [dispatch]);
  // useEffect(() => {
  //   if (breed) {
  //     const filteredBreed = Object.values(breeds).filter(function (value) {
  //       return value.name === breed;
  //     })[0];
  //     dispatch(getBreedById(filteredBreed.id));
  //     console.log(filteredBreed.id);
  //     // setBreed(false);
  //   }
  // }, [dispatch, breed, breeds]);
  useEffect(() => {
    if (breed && breeds) {
      const filteredBreed = breeds.find((value) => value.name === breed);
      if (filteredBreed) {
        dispatch(getBreedById(filteredBreed.id));
      }
    }
  }, [dispatch, breed, breeds]);

  function compare(sortOrder) {
    return function (a, b) {
      if (a.name < b.name) {
        return sortOrder === "asc" ? -1 : 1;
      }
      if (a.name > b.name) {
        return sortOrder === "asc" ? 1 : -1;
      }

      return 0;
    };
  }

  const breedsResult = [...breeds];
  if (sort === "asc") {
    breedsResult.sort(compare("asc"));
  } else {
    breedsResult.sort(compare("desc"));
  }

  return (
    <>
      <div className={styles.breedsPageContainer}>
        <div className={styles.headContainer}>
          <GoBackLink />
          <CurrentPage name="Breeds" />
          <FilterAllBreeds
            breeds={breeds}
            setBreed={(data) => setBreed(data)}
            setLimit={(data) => setLimit(data)}
            setSort={(data) => setSort(data)}
            limit={limit}
            sort={sort}
          />
        </div>

        {!breed ? (
          <ul className={styles.galleryGrid}>
            {isLoading ? (
              <Loader />
            ) : (
              breedsResult.slice(0, limit).map((breed) => {
                return (
                  <li key={nanoid()} className={styles.breedElement}>
                    <a href="https://https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI">
                      {breed.image && breed.image.url ? (
                        <img
                          src={breed.image.url}
                          alt="breed"
                          className={styles.breedImg}
                        />
                      ) : (
                        <img
                          className={styles.breedImg}
                          src="https://https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI"
                          alt="breed"
                        ></img>
                      )}
                      <div className={styles.breedOverlay}>
                        <h3 className={styles.breedName}>{breed.name}</h3>
                      </div>
                    </a>
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
              filteredBreeds.slice(0, limit).map((el) => {
                return (
                  <li key={nanoid()}>
                    <img src={el.url} alt="breed" className={styles.breedImg} />
                  </li>
                );
              })
            )}
          </ul>
        )}
        {/* <BreedInfo /> */}
      </div>
    </>
  );
};

export default BreedsPage;
