import React, { useState } from "react";
import SelectInput from "../../shared/selectInput";
import Model from "../../models/model";
import Backdrop from "../../shared/backdrop";
import Input from "../../shared/input";
import Button from "../../shared/button";

import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const AddMaterial = () => {
    const [openModel, setOpenModel] = useState(false);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };
    return (
        <>
            <SelectInput
                label='Material'
                htmlFor='itemName'
                id=''
                onChange={() => {}}
                options={[{ value: "Select", text: "Select Material..." }]}
                value='Select'
                inputbtn='Add'
                onClick={toggleModelHandler}
            />

            <Model header='Add Material' showModel={openModel}>
                <>
                    <Input
                        label='Raw Material'
                        htmlFor='itemName'
                        type='text'
                        placeholder='Enter Raw Material ...'
                    />
                    <div className='mt-10'></div>
                    <SelectInput
                        label='Default Unit'
                        htmlFor='itemName'
                        id=''
                        onChange={() => {}}
                        options={[
                            {
                                value: "Select",
                                text: "Select Unit...",
                            },
                        ]}
                        value='Select'
                    />
                    <div className='mt-10'></div>
                    <Input
                        label='Minimum Order'
                        htmlFor='quantity'
                        type='number'
                        placeholder='Enter Number of Minimum Order ...'
                        value={0}
                    />
                    <div className='flex justify-center items-center gap-5'>
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
            {openModel && <Backdrop onClose={toggleModelHandler} />}
        </>
    );
};

export default AddMaterial;
