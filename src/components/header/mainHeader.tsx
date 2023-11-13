import React from "react";

import SingleLink from "./SingleLink";
import { AiOutlineHome, AiOutlineLayout } from "react-icons/ai";
import { PiCircle } from "react-icons/pi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { VscLayers } from "react-icons/vsc";
import { HiOutlineDocumentText } from "react-icons/hi";

const HEADER_LINKS = [
    { content: "products", to: "/items", icon: <AiOutlineHome /> },
    { content: "Purchase", to: "/purchase", icon: <PiCircle /> },
    {
        content: "Expenses",
        to: "/expenses",
        icon: <MdOutlineDashboardCustomize />,
    },
    {
        content: "Safe Transfer",
        to: "/safeTransfer",
        icon: <VscLayers />,
        dropdown: true,
    },
    {
        content: "End Shift",
        to: "/endShift",
        icon: <HiOutlineDocumentText />,
        dropdown: true,
    },
    {
        content: "Reports",
        to: "/reports",
        icon: <AiOutlineLayout />,
        dropdown: true,
    },
];

const MainHeader = () => {
    return (
        <nav>
            <ul className='flex items-center bg-main py-5 min-h-fit text-white sm:gap-14 gap-2 sm:pl-32 pl-2 flex-wrap'>
                {HEADER_LINKS.map((link, i) => (
                    <SingleLink key={i} {...link} />
                ))}
            </ul>
        </nav>
    );
};

export default MainHeader;
