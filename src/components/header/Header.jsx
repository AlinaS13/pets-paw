import styles from "./Header.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/img/header/logo.png";
import { SearchBreeds } from "components/searchBreeds/SearchBreeds";
import LikeSVG from "assets/svg/LikeSVG";
import FavouriteSVG from "assets/svg/FavouriteSVG";
import DislikeSVG from "assets/svg/DislikeSVG";

export const Header = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" ? (
        <header className={styles.header}>
          <NavLink to="/">
            <img src={logo} alt="logo" width="104px" height="24px" />
          </NavLink>
          <div className={styles.headerNavWrp}>
            <SearchBreeds />
            <nav>
              <div className={styles.headerNav}>
                <NavLink to="/likes" className={styles.pageLink}>
                  <LikeSVG />
                </NavLink>
                <NavLink to="/favourites" className={styles.pageLink}>
                  <FavouriteSVG />
                </NavLink>
                <NavLink to="/dislikes" className={styles.pageLink}>
                  <DislikeSVG />
                </NavLink>
              </div>
            </nav>
          </div>
        </header>
      ) : (
        <div className={styles.logoWrp}>
          <NavLink to="/">
            <img src={logo} alt="logo" width="104px" height="24px" />
          </NavLink>
        </div>
      )}
    </>
  );
};
