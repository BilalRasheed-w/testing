import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { useFormik } from "formik";
import { loginSchema } from "../yupSchemas";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../store/slices/userSlice";

const login_url = "";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = ({ onSignUpClick }) => {
  const [loadig, setLoadig] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const { loading, error, user } = useSelector((state) => state.user);

  const { handleChange, handleSubmit, touched, values, errors, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        action.resetForm();
        // dispatch(loginUser({ email: values.email, password: values.password }));
        alert("you are logged in successfully");
      },
    });
  return (
    <div
      id="login"
      className="bg-[linear-gradient(-202deg,rgb(243,244,246)_50%,#2563EB_50%)]
         border-gray-200 shadow-xl flex items-center justify-center
          py-20  "
    >
      <motion.form
        initial={{ scale: 0.6, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, delay: 0.5, type: "spring", stiffness: 150 }}
        onSubmit={handleSubmit}
        className="bg-white space-y-6 shadow-2xl shadow-indigo-400 rounded-2xl px-8 py-8 
        md:py-12 md:w-md 
        lg:py-14 lg:w-lg  
        xl:w-md "
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

        <div className="space-y-1">
          <label className="text-sm text-gray-600" name="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            autoComplete=""
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className="w-full px-4 py-2 
            rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your email"
          />
          {errors.email && touched.email ? (
            <span className="text-xs text-red-500 ">{errors.email}</span>
          ) : null}
        </div>

        <div className="space-y-1">
          <label className="text-sm text-gray-600" name="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            autoComplete="off"
            className="w-full px-4 py-2 rounded-xl border
         border-gray-300 focus:ring-2 focus:ring-indigo-500 outline-none"
            placeholder="Enter your password"
          />
          {errors.password && touched.password ? (
            <span className="text-xs text-red-500 w-xs ">
              {errors.password}
            </span>
          ) : null}
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <span
            onClick={onSignUpClick}
            className="text-indigo-600 font-medium hover:underline cursor-pointer"
          >
            Sign up
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default LoginForm;
