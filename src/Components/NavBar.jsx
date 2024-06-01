import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/authContext";

const NavBar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const handleLogout=async()=>{
try {
  await logOut()
  navigate('/')
} catch (error) {
  console.error(error)
}
  }
  return (
    <div className="absolute w-full p-4 flex items-center justify-between z-10">
      <Link to="/">
        <h1 className="uppercase text-red-600 cursor-pointer text-5xl font-nsans-bold">
          netflix
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/profile">
            <button className="capitalize pr-4 cursor-pointer">profile</button>
          </Link>
          <button onClick={handleLogout} className="capitalize  bg-red-600 px-6 py-2 cursor-pointer">
            log out
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="capitalize pr-4 cursor-pointer">login</button>
          </Link>
          <Link to="/signup">
            <button className="capitalize  bg-red-600 px-6 py-2 cursor-pointer">
              sign up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavBar;
