import { useFormik } from "formik";
import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import store from "../../store/store";
import { FeedbackSchema } from "../../helpers/validations";
import { Input } from "../../components/input";
import { Text } from "../../components/text";
import { Button } from "../../components/button";
import { TextArea } from "../../components/textarea";
import type { FeedbackProps } from "@/types/types";
import LanguageSwitch from "../../components/switchLanguage";
import { languages } from "../../constants";

export const HomePage = observer(() => {
  const { authPage } = store.data.blocks || {};
  const adminName = authPage?.data?.fullName || authPage?.data?.email;

  const formik = useFormik<FeedbackProps>({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: FeedbackSchema,
    onSubmit: (values, { resetForm }) => {
      // Add feedback to store
      store.addFeedback(values);

      // Reset the form
      resetForm();
    },
  });

  useEffect(() => {
    store.setCurrentPage("homePage");
  }, []);

  return (
    <div className="container mx-auto p-8 relative">
      <LanguageSwitch languages={languages} />
      <h1 className="text-2xl font-bold mb-4">
        <Text textKey="title" />
      </h1>
      <h2 className="mb-4">
        <Text textKey="welcomeAdmin" /> - {adminName}
      </h2>

      {/* Table */}
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="border p-2">
              <Text textKey="formName" common />
            </th>
            <th className="border p-2">
              <Text textKey="formEmail" common />
            </th>
            <th className="border p-2">
              <Text textKey="formMessage" common />
            </th>
          </tr>
        </thead>
        <tbody>
          {store.data.feedbacks?.map((feedback, index) => (
            <tr key={index}>
              <td className="border p-2">{feedback.name}</td>
              <td className="border p-2">{feedback.email}</td>
              <td className="border p-2">{feedback.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Feedback Form */}
      <form
        onSubmit={formik.handleSubmit}
        className="mb-8 flex flex-col w-64 mx-auto"
      >
        <Input
          formik={formik}
          id={"name"}
          label={<Text textKey="formName" common />}
          onChange={formik.handleChange}
          errorStatus={!!(formik.touched.name && formik.errors.name)}
          errorText={formik.errors.name || ""}
        />
        <Input
          formik={formik}
          id={"email"}
          type={"email"}
          label={<Text textKey="formEmail" common />}
          onChange={formik.handleChange}
          errorStatus={!!(formik.touched.email && formik.errors.email)}
          errorText={formik.errors.email || ""}
        />
        <TextArea
          formik={formik}
          id={"message"}
          label={<Text textKey="formMessage" common />}
          errorStatus={!!(formik.touched.message && formik.errors.message)}
          errorText={formik.errors.message || ""}
        />
        <Button />
      </form>
    </div>
  );
});
