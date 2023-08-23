// import { nanoid } from "@reduxjs/toolkit";
import styles from "./FilterAllBreeds.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import FilterZASVG from "assets/svg/FilterZASVG";
import FilterAZSVG from "assets/svg/FilterAZSVG";
export const FilterAllBreeds = () => {
  const [isBreedsOpen, setIsBreedsOpen] = useState(false);
  const [isLimitOpen, setIsLimitOpen] = useState(false);
  const [selectedBreeds, setSelectedBreeds] = useState("All breeds");
  const [selectedLimit, setSelectedLimit] = useState("Limit: 10");

  const hendleOpenBreedsList = () => {
    setIsBreedsOpen(!isBreedsOpen);
  };

  const hendleOpenLimitList = () => {
    setIsLimitOpen(!isLimitOpen);
  };

  return (
    <div className={styles.filtersWrp}>
      <div style={{ minWidth: "210px" }}>
        <div className={styles.filterBox} onClick={hendleOpenBreedsList}>
          {!isBreedsOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#8C8C8C" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#8C8C8C" />
            </button>
          )}
          {selectedBreeds}
          <ul
            className={
              isBreedsOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedBreeds("All breeds");
                // setLanguage(false);
                setIsBreedsOpen(false);
              }}
            >
              <span>...</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "101px" }}>
        <div className={styles.filterBox} onClick={hendleOpenLimitList}>
          {!isLimitOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#8C8C8C" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#8C8C8C" />
            </button>
          )}
          {selectedLimit}

          <ul
            className={
              isLimitOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedLimit("Limit: 10");
                // setLimit(false);
                setIsLimitOpen(false);
              }}
            >
              <span>...</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "40px" }}>
        <button className={styles.filterLetterBtn}>
          <FilterZASVG />
        </button>
      </div>
      <div style={{ minWidth: "40px" }}>
        <button className={styles.filterLetterBtn}>
          <FilterAZSVG />
        </button>
      </div>
    </div>
  );
};
