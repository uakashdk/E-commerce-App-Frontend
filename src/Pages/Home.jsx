import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ShoppingBag,
  ShieldCheck,
  Truck,
  Headphones,
  Star,
  Zap,
} from "lucide-react";

import api from "../Services/axios";
import toast from "react-hot-toast";

const Home = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(true);

  // =========================
  // FETCH HOME DATA
  // =========================
  useEffect(() => {

    fetchHomeData();

  }, []);

  const fetchHomeData = async () => {

    try {

      setLoading(true);

      const [productRes, categoryRes] =
        await Promise.all([

          api.get(
            "/product/products-get-all?page=1&limit=8"
          ),

          api.get(
            "/category/get-all-categories"
          ),

        ]);

      setProducts(productRes.data.products);

      setCategories(
        categoryRes.data.categories
      );

    } catch (error) {

      toast.error(
        "Failed to load homepage"
      );

    } finally {

      setLoading(false);

    }
  };

  // =========================
  // LOADING
  // =========================
  if (loading) {

    return (
      <div
        className="
        min-h-screen
        bg-[#f4f7ff]
        flex items-center justify-center
        "
      >

        <div className="flex flex-col items-center">

          <div
            className="
            w-16 h-16 rounded-full
            border-4 border-blue-500
            border-t-transparent
            animate-spin
            "
          ></div>

          <p className="mt-5 text-gray-600">
            Loading Premium Experience...
          </p>

        </div>

      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-[#f4f7ff]
      overflow-hidden
      "
    >

      {/* HERO SECTION */}
      <section
        className="
        relative
        px-6 md:px-12
        py-16 md:py-24
        "
      >

        {/* BACKGROUND */}
        <div
          className="
          absolute top-0 left-0
          w-[400px] h-[400px]
          bg-blue-500/20
          blur-[120px]
          rounded-full
          "
        ></div>

        <div
          className="
          absolute right-0 top-20
          w-[350px] h-[350px]
          bg-orange-500/20
          blur-[120px]
          rounded-full
          "
        ></div>

        <div
          className="
          relative z-10
          max-w-7xl mx-auto
          grid grid-cols-1 lg:grid-cols-2
          gap-14 items-center
          "
        >

          {/* LEFT CONTENT */}
          <div>

            <div
              className="
              inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-white shadow-lg
              text-blue-600 font-semibold
              text-sm
              "
            >

              <Zap size={16} />

              Premium Electronics Store

            </div>

            <h1
              className="
              text-5xl md:text-7xl
              font-black
              leading-tight
              text-gray-900
              mt-7
              "
            >
              Upgrade Your
              <span
                className="
                block
                bg-gradient-to-r
                from-blue-600 to-orange-500
                bg-clip-text text-transparent
                "
              >
                Digital Lifestyle
              </span>
            </h1>

            <p
              className="
              mt-8
              text-lg text-gray-600
              leading-relaxed
              max-w-2xl
              "
            >
              Discover premium laptops,
              smartphones, gaming setups,
              smart gadgets, and next-level
              accessories for your modern life.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href="/dashboard/product-list"
                className="
                group
                px-8 py-4 rounded-2xl
                bg-gradient-to-r
                from-blue-600 to-orange-500
                text-white font-bold
                shadow-[0_20px_60px_rgba(37,99,235,0.3)]
                hover:scale-105
                transition duration-500
                flex items-center gap-3
                "
              >

                Shop Now

                <ArrowRight
                  size={20}
                  className="
                  group-hover:translate-x-1
                  transition
                  "
                />

              </a>

              <a
                href="/dashboard/product-list"
                className="
                px-8 py-4 rounded-2xl
                bg-white
                text-gray-800 font-bold
                shadow-lg
                border border-gray-200
                hover:shadow-xl
                transition duration-300
                "
              >
                Explore Products
              </a>

            </div>

            {/* FEATURES */}
            <div
              className="
              grid grid-cols-2 md:grid-cols-4
              gap-4 mt-14
              "
            >

              {[
                {
                  icon: <Truck size={24} />,
                  title: "Fast Delivery",
                },
                {
                  icon: <ShieldCheck size={24} />,
                  title: "Secure Payment",
                },
                {
                  icon: <Headphones size={24} />,
                  title: "24/7 Support",
                },
                {
                  icon: <ShoppingBag size={24} />,
                  title: "Premium Brands",
                },
              ].map((item, index) => (

                <div
                  key={index}
                  className="
                  rounded-3xl
                  bg-white/80 backdrop-blur-xl
                  p-5 text-center
                  shadow-lg
                  border border-white/40
                  "
                >

                  <div
                    className="
                    w-14 h-14 mx-auto
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600 to-orange-500
                    text-white
                    flex items-center justify-center
                    mb-3
                    "
                  >
                    {item.icon}
                  </div>

                  <p
                    className="
                    font-bold text-gray-800
                    text-sm
                    "
                  >
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="relative">

            <div
              className="
              rounded-[40px]
              bg-white/70
              backdrop-blur-2xl
              border border-white/40
              shadow-[0_20px_80px_rgba(0,0,0,0.08)]
              p-6
              "
            >

              <img
                src={products[0]?.imageUrl}
                alt="hero"
                className="
                w-full h-[550px]
                object-cover
                rounded-[30px]
                "
              />

            </div>

            {/* FLOATING CARD */}
            <div
              className="
              absolute -bottom-8 -left-5
              bg-white/90 backdrop-blur-xl
              shadow-2xl
              rounded-3xl
              p-5
              border border-white/40
              "
            >

              <p className="text-gray-500 text-sm">
                Trending Product
              </p>

              <h3
                className="
                font-black text-xl mt-1
                "
              >
                {products[0]?.name}
              </h3>

              <p
                className="
                text-orange-500 font-bold
                mt-2
                "
              >
                ₹ {products[0]?.price}
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CATEGORY SECTION */}
      <section
        className="
        px-6 md:px-12
        py-16
        "
      >

        <div className="max-w-7xl mx-auto">

          <div
            className="
            flex items-center justify-between
            mb-10
            "
          >

            <div>

              <p
                className="
                text-blue-600 font-bold
                uppercase tracking-[4px]
                text-sm
                "
              >
                Categories
              </p>

              <h2
                className="
                text-4xl font-black
                text-gray-900 mt-2
                "
              >
                Shop By Category
              </h2>

            </div>

          </div>

          <div
            className="
            grid
            grid-cols-2 md:grid-cols-3 lg:grid-cols-5
            gap-6
            "
          >

            {categories.map((category) => (

              <div
                key={category._id}
                className="
                group
                rounded-[30px]
                bg-white
                p-8
                text-center
                shadow-lg
                hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                hover:-translate-y-2
                transition-all duration-500
                cursor-pointer
                "
              >

                <div
                  className="
                  w-20 h-20 mx-auto
                  rounded-3xl
                  bg-gradient-to-r
                  from-blue-600 to-orange-500
                  flex items-center justify-center
                  text-white text-3xl
                  shadow-xl
                  "
                >
                  ⚡
                </div>

                <h3
                  className="
                  mt-5
                  font-black
                  text-gray-800 text-lg
                  "
                >
                  {category.name}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* OFFER SECTION */}
      <section
        className="
        px-6 md:px-12
        py-8
        "
      >

        <div
          className="
          max-w-7xl mx-auto
          rounded-[40px]
          overflow-hidden
          bg-gradient-to-r
          from-blue-700 to-orange-500
          p-10 md:p-16
          relative
          "
        >

          <div
            className="
            absolute right-0 top-0
            w-[300px] h-[300px]
            bg-white/10
            rounded-full
            blur-[40px]
            "
          ></div>

          <div
            className="
            relative z-10
            flex flex-col md:flex-row
            items-center justify-between
            gap-10
            "
          >

            <div>

              <p
                className="
                text-white/80
                uppercase tracking-[4px]
                text-sm
                "
              >
                Limited Time Offer
              </p>

              <h2
                className="
                text-4xl md:text-5xl
                font-black text-white
                mt-3
                "
              >
                Up To 50% OFF
              </h2>

              <p
                className="
                text-white/80
                mt-5 max-w-xl
                "
              >
                Grab exclusive discounts on
                premium electronics and smart
                gadgets before the deal ends.
              </p>

            </div>

            <a
              href="/dashboard/product-list"
              className="
              px-8 py-4 rounded-2xl
              bg-white text-gray-900
              font-black
              hover:scale-105
              transition
              "
            >
              Shop Deals
            </a>

          </div>

        </div>

      </section>

      {/* TRENDING PRODUCTS */}
      <section
        className="
        px-6 md:px-12
        py-20
        "
      >

        <div className="max-w-7xl mx-auto">

          <div
            className="
            flex items-center justify-between
            mb-12
            "
          >

            <div>

              <p
                className="
                text-orange-500 font-bold
                uppercase tracking-[4px]
                text-sm
                "
              >
                Trending Collection
              </p>

              <h2
                className="
                text-4xl font-black
                text-gray-900 mt-2
                "
              >
                Featured Products
              </h2>

            </div>

            <a
              href="/dashboard/product-list"
              className="
              hidden md:flex
              items-center gap-2
              text-blue-600 font-bold
              hover:gap-3 transition-all
              "
            >
              View All
              <ArrowRight size={18} />
            </a>

          </div>

          {/* PRODUCT GRID */}
          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-4
            gap-8
            "
          >

            {products.map((product) => (

              <div
                key={product._id}
                className="
                group
                rounded-[35px]
                overflow-hidden
                bg-white
                shadow-[0_10px_50px_rgba(0,0,0,0.08)]
                hover:shadow-[0_20px_80px_rgba(37,99,235,0.15)]
                transition-all duration-700
                "
              >

                {/* IMAGE */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="
                    w-full h-[280px]
                    object-cover
                    group-hover:scale-110
                    transition duration-700
                    "
                  />

                  <div
                    className="
                    absolute top-5 left-5
                    px-4 py-2 rounded-full
                    bg-blue-600
                    text-white text-xs
                    font-semibold
                    "
                  >
                    {product?.category?.name}
                  </div>

                </div>

                {/* CONTENT */}
                <div className="p-6">

                  <div
                    className="
                    flex items-center gap-1
                    text-yellow-500
                    "
                  >
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />

                    <span className="text-gray-500 text-sm ml-2">
                      4.9
                    </span>

                  </div>

                  <h3
                    className="
                    text-2xl font-black
                    text-gray-900 mt-4
                    line-clamp-1
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                    text-gray-500 mt-3
                    line-clamp-2
                    "
                  >
                    {product.description}
                  </p>

                  <div
                    className="
                    flex items-center justify-between
                    mt-6
                    "
                  >

                    <p
                      className="
                      text-2xl font-black
                      text-orange-500
                      "
                    >
                      ₹ {product.price}
                    </p>

                    <button
                      className="
                      px-5 py-3 rounded-xl
                      bg-gradient-to-r
                      from-blue-600 to-orange-500
                      text-white font-semibold
                      hover:scale-105
                      transition
                      "
                    >
                      Add
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;