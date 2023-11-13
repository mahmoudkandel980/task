import { useState } from "react";
import Model from "../models/model";
import Backdrop from "../shared/backdrop";
import SelectInput from "../shared/selectInput";
import Input from "../shared/input";
import Button from "../shared/button";

import { BsCheckCircle } from "react-icons/bs";
import { RxCrossCircled } from "react-icons/rx";

const MainCategory = () => {
    const [openModel, setOpenModel] = useState(false);

    const toggleModelHandler = () => {
        setOpenModel((prevState) => !prevState);
    };

    return (
        <>
            <SelectInput
                label='Main Category'
                htmlFor='itemName'
                id=''
                onChange={() => {}}
                options={[{ value: "Select", text: "Select" }]}
                value='Select'
                onClick={toggleModelHandler}
                inputbtn='Add'
            />
            {openModel && <Backdrop onClose={toggleModelHandler} />}
            <Model header='Main Category' showModel={openModel}>
                <>
                    <Input
                        // label='Item Name “Second Lang”'
                        htmlFor='itemName'
                        type='text'
                        placeholder='Enter Main Category ...'
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

export default MainCategory;
