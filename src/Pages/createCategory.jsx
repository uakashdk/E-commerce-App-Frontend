import React, { useState } from "react";
import api from "../Services/axios";
import toast from "react-hot-toast";

const CreateCategory = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await api.post("/category/create-category", form);

      toast.success("Category created successfully 🎉");

      setForm({
        name: "",
        description: "",
      });

    } catch (error) {
      toast.error(error?.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-200 via-white to-orange-200 p-6">

      {/* Glass Card */}
      <div className="w-full max-w-md p-8 rounded-3xl 
        bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40">

        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Create <span className="text-blue-600">Category</span>
          </h1>
          <p className="text-gray-500 text-sm">
            Add new category for your store
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Category Name */}
          <div>
            <label className="text-sm text-gray-600">Category Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Mobile, Laptop"
              className="w-full mt-1 px-4 py-3 rounded-xl 
              bg-white/60 backdrop-blur-md shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-200"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter category description"
              className="w-full mt-1 px-4 py-3 rounded-xl 
              bg-white/60 backdrop-blur-md shadow-sm
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              transition duration-200"
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
            {loading ? "Creating..." : "Create Category"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCategory;