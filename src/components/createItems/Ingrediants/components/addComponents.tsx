import React, { useState } from "react";
import Model from "../../../models/model";
import Backdrop from "../../../shared/backdrop";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Input from "../../../shared/input";
import SelectInput from "../../../shared/selectInput";
import Button from "../../../shared/button";

import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";
import AddUnit from "./addUnit";

const AddComponents = () => {
    const [openModel, setOpenModel] = useState(false);
    const [components, setComponents] = useState([
        "Death valley",
        "Coconut jerk",
        "Honey garlic",
        "Lemon Pepper",
    ]);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    const deleteComponentHandler = (component: string) => {
        setComponents((prevState) =>
            prevState.filter((one) => one != component)
        );
    };

    return (
        <>
            <SelectInput
                label='Component'
                htmlFor='itemName'
                id=''
                onChange={() => {}}
                options={[
                    {
                        value: "Select",
                        text: "Select Component...",
                    },
                ]}
                value='Select'
                inputbtn='Add'
                onClick={toggleModelHandler}
            />
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Add Component' showModel={openModel}>
                <>
                    <div className='flex flex-col sm:grid grid-cols-2 mt-12 gap-x-8 gap-y-5'>
                        <Input
                            label='Component'
                            htmlFor='quantity'
                            type='text'
                            placeholder='Enter Component'
                            value={0}
                        />
                        <Input
                            label='Quantity'
                            htmlFor='quantity'
                            type='number'
                            placeholder='Enter Quantity Number...'
                            value={0}
                        />
                    </div>
                    <AddUnit />
                    <div className='flex flex-col sm:grid grid-cols-2 mt-12 gap-x-8 gap-y-5'>
                        <Input
                            label='Raw Material'
                            htmlFor='quantity'
                            type='text'
                            placeholder='Enter Component'
                            value={0}
                            inputbtn='Add'
                        />
                        <Input
                            label='Quantity'
                            htmlFor='quantity'
                            type='number'
                            placeholder='Enter Quantity Number...'
                            value={0}
                            inputbtn='Add Row'
                        />
                    </div>

                    <div className='flex flex-col w-full justify-center items-center gap-8 mt-10'>
                        {components.length > 0 &&
                            components.map((component) => (
                                <div
                                    key={component}
                                    className='flex items-center w-60 justify-between'
                                >
                                    <span className='font-[500] text-[14px]'>
                                        {component}
                                    </span>
                                    <button
                                        className='text-delete'
                                        onClick={deleteComponentHandler.bind(
                                            null,
                                            component
                                        )}
                                    >
                                        <RiDeleteBin6Fill size={20} />
                                    </button>
                                </div>
                            ))}
                    </div>
                    <div className='flex justify-center items-center mt-20 gap-5'>
                        <Button
                            onClick={toggleModelHandler}
                            className='bg-edit'
                        >
                            <BsCheckCircle size={20} />
                            <span>save</span>
                        </Button>
                        <Button
                            onClick={toggleModelHandler}
                            className='bg-delete'
                        >
                            <RxCrossCircled size={20} />
                            <span>cancel</span>
                        </Button>
                    </div>
                </>
            </Model>
        </>
    );
};

export default AddComponents;
