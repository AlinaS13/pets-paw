import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { Header } from "../header/Header";

export const Layout = () => {
  return (
    <>
      <div>
        <Header />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
