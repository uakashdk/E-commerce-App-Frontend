import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../Services/axios";
import Select from "react-select";

const CreateProduct = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    countInStock: "",
  });

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ===============================
  // Fetch categories
  // ===============================
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/category/get-all-categories");

        const options = res.data.categories.map((cat) => ({
          value: cat._id,
          label: cat.name,
        }));

        setCategories(options);
      } catch (error) {
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  // ===============================
  // Handle change
  // ===============================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ===============================
  // Handle category select
  // ===============================
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setForm({ ...form, category: selectedOption.value });
  };

  // ===============================
  // Submit
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("price", form.price);
      formData.append("category", form.category);
      formData.append("countInStock", form.countInStock);
      formData.append("image", image);

      await api.post("/product/create-product", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product created successfully 🎉");

      // reset
      setForm({
        name: "",
        description: "",
        price: "",
        category: "",
        countInStock: "",
      });
      setImage(null);
      setSelectedCategory(null);

    } catch (error) {
      toast.error("Failed to create product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-200 via-white to-orange-200 p-6">

      <div className="w-full max-w-2xl p-8 rounded-3xl 
        bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Create <span className="text-blue-600">Product</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Add new electronic product to your store
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          {/* Price + Stock */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              type="number"
              name="countInStock"
              value={form.countInStock}
              onChange={handleChange}
              placeholder="Stock"
              className="px-4 py-3 rounded-xl bg-white/60 backdrop-blur-md 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="text-sm text-gray-600">Select Category</label>
            <Select
              options={categories}
              value={selectedCategory}
              onChange={handleCategoryChange}
              placeholder="Choose category..."
              className="mt-2"
            />
          </div>

          {/* Image */}
          <div>
            <label className="text-sm text-gray-600">Product Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full mt-2 px-4 py-2 rounded-xl bg-white/60 backdrop-blur-md"
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold 
            bg-gradient-to-r from-blue-600 to-orange-500 
            hover:scale-[1.02] hover:shadow-lg transition duration-300"
          >
            {loading ? "Creating..." : "Create Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;