import { Oval } from "react-loader-spinner";
import styles from "./Loader.module.scss";
export const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Oval
        height={80}
        width={80}
        color="#FBE0DC"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#FFFF0"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
