import styles from "./Hero.module.scss";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <div className={styles.heroWrp}>
      <h2>Hi!👋</h2>
      <h3>Welcome to MacPaw Bootcamp 2023</h3>
      <p>Lets start using The Cat API</p>
      <div className={styles.navigation}>
        <NavLink to="/voting" className={styles.votingLink}>
          <span> Voting</span>
        </NavLink>
        <NavLink to="/breeds" className={styles.breedsLink}>
          <span>Breeds</span>
        </NavLink>
        <NavLink to="/gallery" className={styles.galleryLink}>
          <span>Gallery</span>
        </NavLink>
      </div>
    </div>
  );
};
