import React from "react";

interface SelectInputProps {
    htmlFor: string;
    label?: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; text: string }[];
    onClick?: () => void;
    inputbtn?: string;
}

const SelectInput = (props: SelectInputProps) => {
    const { id, value, htmlFor, label, onChange, options } = props;
    return (
        <div className='flex flex-col gap-1'>
            <label
                className='font-[600] text-[13] text-grayText'
                htmlFor={htmlFor}
            >
                {label}
            </label>
            <div className='flex'>
                <select
                    className={`w-full px-4 py-2 border-[1px] outline-none border-gray  ${
                        props.inputbtn ? "rounded-l-md" : "rounded-md"
                    }`}
                    id={id}
                    value={value}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
                {props.inputbtn ? (
                    <div className='w-32 relative'>
                        <button
                            onClick={props.onClick}
                            className='h-full w-full bg-main text-xs sm:text-base rounded-r-md text-white font-[400] text-[13px]'
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

export default SelectInput;
