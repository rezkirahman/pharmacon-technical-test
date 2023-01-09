import React from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineEmail } from 'react-icons/md'
import { BsQuestionCircle } from 'react-icons/bs'

export default function () {
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('/')
    }
    return (
        <>
            <nav className="bg-transparent border border-gray-200 px-2 py-4 shadow-md">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <button onClick={HandleClick}>
                        <img width={64} src="data:image/png;base64,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" alt="" />
                    </button>
                    <div className="flex justify-between gap-2">
                        <img width={24} src="https://cdn-icons-png.flaticon.com/512/15/15303.png" alt="" />
                        <span class="self-center text-xl font-semibold text-gray-500">Pusat Bantuan</span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export function NavsBarUser() {
    return (
        <>
            <div className=' fixed top-0 w-full bg-white flex justify-end items-center gap-6 py-4 px-6'>
                <BsQuestionCircle className='text-gray-500 text-xl' />
                <MdOutlineEmail className='text-gray-500 text-3xl' />
                <div className='relative flex justify-center items-center gap-2'>
                    <div className='h-[40px] w-[40px] bg-gray-400 rounded-full'></div>
                    <div className='font-bold text-gray-500'>
                        <div>
                            <text className='text-normal'>Roman Dimitri</text>
                        </div>
                        <div className='mt-[-6px]'>
                            <text className='text-sm'>owner</text>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}