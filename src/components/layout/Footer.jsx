import React from "react";
import Logo from "../../assets/ecommerce-logo.png";

const Footer = () => {
  return (
    <footer
      className="relative mt-16
      bg-gradient-to-br from-blue-950 via-blue-900 to-orange-900
      text-white overflow-hidden"
    >
      {/* Glow Effects */}
      <div
        className="absolute top-0 left-0 w-72 h-72
        bg-blue-500/20 rounded-full blur-3xl"
      ></div>

      <div
        className="absolute bottom-0 right-0 w-72 h-72
        bg-orange-500/20 rounded-full blur-3xl"
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 py-14">

        {/* Main Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          gap-10"
        >

          {/* Brand Section */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <img
                src={Logo}
                alt="TechMart"
                className="w-14 h-14 object-contain"
              />

              <div>
                <h1 className="text-2xl font-extrabold">
                  <span className="text-blue-400">Tech</span>
                  <span className="text-orange-400">Mart</span>
                </h1>

                <p className="text-[10px] tracking-[4px] text-gray-300">
                  ELECTRONICS STORE
                </p>
              </div>

            </div>

            <p className="text-gray-300 leading-relaxed text-sm">
              Your one-stop destination for premium electronics,
              gadgets, accessories, and smart devices.
            </p>

            {/* Social Buttons */}
            <div className="flex flex-wrap gap-3 mt-5">

              <div
                className="px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-md
                hover:bg-gradient-to-r
                hover:from-blue-500 hover:to-orange-500
                transition duration-300 cursor-pointer"
              >
                Instagram
              </div>

              <div
                className="px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-md
                hover:bg-gradient-to-r
                hover:from-blue-500 hover:to-orange-500
                transition duration-300 cursor-pointer"
              >
                Facebook
              </div>

              <div
                className="px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-md
                hover:bg-gradient-to-r
                hover:from-blue-500 hover:to-orange-500
                transition duration-300 cursor-pointer"
              >
                Twitter
              </div>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-xl font-semibold mb-5">
              Quick Links
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-orange-400 transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Products
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Categories
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Contact Us
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h2 className="text-xl font-semibold mb-5">
              Categories
            </h2>

            <ul className="space-y-3 text-gray-300">

              <li className="hover:text-orange-400 transition cursor-pointer">
                Smartphones
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Laptops
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Headphones
              </li>

              <li className="hover:text-orange-400 transition cursor-pointer">
                Accessories
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h2 className="text-xl font-semibold mb-5">
              Newsletter
            </h2>

            <p className="text-gray-300 text-sm mb-4">
              Subscribe to get latest offers and updates.
            </p>

            <div
              className="flex items-center overflow-hidden
              rounded-xl bg-white/10 backdrop-blur-md"
            >

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent
                outline-none text-sm placeholder:text-gray-300"
              />

              <button
                className="px-5 py-3
                bg-gradient-to-r from-blue-500 to-orange-500
                hover:scale-105 transition"
              >
                Send
              </button>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom */}
        <div
          className="flex flex-col md:flex-row
          items-center justify-between gap-4
          text-sm text-gray-300"
        >

          <p>
            © 2026 TechMart. All rights reserved.
          </p>

          <div className="flex gap-6">

            <span className="hover:text-orange-400 transition cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-orange-400 transition cursor-pointer">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;