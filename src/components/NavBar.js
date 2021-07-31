import React from "react";
import AsideContainer from "./sidebar/AsideContainer";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div>
    <nav class="nav-container">
      <AsideContainer />
      <span>
          <Link class="link list-inline" to="/login">
            <ion-icon class="badge" name="person-outline"></ion-icon>
          </Link>
      </span>
    </nav>
    </div>
    
  );
}

export default NavBar;
