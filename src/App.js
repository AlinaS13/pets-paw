import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";

import HomePage from "./pages/homePage/HomePage";
import VotingPage from "./pages/votingPage/VotingPage";
import BredsPage from "./pages/bredsPage/BredsPage";
import GalleryPage from "./pages/galleryPage/GalleryPage";
import { Layout } from "./components/layout/Layout";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/voting" element={<VotingPage />} />
          <Route path="/breds" element={<BredsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
