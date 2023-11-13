import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string;
    label?: string;
    inputbtn?: string;
    onClick?: () => void;
}

const Input = (props: InputProps) => {
    return (
        <div className='flex flex-col gap-1'>
            <label
                className='font-[600] text-[13] text-grayText'
                htmlFor={props.htmlFor}
            >
                {props.label}
            </label>
            <div className='flex'>
                <input
                    className={`w-full px-4 py-2 border-[1px] outline-none border-gray ${
                        props.inputbtn ? "rounded-l-md" : "rounded-md"
                    }`}
                    {...props}
                />
                {props.inputbtn ? (
                    <div className='w-32 relative'>
                        <button
                            onClick={props.onClick}
                            className='h-full w-full text-xs sm:text-base bg-main rounded-r-md text-white font-[400] text-[13px]'
                        >
                            {props.inputbtn}
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default Input;
