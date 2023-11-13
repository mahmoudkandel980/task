import { BsCheckCircle } from "react-icons/bs";

import Input from "../components/shared/input";
import AddArea from "../components/createItems/AddArea";
import Note from "../components/createItems/note";
import Ingrediants from "../components/createItems/Ingrediants/ingrediants";
import ImgInput from "../components/shared/imgInput";
import Button from "../components/shared/button";
import MainCategory from "../components/createItems/mainCategory";
import SubCategory from "../components/createItems/subCategory";

const CreateItem = () => {
    return (
        <div className='mt-10 sm:mx-5'>
            <h1 className='font-[600] text-[15px]'>Add New Item</h1>
            <div className='flex flex-col sm:grid grid-cols-2 mx-1 sm:mx-5 mt-12 gap-x-8 gap-y-5'>
                <Input
                    label='Item Name “First Lang”'
                    htmlFor='itemName'
                    type='text'
                    placeholder='Enter Item “First Lang”'
                />
                <Input
                    label='Item Name “Second Lang”'
                    htmlFor='itemName'
                    type='text'
                    placeholder='Enter Item Name “Second Lang”'
                />
                <MainCategory />
                <SubCategory />
                <AddArea />
                <Input
                    label='Price'
                    htmlFor='Price'
                    type='text'
                    placeholder='0'
                />
                <Note label='Notes' />
                <ImgInput
                    cover_image={""}
                    name=''
                    localImage={null}
                    onChange={() => {}}
                />
                <Ingrediants label='Ingrediants' />
                <Button className='bg-edit col-span-2 ml-auto'>
                    <BsCheckCircle size={20} />
                    <span>save</span>
                </Button>
            </div>
        </div>
    );
};

export default CreateItem;
