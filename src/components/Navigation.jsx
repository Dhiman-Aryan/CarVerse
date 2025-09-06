// components/Navigation.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemsCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
            <img src="/src/assets/images/CV.png" alt="" />
          </div> 
            <Link to="/" className="bg-gradient-to-r from-yellow-800  to-yellow-500 bg-clip-text text-transparent  text-2xl font-bold">
            
              <i className="fas fa-car mr-2 " ></i>CarVerse
            </Link>
          </div>

          <div className="hidden md:flex space-x-10">
            <Link
              to="/"
              className="nav-link text-gray-700 hover:text-yellow-800 font-medium"
            >
              Home
            </Link>
            <Link
              to="/orders"
              className="nav-link text-gray-700 hover:text-yellow-800 font-medium"
            >
              Orders
            </Link>
            <Link
              to="/products"
              className="nav-link text-gray-700 hover:text-yellow-800 font-medium"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="nav-link text-gray-700 hover:text-yellow-800 font-medium"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="nav-link text-gray-700 hover:text-yellow-900 font-medium flex items-center"
            >
              Cart
              {cartItemsCount > 0 && (
                <span className="ml-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <Link to="/cart" className="text-gray-700 mr-4 relative">
              <i className="fas fa-shopping-cart text-xl"></i>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-xl"></i>
              ) : (
                <i className="fas fa-bars text-xl"></i>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 border-t">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Products
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </Link>
            <Link
              to="/cart"
              className="block py-2 text-gray-700 hover:text-blue-600"
            >
              Cart
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
