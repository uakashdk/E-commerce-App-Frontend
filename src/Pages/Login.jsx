import React, { useState } from "react";
import api from "../Services/axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/ecommerce-logo.png";
import toast from "react-hot-toast";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");

            const res = await api.post("/auth/login", form);

            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");
            toast.success("Login successful");
        } catch (err) {
            setError(err.message || "Login failed");
            toast.error("Login failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center 
      bg-gradient-to-br from-blue-200 via-white to-orange-200">

            {/* Glass Card */}
            <div className="w-full max-w-md p-8 rounded-3xl 
        bg-white/70 backdrop-blur-xl shadow-2xl border border-white/40">

                {/* Logo */}
                <div className="flex flex-col items-center mb-6">
                    <img src={Logo} alt="logo" className="w-20 h-20 object-contain mb-3 drop-shadow-lg" />
                    <h1 className="text-2xl font-bold text-gray-800">
                        Welcome to <span className="text-blue-600">Tech</span>
                        <span className="text-orange-500">Mart</span>
                    </h1>
                    <p className="text-gray-500 text-sm">Smart Electronics Store</p>
                </div>

                {/* Error */}
                {error && (
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg mb-4 text-sm text-center">
                        {error}
                    </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-4 py-3 rounded-xl 
  bg-white/60 backdrop-blur-md 
  shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-blue-400 
  focus:shadow-md transition duration-200"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm text-gray-600">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            className="w-full mt-1 px-4 py-3 rounded-xl 
  bg-white/60 backdrop-blur-md 
  shadow-sm 
  focus:outline-none focus:ring-2 focus:ring-blue-400 
  focus:shadow-md transition duration-200"
                            placeholder="Enter your password"
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
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                {/* Footer */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{" "}
                    <span
                        className="text-blue-600 cursor-pointer hover:underline"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;