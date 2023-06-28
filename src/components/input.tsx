import { observer } from "mobx-react-lite";
import { FC } from "react";

interface InputProps {
  formik;
  id: string;
  type?: string;
  label: React.ReactElement;
  errorStatus: boolean;
  errorText: string;
  onChange?: (data: any) => void;
}

export const Input: FC<InputProps> = observer(
  ({ formik, id, type = "text", label, errorStatus, errorText, onChange }) => {
    console.log(formik.values[id], 'formik.values[id]');
    
    return (
      <>
        <label htmlFor={id} className="mt-4 mb-2 text-gray-600">
          {label}
        </label>
        <input
          id={id}
          name={id}
          type={type}
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          onChange={onChange}
          onBlur={formik.handleBlur}
          value={formik.values[id]}
        />
        {errorStatus && <div className="text-red-500">{errorText}</div>}
      </>
    );
  }
);
