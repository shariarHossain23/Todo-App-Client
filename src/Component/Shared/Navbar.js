import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const handleSignout = () => {
    signOut(auth);
  };
  return (
    <div class="navbar bg-base-100 lg:px-12 shadow-lg fixed top-0 z-50">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact flex justify-center items-center dropdown-content mt-3 p-2 shadow bg-base-100  w-[96vw]"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            {
              <li>
                {" "}
                {user ? (
                  <button onClick={handleSignout} className="btn btn-ghost">
                    sign Out
                  </button>
                ) : (
                  <Link to="/login">Login</Link>
                )}{" "}
              </li>
            }

            <li>
              <button className="btn btn-ghost">{user?.displayName}</button>
            </li>
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">To Do App</a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          {
            <li>
              {" "}
              {user ? (
                <button onClick={handleSignout} className="btn btn-ghost">
                  sign Out
                </button>
              ) : (
                <Link to="/login">Login</Link>
              )}{" "}
            </li>
          }
          <li>
            <button className="btn btn-ghost">{user?.displayName}</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
