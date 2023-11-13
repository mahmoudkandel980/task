import React from "react";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

interface SingleLinkProps {
    content: string;
    to: string;
    icon: React.ReactNode;
    dropdown?: boolean;
}

const SingleLink = (props: SingleLinkProps) => {
    const { content, icon, to, dropdown } = props;

    return (
        <li>
            <Link
                to={to}
                className='flex items-center gap-0.5 sm:gap-1 text-sm sm:text-base'
            >
                <span>{icon}</span>
                <span>{content}</span>
                {dropdown && <IoIosArrowDown />}
            </Link>
        </li>
    );
};

export default SingleLink;
