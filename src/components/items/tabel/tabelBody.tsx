import { useState } from "react";
import { TABEL_BODY_ITEMS } from "../../../data/items";

import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TabelBody = () => {
    const [items, setItems] = useState(TABEL_BODY_ITEMS);
    const deleteRowHandler = (id: number) => {
        setItems((prevState) => prevState.filter((one) => one.id !== id));
    };

    return (
        <tbody>
            {items.map((one) => (
                <tr key={one.id} className='h-16'>
                    <td className=''>
                        <img
                            className='w-9 h-9 rounded-full'
                            src={one.image}
                            alt={one.itemName}
                        />
                    </td>
                    <td className='font-[400] text-[13px]'>{one.name}</td>
                    <td className='font-[400] text-[13px]'>{one.itemName}</td>
                    <td className='font-[400] text-[13px]'>
                        {one.prepareArea}
                    </td>
                    <td className='font-[400] text-[13px]'>{one.category}</td>
                    <td className=''>
                        {one.notes.map((one, i) => (
                            <span
                                key={i}
                                className='capitalize px-2 ml-2 rounded-sm text-[10px] font-[500] bg-main/20'
                            >
                                {one}
                            </span>
                        ))}
                    </td>
                    <td className=''>
                        {one.ingrediants.map((one, i) => (
                            <span
                                key={i}
                                className='capitalize px-2 ml-2 rounded-sm text-[10px] font-[500] bg-main/20'
                            >
                                {one}
                            </span>
                        ))}
                    </td>
                    <td className='font-[400] text-[13px]'>{one.price}</td>
                    <td className=''>
                        <button className='text-edit'>
                            <CiEdit size={24} />
                        </button>
                        <button
                            onClick={deleteRowHandler.bind(null, one.id)}
                            className='ml-6 text-delete'
                        >
                            <RiDeleteBin6Fill size={24} />
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TabelBody;
