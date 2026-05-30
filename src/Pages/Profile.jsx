import React, {
  useEffect,
  useState,
} from "react";

import api from "../Services/axios";

import toast from "react-hot-toast";

import {
  User,
  Mail,
  Shield,
  Camera,
  Lock,
} from "lucide-react";

const Profile = () => {

  const [loading, setLoading] =
    useState(false);

  const [preview, setPreview] =
    useState("");

  const [image, setImage] =
    useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  // =========================
  // FETCH USER
  // =========================
  useEffect(() => {

    const fetchUser = async () => {

      try {

        const userId =
          localStorage.getItem("userId");

        const { data } = await api.get(
          `/admin/user`
        );

        setForm({
          name: data.user.name,
          email: data.user.email,
          password: "",
        });

        setPreview(
          data.user.imageUrl
        );

      } catch (error) {

        toast.error(
          "Failed to load profile"
        );

      }
    };

    fetchUser();

  }, []);

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });

  };

  // =========================
  // IMAGE CHANGE
  // =========================
  const handleImageChange = (
    e
  ) => {

    const file = e.target.files[0];

    setImage(file);

    if (file) {

      setPreview(
        URL.createObjectURL(file)
      );

    }
  };

  // =========================
  // UPDATE PROFILE
  // =========================
  const handleSubmit = async (
    e
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const formData =
        new FormData();

      formData.append(
        "name",
        form.name
      );

      formData.append(
        "password",
        form.password
      );

      if (image) {

        formData.append(
          "image",
          image
        );

      }

      await api.put(
        "/admin/user/update",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      toast.success(
        "Profile Updated Successfully"
      );

    } catch (error) {

      toast.error(
        "Failed to update profile"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div
      className="
      min-h-screen
      bg-[#f4f7ff]
      px-4 py-10
      "
    >

      {/* TOP SECTION */}
      <div
        className="
        max-w-6xl mx-auto
        mb-10
        "
      >

        <div
          className="
          rounded-[40px]
          bg-gradient-to-r
          from-blue-600
          via-blue-500
          to-orange-500
          p-10
          text-white
          shadow-[0_20px_80px_rgba(37,99,235,0.25)]
          relative overflow-hidden
          "
        >

          <div
            className="
            absolute top-0 right-0
            w-72 h-72
            bg-white/10
            rounded-full
            blur-3xl
            "
          ></div>

          <div
            className="
            flex flex-col md:flex-row
            items-center justify-between
            gap-8
            relative z-10
            "
          >

            {/* LEFT */}
            <div
              className="
              flex items-center gap-6
              "
            >

              <div
                className="
                relative
                "
              >

                <img
                  src={
                    preview ||
                    "https://i.pravatar.cc/300"
                  }
                  alt="profile"
                  className="
                  w-32 h-32
                  rounded-full
                  object-cover
                  border-4 border-white
                  shadow-2xl
                  "
                />

                <label
                  className="
                  absolute bottom-1 right-1
                  w-10 h-10
                  rounded-full
                  bg-white text-blue-600
                  flex items-center justify-center
                  cursor-pointer
                  shadow-xl
                  hover:scale-110
                  transition
                  "
                >

                  <Camera size={18} />

                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={
                      handleImageChange
                    }
                  />

                </label>

              </div>

              <div>

                <h1
                  className="
                  text-4xl
                  font-black
                  "
                >
                  {form.name}
                </h1>

                <p
                  className="
                  text-white/80
                  mt-2
                  "
                >
                  Manage your admin profile
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div
              className="
              grid grid-cols-2 gap-5
              "
            >

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                px-6 py-5
                rounded-3xl
                border border-white/20
                "
              >

                <p className="text-sm text-white/70">
                  Role
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  Admin
                </h2>

              </div>

              <div
                className="
                bg-white/10
                backdrop-blur-xl
                px-6 py-5
                rounded-3xl
                border border-white/20
                "
              >

                <p className="text-sm text-white/70">
                  Status
                </p>

                <h2 className="text-2xl font-bold mt-1">
                  Active
                </h2>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* PROFILE FORM */}
      <div
        className="
        max-w-6xl mx-auto
        grid grid-cols-1
        lg:grid-cols-[350px_1fr]
        gap-8
        "
      >

        {/* SIDEBAR */}
        <div
          className="
          rounded-[35px]
          bg-white
          p-8
          shadow-[0_10px_50px_rgba(0,0,0,0.08)]
          h-fit
          "
        >

          <h2
            className="
            text-2xl font-black
            text-gray-900
            mb-8
            "
          >
            Account Info
          </h2>

          <div className="space-y-6">

            <div
              className="
              flex items-center gap-4
              "
            >

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-blue-100
                text-blue-600
                flex items-center justify-center
                "
              >
                <User />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Full Name
                </p>

                <h3 className="font-bold text-gray-900">
                  {form.name}
                </h3>
              </div>

            </div>

            <div
              className="
              flex items-center gap-4
              "
            >

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-orange-100
                text-orange-500
                flex items-center justify-center
                "
              >
                <Mail />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email Address
                </p>

                <h3 className="font-bold text-gray-900">
                  {form.email}
                </h3>
              </div>

            </div>

            <div
              className="
              flex items-center gap-4
              "
            >

              <div
                className="
                w-14 h-14
                rounded-2xl
                bg-green-100
                text-green-600
                flex items-center justify-center
                "
              >
                <Shield />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Access
                </p>

                <h3 className="font-bold text-gray-900">
                  Full Control
                </h3>
              </div>

            </div>

          </div>

        </div>

        {/* FORM */}
        <div
          className="
          rounded-[35px]
          bg-white
          p-8 md:p-10
          shadow-[0_10px_50px_rgba(0,0,0,0.08)]
          "
        >

          <div className="mb-10">

            <h2
              className="
              text-4xl font-black
              text-gray-900
              "
            >
              Update Profile
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your personal information
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-7"
          >

            {/* NAME */}
            <div>

              <label
                className="
                text-sm font-semibold
                text-gray-700
                "
              >
                Full Name
              </label>

              <div
                className="
                mt-3
                flex items-center
                gap-3
                px-5 py-4
                rounded-2xl
                bg-[#f4f7ff]
                border border-gray-200
                "
              >

                <User
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter name"
                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "
                />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label
                className="
                text-sm font-semibold
                text-gray-700
                "
              >
                Email Address
              </label>

              <div
                className="
                mt-3
                flex items-center
                gap-3
                px-5 py-4
                rounded-2xl
                bg-gray-100
                border border-gray-200
                "
              >

                <Mail
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="email"
                  value={form.email}
                  disabled
                  className="
                  bg-transparent
                  outline-none
                  w-full
                  text-gray-500
                  "
                />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label
                className="
                text-sm font-semibold
                text-gray-700
                "
              >
                New Password
              </label>

              <div
                className="
                mt-3
                flex items-center
                gap-3
                px-5 py-4
                rounded-2xl
                bg-[#f4f7ff]
                border border-gray-200
                "
              >

                <Lock
                  className="text-gray-400"
                  size={20}
                />

                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="
                  bg-transparent
                  outline-none
                  w-full
                  "
                />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              py-4 rounded-2xl
              bg-gradient-to-r
              from-blue-600
              to-orange-500
              text-white
              font-bold
              shadow-[0_10px_40px_rgba(37,99,235,0.25)]
              hover:scale-[1.02]
              transition duration-300
              "
            >

              {loading
                ? "Updating..."
                : "Update Profile"}

            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Profile;