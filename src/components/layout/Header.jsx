import React, { useState } from "react";
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import Logo from "../../assets/ecommerce-logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Example auth check
  // Replace with your actual auth logic
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (
    <header
      className="sticky top-0 z-50
      bg-white/70 backdrop-blur-xl
      border-b border-white/30 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Main Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <img
              src={Logo}
              alt="TechMart"
              className="w-14 h-14 object-contain"
            />

            <div>
              <h1 className="text-2xl font-extrabold tracking-wide">
                <span className="text-blue-700">Tech</span>
                <span className="text-orange-500">Mart</span>
              </h1>

              <p className="text-[10px] tracking-[4px] text-gray-500">
                ELECTRONICS STORE
              </p>
            </div>

          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            <a
              href="/"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Home
            </a>

            <a
              href="/dashboard/product-list"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Products
            </a>

            {/* <a
              href="/categories"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              Categories
            </a> */}

            <a
              href="/about"
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              About
            </a>

          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4">

            {isLoggedIn ? (
              <>
                {/* Cart */}
                <button
                  className="relative p-3 rounded-full
                  bg-gradient-to-r from-blue-600 to-orange-500
                  text-white shadow-lg hover:scale-105 transition"
                >
                  <ShoppingCart size={20} />

                  <span
                    className="absolute -top-1 -right-1
                    bg-red-500 text-white text-xs
                    w-5 h-5 rounded-full flex items-center justify-center"
                  >
                    2
                  </span>
                </button>

                {/* Profile Dropdown */}
                <div className="relative">

                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl
                    bg-white/60 backdrop-blur-md shadow-md
                    hover:shadow-lg transition"
                  >
                    <User size={18} />

                    <span className="font-medium">
                      My Account
                    </span>
                  </button>

                  {/* Dropdown */}
                  {profileOpen && (
                    <div
                      className="absolute right-0 mt-3 w-60
                      rounded-2xl bg-white/90 backdrop-blur-xl
                      shadow-2xl border border-gray-100 overflow-hidden"
                    >

                      <div className="p-2">

                        <a
                          href="/profile"
                          className="flex items-center gap-3
                          px-4 py-3 rounded-xl
                          hover:bg-gray-100 transition"
                        >
                          <User size={18} />

                          Profile
                        </a>

                        <a
                          href="/dashboard"
                          className="flex items-center gap-3
                          px-4 py-3 rounded-xl
                          hover:bg-gray-100 transition"
                        >
                          <LayoutDashboard size={18} />

                          Dashboard
                        </a>

                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-3
                          px-4 py-3 rounded-xl
                          text-red-500 hover:bg-red-50 transition"
                        >
                          <LogOut size={18} />

                          Logout
                        </button>

                      </div>

                    </div>
                  )}

                </div>
              </>
            ) : (
              <a
                href="/login"
                className="px-5 py-3 rounded-xl text-white font-semibold
                bg-gradient-to-r from-blue-600 to-orange-500
                hover:scale-105 transition shadow-lg"
              >
                Login
              </a>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden mt-4 p-5 rounded-2xl
            bg-white/80 backdrop-blur-xl shadow-xl
            flex flex-col gap-4"
          >

            <a href="/" className="hover:text-blue-600 transition">
              Home
            </a>

            <a
              href="/dashboard/product-list"
              className="hover:text-blue-600 transition"
            >
              Products
            </a>

            {/* <a
              href="/dashboard/categories"
              className="hover:text-blue-600 transition"
            >
              Categories
            </a> */}

            <a
              href="/about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>

            {isLoggedIn ? (
              <>
                <a
                  href="/profile"
                  className="hover:text-blue-600 transition"
                >
                  Profile
                </a>

                <button
                  onClick={handleLogout}
                  className="w-full py-3 rounded-xl text-white font-semibold
                  bg-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <a
                href="/login"
                className="w-full text-center py-3 rounded-xl
                text-white font-semibold
                bg-gradient-to-r from-blue-600 to-orange-500"
              >
                Login
              </a>
            )}

          </div>
        )}

      </div>
    </header>
  );
};

export default Header;