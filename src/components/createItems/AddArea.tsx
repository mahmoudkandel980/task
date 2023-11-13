import React, { useState } from "react";
import SelectInput from "../shared/selectInput";
import Model from "../models/model";
import Backdrop from "../shared/backdrop";
import Input from "../shared/input";
import Button from "../shared/button";

import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const AddArea = () => {
    const [openModel, setOpenModel] = useState(false);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    return (
        <>
            <SelectInput
                label='Prepare Area'
                htmlFor='prepareArea'
                id=''
                onChange={() => {}}
                options={[
                    {
                        value: "Select Prepare Area...",
                        text: "Select Prepare Area...",
                    },
                ]}
                value='Select Prepare Area...'
                onClick={toggleModelHandler}
                inputbtn='Add'
            />
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Add Area' showModel={openModel}>
                <>
                    <Input
                        // label='Item Name “Second Lang”'
                        htmlFor='itemName'
                        type='text'
                        placeholder='Enter Add Area ...'
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
        </>
    );
};

export default AddArea;
