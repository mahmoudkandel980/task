import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ModelProps {
    header: string;
    children: React.ReactNode;
    showModel: boolean;
}

const Model = (props: ModelProps) => {
    return (
        <AnimatePresence>
            {props.showModel && (
                <motion.div
                    className={`fixed z-50 bg-white w-[90vw] p-4 sm:p-8 px-2 sm:px-5 top-[50%] left-[50%] -translate-y-[25%] -translate-x-[50%] border-[1px] border-gray rounded-lg`}
                    initial={{
                        opacity: 0,
                        top: "0",
                    }}
                    animate={{
                        opacity: 1,
                        top: "200px",
                    }}
                    exit={{
                        opacity: 0,
                        top: "0",
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                >
                    <h1 className='font-[600] text-[15px]'>{props.header}</h1>
                    <div className='px-1 sm:px-2 pt-5'>
                        <div className='sm:mx-5 mt-12 gap-x-8 gap-y-5 relative overflow-y-scroll max-h-[50vh]'>
                            {props.children}
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Model;
