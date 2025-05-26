import React from "react";

const Button = ({ onClick, text, className ,type}) => {
  return (
    <button
    type={type}
    onClick={onClick}
    className={`w-[230px] h-[60px] rounded-full cursor-pointer font-bold transition-all duration-300 ${className}`}>
      {text}
    </button>
  );
};

export default Button;
