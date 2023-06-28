import React, { FC } from "react";
import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import store from "../../../store/store";
import { Input } from "../../../components/input";
import { Text } from "../../../components/text";
import { Button } from "../../../components/button";
import { SignUpSchema } from "../../../helpers/validations";
import type { AuthDataProps } from "@/types/types";

export const SignUp: FC<{ signInHandler: () => void }> = observer(
  ({ signInHandler }) => {
    const { authPage } = store.data.blocks || {};
    const formik = useFormik<AuthDataProps>({
      initialValues: {
        fullName: authPage?.data?.fullName || "",
        email: authPage?.data?.email || "",
        password: authPage?.data?.password || "",
      },
      onSubmit: (values) => {
        signInHandler();
        store.setAuthData(values);
        store.setAuthMockedData(values);
      },
      validationSchema: SignUpSchema,
    });

    return (
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-64 mx-auto"
      >
        <Input
          formik={formik}
          id="fullName"
          label={<Text textKey="formFullName" common />}
          errorStatus={
            !!(
              formik.touched.fullName &&
              formik.errors.fullName &&
              formik.dirty
            )
          }
          onChange={formik.handleChange}
          errorText={formik.errors.fullName || ""}
        />
        <Input
          formik={formik}
          id="email"
          type="email"
          label={<Text textKey="formEmail" common />}
          errorStatus={
            !!(formik.touched.email && formik.errors.email && formik.dirty)
          }
          onChange={formik.handleChange}
          errorText={formik.errors.email || ""}
        />
        <Input
          formik={formik}
          id="password"
          type="password"
          label={<Text textKey="formPassword" common />}
          errorStatus={
            !!(
              formik.touched.password &&
              formik.errors.password &&
              formik.dirty
            )
          }
          onChange={formik.handleChange}
          errorText={formik.errors.password || ""}
        />
        <Button />
      </form>
    );
  }
);
