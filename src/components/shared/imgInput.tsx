import React from "react";

// icons
import { IoMdCloudUpload } from "react-icons/io";

interface ImageInputProps {
    cover_image: string;
    localImage: File | null;
    name?: string;
    accept?: string;
    id?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImgInput = (props: ImageInputProps) => {
    const { cover_image, localImage, name, onChange, accept, id } = props;

    return (
        <div className='mb-5 w-full relative mt-7 sm:h-full h-24'>
            {cover_image || localImage ? (
                <img
                    className='h-full w-full rounded-lg object-cover'
                    src={
                        localImage
                            ? window.URL.createObjectURL(localImage)
                            : cover_image
                    }
                    alt={`${name}_image`}
                />
            ) : (
                <span className='z-10 absolute top-0 left-0 h-full w-full rounded-lg border-[1px] border-gray'>
                    <label
                        htmlFor={id ? id : "cover_image"}
                        className='cursor-pointer'
                    ></label>
                </span>
            )}
            <span className='z-10 absolute top-0 left-0 h-full w-full rounded-lg border-[1px] border-gray'>
                <label
                    htmlFor={id ? id : "cover_image"}
                    className='cursor-pointer z-20 h-full text-grayText flex flex-col justify-center items-center'
                >
                    <IoMdCloudUpload size={35} />
                    <span className='text-[13] font-[500] text-center'>
                        Drop files here or click to upload.
                    </span>
                </label>

                <input
                    name={id ? id : "cover_image"}
                    className='hidden'
                    type='file'
                    id={id ? id : "cover_image"}
                    accept={accept ? accept : ".jpg,.png,.jpeg,.webp"}
                    multiple={false}
                    max='1'
                    onChange={onChange}
                />
            </span>
        </div>
    );
};

export default ImgInput;
