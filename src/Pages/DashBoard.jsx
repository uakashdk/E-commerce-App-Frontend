import React from "react";
import {
  Package,
  ShoppingCart,
  Users,
  IndianRupee,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const DashBoard = () => {

  // =========================
  // DUMMY ANALYTICS DATA
  // =========================
  const salesData = [
    { month: "Jan", sales: 4000 },
    { month: "Feb", sales: 6500 },
    { month: "Mar", sales: 5000 },
    { month: "Apr", sales: 8200 },
    { month: "May", sales: 9500 },
    { month: "Jun", sales: 11000 },
  ];

  const orderData = [
    { name: "Mon", orders: 12 },
    { name: "Tue", orders: 18 },
    { name: "Wed", orders: 9 },
    { name: "Thu", orders: 24 },
    { name: "Fri", orders: 17 },
    { name: "Sat", orders: 28 },
  ];

  const recentOrders = [
    {
      id: "#ORD1025",
      customer: "Akash",
      product: "iPhone 15 Pro",
      status: "Delivered",
      amount: "₹1,25,000",
    },
    {
      id: "#ORD1026",
      customer: "Rahul",
      product: "Samsung TV",
      status: "Pending",
      amount: "₹58,000",
    },
    {
      id: "#ORD1027",
      customer: "Rohit",
      product: "Boat Headphones",
      status: "Cancelled",
      amount: "₹3,500",
    },
  ];

  return (
    <div
      className="
      min-h-screen
      bg-[#f4f7ff]
      p-5 md:p-8
      "
    >

      {/* ========================= */}
      {/* PAGE HEADER */}
      {/* ========================= */}
      <div
        className="
        flex flex-col md:flex-row
        md:items-center
        md:justify-between
        gap-4
        mb-10
        "
      >

        <div>

          <p
            className="
            text-blue-600
            uppercase
            tracking-[5px]
            text-sm
            font-bold
            "
          >
            Admin Panel
          </p>

          <h1
            className="
            text-4xl md:text-5xl
            font-black
            text-gray-900
            mt-2
            "
          >
            Ecommerce Dashboard
          </h1>

        </div>

        <button
          className="
          px-7 py-4
          rounded-3xl
          bg-gradient-to-r
          from-blue-600 to-orange-500
          text-white
          font-bold
          shadow-[0_15px_40px_rgba(37,99,235,0.3)]
          hover:scale-105
          transition
          "
        >
          + Add Product
        </button>

      </div>

      {/* ========================= */}
      {/* TOP CARDS */}
      {/* ========================= */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-10
        "
      >

        {/* CARD */}
        <div
          className="
          rounded-[30px]
          bg-gradient-to-br
          from-blue-600 to-blue-400
          p-6
          text-white
          shadow-[0_15px_50px_rgba(37,99,235,0.25)]
          relative overflow-hidden
          "
        >

          <div
            className="
            absolute -right-6 -top-6
            w-32 h-32
            bg-white/10
            rounded-full
            "
          ></div>

          <div className="flex items-center justify-between">

            <div>

              <p className="text-white/80 font-medium">
                Total Revenue
              </p>

              <h2
                className="
                text-4xl
                font-black
                mt-3
                "
              >
                ₹2.5L
              </h2>

              <p
                className="
                mt-3
                flex items-center gap-1
                text-sm
                "
              >
                <TrendingUp size={16} />
                +18% This Month
              </p>

            </div>

            <div
              className="
              w-16 h-16
              rounded-2xl
              bg-white/20
              flex items-center justify-center
              "
            >
              <IndianRupee size={32} />
            </div>

          </div>

        </div>

        {/* CARD */}
        <div
          className="
          rounded-[30px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          p-6
          shadow-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 font-medium">
                Total Orders
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-gray-900
                mt-3
                "
              >
                1,248
              </h2>

              <p className="text-green-500 mt-3 text-sm">
                +12% Growth
              </p>

            </div>

            <div
              className="
              w-16 h-16
              rounded-2xl
              bg-orange-100
              text-orange-500
              flex items-center justify-center
              "
            >
              <ShoppingCart size={30} />
            </div>

          </div>

        </div>

        {/* CARD */}
        <div
          className="
          rounded-[30px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          p-6
          shadow-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 font-medium">
                Customers
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-gray-900
                mt-3
                "
              >
                892
              </h2>

              <p className="text-blue-500 mt-3 text-sm">
                Active Users
              </p>

            </div>

            <div
              className="
              w-16 h-16
              rounded-2xl
              bg-blue-100
              text-blue-600
              flex items-center justify-center
              "
            >
              <Users size={30} />
            </div>

          </div>

        </div>

        {/* CARD */}
        <div
          className="
          rounded-[30px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          p-6
          shadow-xl
          "
        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-gray-500 font-medium">
                Products
              </p>

              <h2
                className="
                text-4xl
                font-black
                text-gray-900
                mt-3
                "
              >
                325
              </h2>

              <p className="text-orange-500 mt-3 text-sm">
                Inventory Active
              </p>

            </div>

            <div
              className="
              w-16 h-16
              rounded-2xl
              bg-green-100
              text-green-600
              flex items-center justify-center
              "
            >
              <Package size={30} />
            </div>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* CHARTS */}
      {/* ========================= */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-2
        gap-8
        mb-10
        "
      >

        {/* SALES CHART */}
        <div
          className="
          rounded-[35px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          p-6
          "
        >

          <div className="mb-6">

            <h2
              className="
              text-2xl
              font-black
              text-gray-900
              "
            >
              Revenue Analytics
            </h2>

            <p className="text-gray-500 mt-1">
              Monthly sales performance
            </p>

          </div>

          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <LineChart data={salesData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="month" />

                <Tooltip />

                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#2563eb"
                  strokeWidth={4}
                />

              </LineChart>

            </ResponsiveContainer>

          </div>

        </div>

        {/* ORDER CHART */}
        <div
          className="
          rounded-[35px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          p-6
          "
        >

          <div className="mb-6">

            <h2
              className="
              text-2xl
              font-black
              text-gray-900
              "
            >
              Weekly Orders
            </h2>

            <p className="text-gray-500 mt-1">
              Orders overview this week
            </p>

          </div>

          <div className="h-[320px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart data={orderData}>

                <CartesianGrid strokeDasharray="3 3" />

                <XAxis dataKey="name" />

                <Tooltip />

                <Bar
                  dataKey="orders"
                  fill="#f97316"
                  radius={[10, 10, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>

      {/* ========================= */}
      {/* BOTTOM SECTION */}
      {/* ========================= */}
      <div
        className="
        grid
        grid-cols-1
        xl:grid-cols-[1.4fr_0.8fr]
        gap-8
        "
      >

        {/* RECENT ORDERS */}
        <div
          className="
          rounded-[35px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          p-6
          overflow-x-auto
          "
        >

          <div
            className="
            flex items-center justify-between
            mb-6
            "
          >

            <div>

              <h2
                className="
                text-2xl
                font-black
                text-gray-900
                "
              >
                Recent Orders
              </h2>

              <p className="text-gray-500 mt-1">
                Latest customer purchases
              </p>

            </div>

          </div>

          <table className="w-full">

            <thead>

              <tr className="text-left text-gray-500">

                <th className="pb-4">Order</th>
                <th className="pb-4">Customer</th>
                <th className="pb-4">Product</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Amount</th>

              </tr>

            </thead>

            <tbody>

              {recentOrders.map((order, index) => (

                <tr
                  key={index}
                  className="border-t border-gray-100"
                >

                  <td className="py-5 font-bold text-gray-800">
                    {order.id}
                  </td>

                  <td className="py-5 text-gray-600">
                    {order.customer}
                  </td>

                  <td className="py-5 text-gray-600">
                    {order.product}
                  </td>

                  <td className="py-5">

                    <span
                      className={`
                      px-4 py-2 rounded-full text-xs font-bold
                      ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }
                      `}
                    >
                      {order.status}
                    </span>

                  </td>

                  <td className="py-5 font-bold text-gray-900">
                    {order.amount}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        {/* INVENTORY PANEL */}
        <div
          className="
          rounded-[35px]
          bg-white/70
          backdrop-blur-xl
          border border-white/40
          shadow-xl
          p-6
          "
        >

          <div className="mb-6">

            <h2
              className="
              text-2xl
              font-black
              text-gray-900
              "
            >
              Inventory Alerts
            </h2>

            <p className="text-gray-500 mt-1">
              Stock management status
            </p>

          </div>

          <div className="space-y-5">

            {[
              "iPhone 13 Pro Max",
              "Sony Headphones",
              "Samsung Monitor",
              "Apple Watch",
            ].map((item, index) => (

              <div
                key={index}
                className="
                flex items-center justify-between
                p-4 rounded-2xl
                bg-[#f4f7ff]
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                    w-12 h-12
                    rounded-2xl
                    bg-red-100
                    text-red-500
                    flex items-center justify-center
                    "
                  >
                    <AlertTriangle size={22} />
                  </div>

                  <div>

                    <p className="font-bold text-gray-800">
                      {item}
                    </p>

                    <p className="text-sm text-gray-500">
                      Low Stock Remaining
                    </p>

                  </div>

                </div>

                <span
                  className="
                  px-4 py-2 rounded-xl
                  bg-red-500 text-white
                  text-sm font-bold
                  "
                >
                  3 Left
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default DashBoard;