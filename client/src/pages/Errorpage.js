import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound404">
          <h1>404</h1>
        </div>
        <h2> PAGE NOT FOUND</h2>
        <p className="mb-5">The page you are trying to reach does not exist.</p>
        <NavLink to="/">HOMEPAGE </NavLink>
      </div>
    </div>
  );
};

export default Errorpage;
