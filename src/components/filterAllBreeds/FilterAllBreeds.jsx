// import { nanoid } from "@reduxjs/toolkit";
import styles from "./FilterAllBreeds.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import FilterZASVG from "assets/svg/FilterZASVG";
import FilterAZSVG from "assets/svg/FilterAZSVG";
import { nanoid } from "@reduxjs/toolkit";

export const FilterAllBreeds = ({
  breeds,
  setBreed,
  setLimit,
  limit,
  setSort,
  sort,
}) => {
  const [isBreedsOpen, setIsBreedsOpen] = useState(false);
  const [isLimitOpen, setIsLimitOpen] = useState(false);
  const [selectedBreeds, setSelectedBreeds] = useState("All breeds");
  // const [selectedLimit, setSelectedLimit] = useState("Limit: 10");

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
                setBreed(false);
                setIsBreedsOpen(false);
              }}
            >
              <span>All breeds</span>
            </li>
            {breeds.map(({ name }) => (
              <li
                className={styles.dropDownItem}
                key={nanoid()}
                onClick={(e) => {
                  setSelectedBreeds(e.target.innerText);
                  setBreed(e.target.innerText);
                  setIsBreedsOpen(false);
                }}
              >
                {name}
              </li>
            ))}
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
          {"Limit: " + limit}

          <ul
            className={
              isLimitOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setLimit(5);
                setIsLimitOpen(false);
              }}
            >
              Limit: 5
            </li>
            <li
              onClick={() => {
                setLimit(10);
                setIsLimitOpen(false);
              }}
            >
              Limit: 10
            </li>
            <li
              onClick={() => {
                setLimit(15);
                setIsLimitOpen(false);
              }}
            >
              Limit: 15
            </li>
            <li
              onClick={() => {
                setLimit(20);
                setIsLimitOpen(false);
              }}
            >
              Limit: 20
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "40px" }}>
        <button
          className={styles.filterLetterBtn}
          onClick={() => {
            setSort("desc");
          }}
        >
          <FilterZASVG />
        </button>
      </div>
      <div style={{ minWidth: "40px" }}>
        <button
          className={styles.filterLetterBtn}
          onClick={() => {
            setSort("asc");
          }}
        >
          <FilterAZSVG />
        </button>
      </div>
    </div>
  );
};
