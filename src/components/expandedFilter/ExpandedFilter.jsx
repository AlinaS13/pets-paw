// import { nanoid } from "@reduxjs/toolkit";
import UpdateSVG from "assets/svg/UpdateSVG";
import styles from "./ExpandedFilter.module.scss";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

export const ExpandedFilter = () => {
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isBreedsOpen, setIsBreedsOpen] = useState(false);
  const [isLimitOpen, setIsLimitOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Random");
  const [selectedType, setSelectedType] = useState("Static");
  const [selectedBreeds, setSelectedBreeds] = useState("None");
  const [selectedLimit, setSelectedLimit] = useState("5 items per page");

  const hendleOpenOrderList = () => {
    setIsOrderOpen(!isOrderOpen);
  };

  const hendleOpenTypeList = () => {
    setIsTypeOpen(!isTypeOpen);
  };

  const hendleOpenBreedsList = () => {
    setIsBreedsOpen(!isBreedsOpen);
  };
  const hendleOpenLimitList = () => {
    setIsLimitOpen(!isLimitOpen);
  };
  return (
    <div className={styles.filtersWrp}>
      <div style={{ minWidth: "290px" }}>
        <p className={styles.filtersTitle}>ORDER</p>
        <div className={styles.filterBox} onClick={hendleOpenOrderList}>
          {!isOrderOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#8C8C8C" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#8C8C8C" />
            </button>
          )}
          {selectedOrder}
          <ul
            className={
              isOrderOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedOrder("Random");
                // setLanguage(false);
                setIsOrderOpen(false);
              }}
            >
              <span>...</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "290px" }}>
        <p className={styles.filtersTitle}>TYPE</p>
        <div className={styles.filterBox} onClick={hendleOpenTypeList}>
          {!isTypeOpen ? (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowDown size={20} fill="#8C8C8C" />
            </button>
          ) : (
            <button type="button" className={styles.filterBtn}>
              <MdKeyboardArrowUp size={20} fill="#8C8C8C" />
            </button>
          )}
          {selectedType}

          <ul
            className={
              isTypeOpen === true
                ? styles.dropDowList || styles.active
                : styles.hidden
            }
          >
            <li
              onClick={() => {
                setSelectedType("Static");
                // setLimit(false);
                setIsTypeOpen(false);
              }}
            >
              <span>...</span>
            </li>
          </ul>
        </div>
      </div>
      <div style={{ minWidth: "290px" }}>
        <p className={styles.filtersTitle}>BREED</p>
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
                setSelectedBreeds("Static");
                // setLimit(false);
                setIsBreedsOpen(false);
              }}
            >
              <span>...</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.lastFilterWrp}>
        <div style={{ minWidth: "240px" }}>
          <p className={styles.filtersTitle}>LIMIT</p>
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
                  setSelectedLimit("5 items per page");
                  // setLimit(false);
                  setIsLimitOpen(false);
                }}
              >
                <span>...</span>
              </li>
            </ul>
          </div>
        </div>
        <button type="button" className={styles.updateBtn}>
          <UpdateSVG />
        </button>
      </div>
    </div>
  );
};
