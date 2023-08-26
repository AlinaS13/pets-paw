import React, { useEffect } from "react";
import styles from "./BreedDescriptionPage.module.scss";
import { GoBackLink } from "components/goBackLink/GoBackLink";

import { useDispatch, useSelector } from "react-redux";
import { getBreedById } from "redux/breeds/breedsOperation";
import { useParams } from "react-router-dom";
import { getFilteredBreeds } from "redux/breeds/breedsSelector";
import { BreedInfo } from "components/breedInfo/BreedInfo";

const BreedDescriptionPage = () => {
  const filteredBreeds = useSelector(getFilteredBreeds);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getBreedById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.breedsPageContainer}>
      <div className={styles.headContainer}>
        <GoBackLink />
        <div className={styles.currentPages}>Breeds</div>
        <div className={styles.breedId}>{id}</div>
      </div>
      <BreedInfo filteredBreeds={filteredBreeds} />
    </div>
  );
};

export default BreedDescriptionPage;
