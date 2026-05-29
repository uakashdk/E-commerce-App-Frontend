import React, { useEffect, useState } from "react";
import api from "../Services/axios";
import toast from "react-hot-toast";

const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [hasMore, setHasMore] = useState(true);

  const isAdmin =
    localStorage.getItem("isAdmin") === "true";

  // =========================
  // FETCH PRODUCTS
  // =========================
  const fetchProducts = async (pageNumber = 1) => {

    try {

      if (pageNumber === 1) {
        setLoading(true);
      } else {
        setLoadingMore(true);
      }

      const { data } = await api.get(
        `/product/products-get-all?page=${pageNumber}&limit=15`
      );

      if (pageNumber === 1) {
        setProducts(data.products);
      } else {
        setProducts((prev) => [
          ...prev,
          ...data.products,
        ]);
      }

      setHasMore(pageNumber < data.totalPages);

    } catch (error) {

      toast.error("Failed to fetch products");

    } finally {

      setLoading(false);
      setLoadingMore(false);

    }
  };

  // =========================
  // LOAD MORE
  // =========================
  const loadMore = () => {

    const nextPage = page + 1;

    setPage(nextPage);

    fetchProducts(nextPage);
  };

  // =========================
  // DELETE
  // =========================
  const handleDelete = async (id) => {

    try {

      await api.delete(
        `/product/Delete-product/${id}`
      );

      toast.success("Product deleted");

      setProducts((prev) =>
        prev.filter((item) => item._id !== id)
      );

    } catch (error) {

      toast.error("Delete failed");

    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // =========================
  // LOADING SCREEN
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

          <p className="mt-6 text-gray-600 font-medium">
            Loading premium products...
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
      px-5 md:px-10 py-10
      "
    >

      {/* TOP HEADER */}
      <div
        className="
        flex items-center justify-between
        mb-12
        "
      >

        <div>

          <p
            className="
            text-blue-500 font-semibold
            tracking-[4px]
            uppercase text-sm
            "
          >
            Modern Store
          </p>

          <h1
            className="
            text-5xl font-black
            text-gray-900 mt-3
            "
          >
            Discover Products
          </h1>

        </div>

        {/* FLOATING ADMIN BUTTON */}
        {isAdmin && (

          <a
            href="/dashboard/create-product"
            className="
            group relative overflow-hidden
            px-8 py-4 rounded-3xl
            bg-gradient-to-r
            from-blue-600 to-orange-500
            text-white font-bold
            shadow-[0_20px_60px_rgba(37,99,235,0.3)]
            hover:scale-105 transition duration-500
            "
          >

            <span className="relative z-10">
              + Create Product
            </span>

            <div
              className="
              absolute inset-0
              bg-white/20
              translate-y-full
              group-hover:translate-y-0
              transition duration-500
              "
            ></div>

          </a>

        )}

      </div>

      {/* PRODUCT GRID */}
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >

        {products.map((product) => (

          <div
            key={product._id}
            className="
            group relative overflow-hidden
            rounded-[35px]
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
                w-full h-[340px]
                object-cover
                group-hover:scale-110
                transition duration-700
                "
              />

              {/* OVERLAY */}
              <div
                className="
                absolute inset-0
                bg-gradient-to-t
                from-black/70
                via-black/10
                to-transparent
                "
              ></div>

              {/* PRICE */}
              <div
                className="
                absolute top-5 right-5
                px-5 py-2 rounded-2xl
                bg-white/20 backdrop-blur-xl
                text-white font-bold
                border border-white/20
                "
              >
                ₹ {product.price}
              </div>

              {/* CATEGORY */}
              <div
                className="
                absolute top-5 left-5
                px-4 py-2 rounded-full
                bg-blue-500 text-white
                text-xs font-semibold
                "
              >
                {product?.category?.name}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2
                className="
                text-2xl font-black
                text-gray-900
                line-clamp-1
                "
              >
                {product.name}
              </h2>

              <p
                className="
                text-gray-500 mt-3
                line-clamp-2
                "
              >
                {product.description}
              </p>

              {/* FOOTER */}
              <div
                className="
                flex items-center justify-between
                mt-6
                "
              >

                <div className="flex items-center gap-2">

                  <span className="text-yellow-500">
                    ★★★★★
                  </span>

                  <span className="text-sm text-gray-500">
                    4.9
                  </span>

                </div>

                <div
                  className="
                  text-sm text-green-600
                  font-semibold
                  "
                >
                  {product.countInStock} In Stock
                </div>

              </div>

            </div>

            {/* HOVER ACTIONS */}
            <div
              className="
              absolute bottom-6 left-1/2
              -translate-x-1/2
              opacity-0
              group-hover:opacity-100
              translate-y-10
              group-hover:translate-y-0
              transition-all duration-500
              "
            >

              <div
                className="
                flex items-center gap-3
                px-4 py-3 rounded-2xl
                bg-white/80 backdrop-blur-xl
                shadow-2xl
                "
              >

                <button
                  className="
                  px-6 py-3 rounded-xl
                  bg-gradient-to-r
                  from-blue-600 to-orange-500
                  text-white font-semibold
                  hover:scale-105 transition
                  "
                >
                  Add To Cart
                </button>

                {isAdmin && (

                  <div
                    className="
    flex items-center
    border-l border-gray-200
    pl-3 ml-1
    gap-1
    "
                  >

                    {/* EDIT */}
                    <a
                      href={`/dashboard/update-product/${product._id}`}
                      className="
      px-4 py-2
      rounded-xl
      text-sm font-medium
      text-gray-600
      hover:text-blue-600
      hover:bg-blue-50
      transition-all duration-200
      "
                    >
                      Edit
                    </a>

                    {/* DELETE */}
                    <button
                      onClick={() =>
                        handleDelete(product._id)
                      }
                      className="
      px-4 py-2
      rounded-xl
      text-sm font-medium
      text-gray-500
      hover:text-red-600
      hover:bg-red-50
      transition-all duration-200
      "
                    >
                      Delete
                    </button>

                  </div>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* LOAD MORE */}
      {hasMore && (

        <div className="flex justify-center mt-14">

          <button
            onClick={loadMore}
            disabled={loadingMore}
            className="
            px-10 py-4 rounded-3xl
            bg-white shadow-xl
            hover:scale-105 transition
            font-semibold text-gray-800
            "
          >

            {loadingMore
              ? "Loading..."
              : "Load More Products"}

          </button>

        </div>

      )}

    </div>
  );
};

export default ProductList;