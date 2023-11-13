import React from "react";

const pages = [1, 2, 3, 4, 5];

import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";

interface SingleListItemProps {
    children: React.ReactNode | number;
}

const SingleListItem = (props: SingleListItemProps) => {
    return (
        <li
            className={`${
                props.children === 2
                    ? "bg-main text-white border-black"
                    : "text-grayText"
            } text-[13px] font-[400] w-6 h-6 flex items-center justify-center rounded-full border-[1px] border-transparent`}
        >
            {props.children}
        </li>
    );
};

const Pagination = () => {
    return (
        <ul className='flex justify-center items-center w-full gap-1 mt-10'>
            <SingleListItem>
                <MdOutlineKeyboardArrowLeft />
            </SingleListItem>
            {pages.map((page) => (
                <SingleListItem>{page}</SingleListItem>
            ))}
            <SingleListItem>
                <MdOutlineKeyboardArrowRight />
            </SingleListItem>
        </ul>
    );
};

export default Pagination;
