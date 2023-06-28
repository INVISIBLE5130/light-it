import { FC } from "react";

interface TextAreaProps {
  formik;
  id: string;
  label: React.ReactElement;
  errorStatus: boolean;
  errorText: string;
}

export const TextArea: FC<TextAreaProps> = ({
  formik,
  id,
  label,
  errorStatus,
  errorText,
}) => (
  <>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      name={id}
      className="border p-2 mb-2"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.message}
    />
    {errorStatus && <div className="text-red-500">{errorText}</div>}
  </>
);
