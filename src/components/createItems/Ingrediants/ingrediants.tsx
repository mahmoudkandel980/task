import React, { useState } from "react";
import Model from "../../models/model";
import Backdrop from "../../shared/backdrop";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Input from "../../shared/input";
import SelectInput from "../../shared/selectInput";
import Button from "../../shared/button";
import AddMaterial from "./addMaterial";
import AddComponents from "./components/addComponents";

interface IngrediantsProps {
    label: string;
}

const Ingrediants = (props: IngrediantsProps) => {
    const [openModel, setOpenModel] = useState(false);
    const [ingrediants, setIngrediants] = useState([
        "Death valley",
        "Coconut jerk",
        "Honey garlic",
        "Lemon Pepper",
    ]);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    const deleteNoteHandler = (ingrediant: string) => {
        setIngrediants((prevState) =>
            prevState.filter((one) => one != ingrediant)
        );
    };

    return (
        <>
            <div className='flex flex-col gap-1'>
                <label className='font-[600] text-[13] text-grayText'>
                    {props.label}
                </label>
                <p className='w-full sm:min-h-12 px-4 py-2 border-[1px] outline-none border-gray rounded-md'>
                    {ingrediants.map((ingrediant) => (
                        <span className='text-[10px] font-[500] px-3 py-1 bg-main/30 capitalize mr-1 sm:mr-3'>
                            {ingrediant}
                        </span>
                    ))}
                </p>

                <button
                    onClick={toggleModelHandler}
                    className='text-main capitalize font-[400] py-2 w-36 border-[1px] rounded-md mt-5 border-main ml-auto'
                >
                    Add Ingrediants
                </button>
            </div>
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Add Notes' showModel={openModel}>
                <>
                    <div className='flex flex-col sm:grid grid-cols-2 mx-5 mt-12 gap-x-8 gap-y-5'>
                        <AddMaterial />
                        <Input
                            label='Quantity'
                            htmlFor='quantity'
                            type='number'
                            placeholder='Enter Notes...'
                            inputbtn='Add Mareial'
                            value={0}
                        />
                        <AddComponents />

                        <Input
                            label='Quantity'
                            htmlFor='quantity'
                            type='number'
                            placeholder='Enter Notes...'
                            inputbtn='Add Component'
                            value={0}
                        />
                    </div>

                    <div className='flex flex-col w-full justify-center items-center gap-8 mt-10'>
                        {ingrediants.length > 0 &&
                            ingrediants.map((ingrediant) => (
                                <div
                                    key={ingrediant}
                                    className='flex items-center w-60 justify-between'
                                >
                                    <span className='font-[500] text-[14px]'>
                                        {ingrediant}
                                    </span>
                                    <button
                                        className='text-delete'
                                        onClick={deleteNoteHandler.bind(
                                            null,
                                            ingrediant
                                        )}
                                    >
                                        <RiDeleteBin6Fill size={20} />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className='flex justify-center w-full mt-10'>
                        <Button
                            onClick={toggleModelHandler}
                            className='bg-main'
                        >
                            back
                        </Button>
                    </div>
                </>
            </Model>
        </>
    );
};

export default Ingrediants;
