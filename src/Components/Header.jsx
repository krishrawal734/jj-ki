import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">User App</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-gray-200 font-bold">
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
