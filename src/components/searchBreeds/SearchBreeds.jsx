import DandruffSVG from "assets/svg/DandruffSVG";
import styles from "./SearchBreeds.module.scss";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { getBreedsByName } from "redux/search/searchOperation";
// import { getAllBreeds } from "redux/breeds/breedsOperation";
// import { useEffect } from "react";
export const SearchBreeds = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getAllBreeds());
  // }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.target.search.value) {
      toast.warn("Enter your query");
    }
    dispatch(getBreedsByName(e.target.search.value));
    // setSearchQuery(e.target.search.value);
    // navigate(`/search?query=${searchQuery}`);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.inputWrp}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        placeholder="Search for breeds by name"
      ></input>
      <button>
        <DandruffSVG />
      </button>
    </form>
  );
};
