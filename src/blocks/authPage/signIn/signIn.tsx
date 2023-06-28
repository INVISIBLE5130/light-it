import React, { FC, useState } from "react";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import store from "../../../store/store";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { Text } from "../../../components/text";
import { SignInSchema, matchUser } from "../../../helpers/validations";
import type { AuthDataProps } from "@/types/types";

export const SignIn: FC = observer(() => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { authPage } = store.data.blocks || {};
  const formik = useFormik<AuthDataProps>({
    initialValues: {
      email: authPage?.data?.email || "",
      password: authPage?.data?.password || "",
    },
    onSubmit: (values) => {
      const error = matchUser(values, authPage?.mockedData);

      setError(error);
      store.setAuthData(values);

      console.log(error === "");

      if (error === "") {
        navigate("/");
      }
    },
    validationSchema: SignInSchema,
  });

  const onChangeHandler = (data: AuthDataProps) => {
    setError("");
    formik.handleChange(data);
  };

  return (
    <form onSubmit={formik.handleSubmit} className="flex flex-col w-64 mx-auto">
      {error && <div className="text-red-500">{error}</div>}
      <Input
        formik={formik}
        id="email"
        type="email"
        label={<Text textKey="formEmail" common />}
        errorStatus={
          !!(formik.touched.email && formik.errors.email && formik.dirty)
        }
        errorText={formik.errors.email || ""}
        onChange={onChangeHandler}
      />
      <Input
        formik={formik}
        id="password"
        type="password"
        label={<Text textKey="formPassword" common />}
        errorStatus={
          !!(formik.touched.password && formik.errors.password && formik.dirty)
        }
        errorText={formik.errors.password || ""}
        onChange={onChangeHandler}
      />
      <Button />
    </form>
  );
});
