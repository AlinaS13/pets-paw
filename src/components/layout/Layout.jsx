import styles from "./Layout.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Header } from "../header/Header";
import { Hero } from "components/hero/Hero";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className={styles.layout}>
        <Hero />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
