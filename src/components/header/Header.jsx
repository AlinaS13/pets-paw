import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/voting">Voting</NavLink>
          <NavLink to="/breds">Breds</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
        </nav>
      </div>
    </>
  );
};
