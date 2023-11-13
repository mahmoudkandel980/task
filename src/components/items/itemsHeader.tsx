import { Link } from "react-router-dom";

const ItemsHeader = () => {
    return (
        <div className='flex items-center w-full justify-between'>
            <div className='flex items-center sm:gap-5 gap-1 w-full'>
                <select
                    name='cars'
                    id='cars'
                    className='border-[1px] border-gray sm:w-32 py-1 px-3 rounded-md'
                >
                    <option value='show'>show</option>
                </select>
                <input
                    placeholder='Search'
                    className='border-[1px] border-gray  py-1 px-2 sm:px-10 rounded-md'
                />
                <div className='flex-1 flex  justify-end items-center'>
                    <Link
                        to='create'
                        className='bg-main sm:py-1 py-2 px-2 h-full text-[10px] md:text-base sm:px-12 w-fit border-[1px] border-gray rounded-md text-white'
                    >
                        Add new item
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ItemsHeader;
