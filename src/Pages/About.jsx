import React from "react";
import {
  ShieldCheck,
  Truck,
  Headphones,
  BadgeCheck,
  Laptop,
  Smartphone,
  Watch,
  Camera,
  ArrowRight,
} from "lucide-react";

import Logo from "../assets/ecommerce-logo.png";

const About = () => {
  const features = [
    {
      icon: <Truck size={34} />,
      title: "Fast Delivery",
      desc: "Quick and secure nationwide delivery with live order tracking.",
    },
    {
      icon: <ShieldCheck size={34} />,
      title: "Secure Payment",
      desc: "100% encrypted transactions with trusted payment gateways.",
    },
    {
      icon: <BadgeCheck size={34} />,
      title: "Premium Quality",
      desc: "Only genuine branded electronics with official warranty.",
    },
    {
      icon: <Headphones size={34} />,
      title: "24/7 Support",
      desc: "Friendly customer support whenever you need assistance.",
    },
  ];

  const categories = [
    {
      icon: <Laptop size={36} />,
      title: "Laptops",
    },
    {
      icon: <Smartphone size={36} />,
      title: "Smartphones",
    },
    {
      icon: <Watch size={36} />,
      title: "Smart Watches",
    },
    {
      icon: <Camera size={36} />,
      title: "Accessories",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-orange-50 min-h-screen">

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

              Welcome to{" "}

              <span className="text-blue-700">
                Tech
              </span>

              <span className="text-orange-500">
                Mart
              </span>

            </h1>

            <p className="text-gray-600 text-lg mt-8 leading-8">

              TechMart is your one-stop destination for premium
              electronics, smart gadgets, accessories and innovative
              technology.

              <br />
              <br />

              We are committed to delivering authentic products,
              competitive pricing and an outstanding shopping experience.

            </p>

            <button
              className="mt-10
              px-7 py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-orange-500
              text-white
              font-semibold
              flex items-center gap-3
              hover:scale-105
              transition"
            >
              Explore Products
              <ArrowRight size={20} />
            </button>

          </div>

          <div className="flex justify-center">

            <div
              className="
              bg-white/70
              backdrop-blur-xl
              rounded-3xl
              shadow-2xl
              border
              border-white/40
              p-8"
            >

              <img
                src={Logo}
                alt="TechMart"
                className="w-full max-w-md"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-14">

          Why Choose

          <span className="text-blue-700">
            {" "}Tech
          </span>

          <span className="text-orange-500">
            Mart
          </span>

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="
              bg-white/70
              backdrop-blur-xl
              rounded-3xl
              border
              border-white/40
              shadow-lg
              p-8
              text-center
              hover:-translate-y-2
              hover:shadow-2xl
              transition"
            >

              <div className="text-blue-600 flex justify-center">

                {item.icon}

              </div>

              <h3 className="text-xl font-bold mt-5">

                {item.title}

              </h3>

              <p className="text-gray-600 mt-4">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </section>

      {/* Mission & Vision */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid lg:grid-cols-2 gap-10">

          <div
            className="
            bg-white/70
            backdrop-blur-xl
            rounded-3xl
            p-10
            shadow-xl"
          >

            <h2 className="text-3xl font-bold text-blue-700">

              Our Mission

            </h2>

            <p className="text-gray-600 mt-6 leading-8">

              To make technology accessible, affordable and reliable
              for everyone by providing high-quality electronic
              products backed by exceptional customer service.

            </p>

          </div>

          <div
            className="
            bg-white/70
            backdrop-blur-xl
            rounded-3xl
            p-10
            shadow-xl"
          >

            <h2 className="text-3xl font-bold text-orange-500">

              Our Vision

            </h2>

            <p className="text-gray-600 mt-6 leading-8">

              To become India's most trusted online electronics
              marketplace by offering innovation, quality and
              customer satisfaction.

            </p>

          </div>

        </div>

      </section>

      {/* Categories */}

      <section className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center mb-14">

          What We Offer

        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {categories.map((item, index) => (

            <div
              key={index}
              className="
              bg-white
              rounded-3xl
              shadow-lg
              p-10
              text-center
              hover:shadow-2xl
              hover:-translate-y-2
              transition"
            >

              <div className="text-orange-500 flex justify-center">

                {item.icon}

              </div>

              <h3 className="font-bold text-xl mt-5">

                {item.title}

              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* Stats */}

      <section className="bg-gradient-to-r from-blue-700 to-orange-500 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center text-white">

            <div>

              <h2 className="text-5xl font-bold">

                5000+

              </h2>

              <p className="mt-3">

                Happy Customers

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">

                1000+

              </h2>

              <p className="mt-3">

                Products

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">

                120+

              </h2>

              <p className="mt-3">

                Brands

              </p>

            </div>

            <div>

              <h2 className="text-5xl font-bold">

                99%

              </h2>

              <p className="mt-3">

                Customer Satisfaction

              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24">

        <div
          className="
          max-w-5xl
          mx-auto
          rounded-3xl
          bg-white/80
          backdrop-blur-xl
          shadow-2xl
          text-center
          p-16"
        >

          <h2 className="text-5xl font-bold">

            Ready to Upgrade Your

            <span className="text-blue-700">
              {" "}Technology?
            </span>

          </h2>

          <p className="text-gray-600 mt-6 text-lg">

            Discover the latest gadgets and electronics with
            unbeatable prices only at TechMart.

          </p>

          <button
            className="
            mt-10
            px-8
            py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-orange-500
            text-white
            font-semibold
            hover:scale-105
            transition"
          >

            Shop Now

          </button>

        </div>

      </section>

    </div>
  );
};

export default About;