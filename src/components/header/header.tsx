import svg from "../../assets/icons.svg";

import { IoIosNotificationsOutline, IoIosArrowDown } from "react-icons/io";

import MainHeader from "./mainHeader";

const Header = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex w-screen items-center justify-between px-2 sm:px-9 py-1 sm:py-3'>
                <img src={svg} className='w-14 h-14' alt='mySvgImage' />
                <div className='relative flex items-center gap-2'>
                    <span>
                        <IoIosNotificationsOutline size={23} />
                    </span>
                    <div className='flex items-center justify-center absolute w-3 h-3 bg-delete rounded-full top-0 left-3 text-[10px] text-center text-white'>
                        3
                    </div>
                    <img
                        className='w-8 h-8 rounded-full'
                        src='https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863'
                        alt=''
                    />
                    <div className='flex items-center gap-0.5 cursor-pointer'>
                        <span className='text-xs sm:text-base'>Henry</span>
                        <IoIosArrowDown size={12} />
                    </div>
                </div>
            </div>
            <MainHeader />
        </div>
    );
};

export default Header;
