import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../Services/axios";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const UpdateProduct = () => {
  const { id } = useParams();
const navigate = useNavigate();
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
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  // =========================
  // Fetch Categories
  // =========================
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/category/get-all-categories");

        const options = res.data.categories.map((cat) => ({
          value: cat._id,
          label: cat.name,
        }));

        setCategories(options);
      } catch (err) {
        toast.error("Failed to load categories");
      }
    };

    fetchCategories();
  }, []);

  // =========================
  // Fetch Product By ID
  // =========================
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/product/product/${id}`);
        const product = res.data.product;

        setForm({
          name: product.name,
          description: product.description,
          price: product.price,
          category: product.category._id,
          countInStock: product.countInStock,
        });

        setSelectedCategory({
          value: product.category._id,
          label: product.category.name,
        });

       setPreview(product.imageUrl);
      } catch (err) {
        toast.error("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  // =========================
  // Handle Input Change
  // =========================
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // =========================
  // Category Change
  // =========================
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setForm({ ...form, category: selectedOption.value });
  };

  // =========================
  // Image Change
  // =========================
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // =========================
  // Submit Update
  // =========================
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

      if (image) {
        formData.append("image", image);
      }

      await api.put(`/product/Update-product/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Product updated successfully 🎉");
        navigate("/dashboard/product-list");
    } catch (err) {
      toast.error("Failed to update product");
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
            Update <span className="text-orange-600">Product</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Modify your product details
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
            className="w-full px-4 py-3 rounded-xl bg-white/60 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            required
          />

          {/* Description */}
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows="3"
            className="w-full px-4 py-3 rounded-xl bg-white/60 
            shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          {/* Price + Stock */}
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="px-4 py-3 rounded-xl bg-white/60 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />

            <input
              type="number"
              name="countInStock"
              value={form.countInStock}
              onChange={handleChange}
              placeholder="Stock"
              className="px-4 py-3 rounded-xl bg-white/60 
              shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm text-gray-600">Select Category</label>
            <Select
              options={categories}
              value={selectedCategory}
              onChange={handleCategoryChange}
              className="mt-2"
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="flex justify-center">
              <img
                src={preview}
                alt="product"
                className="w-32 h-32 object-cover rounded-xl shadow-md"
              />
            </div>
          )}

          {/* Image Upload */}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-4 py-2 rounded-xl bg-white/60"
          />

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-semibold 
            bg-gradient-to-r from-orange-500 to-blue-600 
            hover:scale-[1.02] transition"
          >
            {loading ? "Updating..." : "Update Product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;