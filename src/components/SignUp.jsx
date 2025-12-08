import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useFormik } from "formik";
import { sign_up_schema } from "../yupSchemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const signUp_url = "";

const SignUp = ({ handleLoginClick }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { handleChange, handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: sign_up_schema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        alert("Congratulations, you have signedup successfully");
      },
    });

  return (
    <div
      className="flex items-center justify-center
      bg-[linear-gradient(-202deg,rgb(243,244,246)_50%,#2563EB_50%)]
     border-t-2 border-gray-200 px-8 pt-6 pb-10 xl:pb-10   "
    >
      <motion.form
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 150 }}
        onSubmit={handleSubmit}
        className="bg-white px-8 py-8 rounded-2xl
       shadow-2xl shadow-indigo-400  md:w-lg xl:w-md space-y-6  "
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>

        <div className="space-y-1">
          <label className="text-sm text-gray-600 " name="name">
            Name
          </label>
          <input
            onChange={handleChange}
            value={values.name}
            onBlur={handleBlur}
            type="text"
            name="name"
            className="w-full px-4 py-2 
            rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your name"
          />
          {errors.name && touched.name ? (
            <span className="text-xs text-red-500">{errors.name}</span>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600" name="email">
            Email
          </label>
          <input
            onChange={handleChange}
            value={values.email}
            onBlur={handleBlur}
            name="email"
            type="email"
            className="w-full px-4 py-2 
            rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your email"
          />
          {errors.email && touched.email ? (
            <span className="text-xs text-red-500">{errors.email}</span>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600" name="password">
            Password
          </label>
          <input
            onChange={handleChange}
            name="password"
            value={values.password}
            onBlur={handleBlur}
            type="password"
            className="w-full px-4 py-2 rounded-xl border
         border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your password"
          />
          {errors.password && touched.password ? (
            <span className="text-xs text-red-500">{errors.password}</span>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600" name="confirm_password">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            name="confirm_password"
            value={values.confirm_password}
            onBlur={handleBlur}
            type="password"
            className="w-full px-4 py-2 rounded-xl border
         border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your password"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <span className="text-xs text-red-500">
              {errors.confirm_password}
            </span>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-500">
          Already, Have an account?{" "}
          <span
            onClick={handleLoginClick}
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default SignUp;
