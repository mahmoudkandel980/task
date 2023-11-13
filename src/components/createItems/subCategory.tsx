import { useState } from "react";
import Model from "../models/model";
import Backdrop from "../shared/backdrop";
import SelectInput from "../shared/selectInput";
import Input from "../shared/input";
import Button from "../shared/button";

import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const SubCategory = () => {
    const [openModel, setOpenModel] = useState(false);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    return (
        <>
            <SelectInput
                label='Sub Category'
                htmlFor='subCategory'
                id=''
                onChange={() => {}}
                options={[
                    {
                        value: "Select  Sub Category",
                        text: "Select  Sub Category",
                    },
                ]}
                value='Select  Sub Category'
                inputbtn='Add'
                onClick={toggleModelHandler}
            />
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Main Category' showModel={openModel}>
                <>
                    <SelectInput
                        htmlFor='subCategory'
                        id=''
                        onChange={() => {}}
                        options={[
                            {
                                value: "Select  Sub Category",
                                text: "Select  Sub Category",
                            },
                        ]}
                        value='Select  Sub Category'
                        onClick={toggleModelHandler}
                    />
                    <div className='mt-12'>
                        <Input
                            // label='Item Name “Second Lang”'
                            htmlFor='itemName'
                            type='text'
                            placeholder='Enter Sub Category ...'
                        />
                    </div>
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

export default SubCategory;
