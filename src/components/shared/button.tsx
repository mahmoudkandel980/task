import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => {
    return (
        <button
            {...props}
            className={`w-fit text-white text-xs sm:text-base py-2 px-5 sm:px-10 mt-10 font-[400] text-[13] flex justify-center items-center gap-2 rounded-md ${props.className}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
