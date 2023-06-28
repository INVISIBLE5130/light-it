import { Text } from "./text";

export const Button = () => (
  <button
    type="submit"
    className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
  >
    <Text textKey="submitButton" common />
  </button>
);
