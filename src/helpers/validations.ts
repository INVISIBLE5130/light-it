import * as Yup from "yup";
import type { AuthDataProps } from "@/types/types";

export const SignUpSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const SignInSchema = Yup.object().shape({
  fullName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

const mockedProps = { email: "", password: "" };

export const matchUser = (
  data: AuthDataProps = mockedProps,
  mockedData: AuthDataProps = mockedProps
) => {
  // Find the matching user in the mocked data
  const matchedUser =
    data.email === mockedData.email && data.password === mockedData.password;

  const error = matchedUser
    ? ""
    : "Invalid credentials or user not found. Please try again.";

  return error;
};

export const FeedbackSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});
