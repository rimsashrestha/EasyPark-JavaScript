import React from "react";
import { NavLink } from "react-router-dom";

const Errorpage = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="content">
          <h1>404</h1>
        </div>

        <div className="middle">
        <h2> PAGE NOT FOUND</h2>
        </div>
        <p className="mb-5">The page you are trying to reach does not exist.</p>
        
        <div className = "navitage">
        <NavLink to="/">HOMEPAGE </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Errorpage;
