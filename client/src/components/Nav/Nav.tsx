import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-indigo-400 text-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <Link to="/" className="text-xl no-underline">
          Home
        </Link>
      </div>
      <div className="mr-2">
        <Link to="/hello" className="text-xl no-underline">
          The Drink List 🍻
        </Link>
      </div>
    </div>
  );
}

export default Nav;
