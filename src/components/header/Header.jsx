import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/img/header/logo.png";
export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <NavLink to="/">
          <img src={logo} alt="logo" width="104px" height="24px" />
        </NavLink>
        <h2>Hi!👋</h2>
        <h3>Welcome to MacPaw Bootcamp 2023</h3>
        <p>Lets start using The Cat API</p>
        <nav className={styles.navigation}>
          <NavLink to="/voting" className={styles.votingLink}>
            <span> Voting</span>
          </NavLink>
          <NavLink to="/breds" className={styles.bredsLink}>
            <span>Breds</span>
          </NavLink>
          <NavLink to="/gallery" className={styles.galleryLink}>
            <span>Gallery</span>
          </NavLink>
        </nav>
      </header>
    </>
  );
};
