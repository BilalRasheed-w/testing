import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your Email"),
  password: Yup.string().min(6).required("Please enter your Password"),
});

export const sign_up_schema = Yup.object({
  name: Yup.string()
    .min(2, "name must contain atleast 2 letters")
    .required("Please enter your name"),
  email: Yup.string()
    .email("Please enter valid Email")
    .required("Please enter your Email"),
  password: Yup.string()
    .min(6, "Password must contain 6 letters")
    .required("Please enter your Password"),
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords do not match. ")
    .required("Please enter your confirm password"),
});
