import React from "react";

const Button = ({ text, onClick, disabled, color }: any) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`button flex justify-center items-center gap-2 border-2 hover:border-teansparent border-orangeDark bg-transparent hover:bg-orangeDark py-2 px-3 hover:text-white ${
        color ? color : "text-white"
      }`}
    >
      <span className="sm:text-base text-sm">{text}</span>
      <span className="button__icon-wrapper">
        <svg
          width="10"
          className="button__icon-svg"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="#ffffff"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          ></path>
        </svg>

        <svg
          className="button__icon-svg  button__icon-svg--copy"
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          fill="none"
          viewBox="0 0 14 15"
        >
          <path
            fill="#ffffff"
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default Button;
