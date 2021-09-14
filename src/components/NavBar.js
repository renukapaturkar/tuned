import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex w-full h-20 bg-gray-800 justify-between">
      <Link className="my-4" to="/">
      <span className="px-11 text-gray-100 text-4xl font-sans subpixel-antialiased italic font-semibold">Think Tunes</span>
      </Link>
       
      <span className="flex m-4 px-16 text-md font-medium">
          <Link className="my-2 text-gray-100 px-6" to="/likedvideos">
            Liked Videos
          </Link>
          <Link className="my-2 text-gray-100 px-6" to="/watchlater">
            Watch Later
          </Link>
          <Link className="my-2 text-gray-100 px-6" to="/login">
            Login
          </Link>
        </span>
    </nav>
  );
}

export default NavBar;
