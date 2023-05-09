import tw from "tailwind-styled-components";

const Button = tw.button`
  font-medium
  rounded-lg
  text-sm
  px-5
  py-2.5
  focus:outline-none
  focus:ring-4
  ${(props) => {
    switch (props.color) {
      case "green":
        return `
          text-white
          bg-green-700
          hover:bg-green-800
          focus:ring-green-300
          dark:bg-green-600
          dark:hover:bg-green-700
          dark:focus:ring-green-800
        `;
      case "red":
        return `
          text-white
          bg-red-700
          hover:bg-red-800
          focus:ring-red-300
          dark:bg-red-600
          dark:hover:bg-red-700
          dark:focus:ring-red-900
        `;
      case "yellow":
        return `
          text-white
          bg-yellow-400
          hover:bg-yellow-500
          focus:ring-yellow-300
          dark:focus:ring-yellow-900
        `;
      case "purple":
        return `
          text-white
          bg-purple-700
          hover:bg-purple-800
          focus:ring-purple-300
          dark:bg-purple-600
          dark:hover:bg-purple-700
          dark:focus:ring-purple-900
        `;
      case "gray":
        return `
          text-gray-900
          bg-white
          border
          border-gray-300
          hover:bg-gray-100
          focus:ring-gray-200
          dark:focus:ring-gray-700
          dark:bg-gray-800
          dark:text-gray-400
          dark:border-gray-600
          dark:hover:bg-gray-700
          dark:hover:border-gray-600
        `;
      default:
        return `
          text-white
          bg-blue-700
          hover:bg-blue-800
          focus:ring-blue-300
          dark:bg-blue-600
          dark:hover:bg-blue-700
          dark:focus:ring-blue-800
        `;
    }
  }}
`;

export default Button;
