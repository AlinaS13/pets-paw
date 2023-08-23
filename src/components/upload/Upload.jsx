import UploadSVG from "assets/svg/UploadSVG";
import styles from "./Upload.module.scss";

export const Upload = () => {
  return (
    <div>
      <button className={styles.uploadBtn}>
        <UploadSVG /> <span>upload</span>
      </button>
    </div>
  );
};
