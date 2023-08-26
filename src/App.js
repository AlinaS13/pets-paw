import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

import HomePage from "./pages/homePage/HomePage";
import VotingPage from "./pages/votingPage/VotingPage";
import BreedsPage from "./pages/breedsPage/BreedsPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import { Layout } from "./components/layout/Layout";
import DislikesPage from "pages/dislikesPage/DislikesPage";
import FavouritesPage from "pages/favouritesPage/FavouritesPage";
import LikesPage from "pages/likesPage/LikesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BreedDescriptionPage from "pages/breedDescriptionPage/BreedDescriptionPage";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/breeds/:id" element={<BreedDescriptionPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/likes" element={<LikesPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/dislikes" element={<DislikesPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
