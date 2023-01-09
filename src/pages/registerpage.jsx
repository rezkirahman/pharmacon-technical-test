import React from "react";
import NavsBar from '../components/navsbar';
import { FaCloudUploadAlt, FaRegFileAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const navigate = useNavigate()
    const HandleRegister = () => {
        navigate('/')
    }
    const HandleBack = () => {
        navigate('/pendaftaran')
    }
    return (
        <>
            <NavsBar />
            <div className="px-20 pt-6 pb-6 relative flex justify-between">
                <div className="pl-10 pt-10">
                    <div className="flex justify-start items-center">
                        <div className="bg-blue-500 rounded-full p-[16px]">
                            <MdLocationOn className="text-[36px] text-white" />
                        </div>
                        <text className="text-lg font-bold ml-6 text-gray-600">Pedaftaran Sarana</text>
                    </div>
                    <div className="h-12 min-h-0 w-16" align="center">
                        <div className="bg-blue-500 min-h-full w-1"></div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-blue-500 rounded-full p-[16px]">
                            <FaRegFileAlt className="text-[36px] text-white" />
                        </div>
                        <text className="text-lg font-bold ml-6 text-gray-600">Register</text>
                    </div>
                </div>
                <div className="w-[600px] rounded-xl border-2 border-gray-100 shadow-xl">
                    <div className="p-8">
                        <div>
                            <p className="text-3xl font-bold text-gray-600 mb-6">Register Akun OLIN</p>
                            <Input name="Email *" />
                            <Input name="Kata Sandi *" />
                            <Input name="Konfirmasi Kata Sandi *" />
                            <div className="mt-5 flex items-start items-center">
                                <div>
                                    <input id="ingatsaya" name="ingatsaya" type="checkbox" class="h-4 w-4 rounded border-gray-400 text-gray-600 focus:ring-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <label htmlFor="ingatsaya" className="font-medium text-gray-500 text-[12px]">
                                        Dengan membuat akun, Anda menyetujui <span className="text-orange-500">ketentuan Penggunaan dan Pemberitahuan Privasi</span> Aplikasi OLIN
                                    </label>
                                </div>
                            </div>
                            <div className="mt-5 flex justify-center gap-8">
                                <button
                                    className="nline-flex justify-center rounded-md border border-2 px-4 font-medium text-gray-400 w-full"
                                    onClick={HandleBack}
                                >
                                    Kembali
                                </button>
                                <button
                                    className="nline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 font-medium text-white w-full"
                                    onClick={HandleRegister}
                                    >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function Input(props) {
    return (
        <div className="mt-5">
            <div className="rounded-md shadow-md">
                <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-gray-500 focus:ring-gray-500 text-gray-500 font-semibold"
                    placeholder={props.name}
                />
            </div>
        </div>
    )
}

