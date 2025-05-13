import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();

  return (
    <nav className="flex justify-between p-4 bg-gray-800 text-white">
      <div>
        <Link to="/" className="mr-4">
          Home
        </Link>
        {user && <Link to="/dashboard">Dashboard</Link>}
      </div>
      <div>
        {user ? (
          <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
            Logout
          </button>
        ) : (
          <span>Not logged in</span>
        )}
      </div>
    </nav>
  );
}

export default Navbar;