import React from "react";
import NavsBar from '../components/navsbar';
import { FaCloudUploadAlt, FaRegFileAlt } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

export default function PendaftaranPage() {
    const navigate = useNavigate()
    const HandleClick = () => {
        navigate('/register')
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
                        <text className="text-lg font-bold ml-6">Pedaftaran Sarana</text>
                    </div>
                    <div className="h-12 min-h-0 w-16" align="center">
                        <div className="bg-gray-300 min-h-full w-1"></div>
                    </div>
                    <div className="flex justify-start items-center">
                        <div className="bg-gray-300 rounded-full p-[16px]">
                            <FaRegFileAlt className="text-[36px] text-gray-400" />
                        </div>
                        <text className="text-lg font-bold ml-6 text-gray-400">Register</text>
                    </div>
                </div>
                <div className="w-[600px] rounded-xl border-2 border-gray-100 shadow-xl">
                    <div className="p-8 flex justify-center">
                        <div className="grow mr-6">
                            <p className="text-3xl font-bold text-gray-600 mb-6">Input Data Perusahaan</p>
                            <SelectOption name="bidang Usaha *" />
                            <Input name="Nama Perusahaan *" />
                            <Input name="NPWP Perusahaan *" />
                            <Input name="Alamat Sesuai NPWP *" />
                            <SelectOption name="Provinsi" />
                            <SelectOption name="Kota/Kabupaten*" />
                            <SelectOption name="Kecamatan" />
                            <Input name="Kode Pos *" />
                            <p className="text-lg font-semibold text-gray-500 mt-8 mb-3">Upload Kelengkapan Data</p>
                            <div className="rounded border-2 border-dashed border-gray-200">
                                <div className="p-2 bg-blue-300 rounded-t flex justify-start items-center">
                                    <FaRegFileAlt className="text-xl mr-1 text-white" />
                                    <span className="text-sm text-white">NIB *</span>
                                </div>
                                <div align="center" className="text-gray-600 h-[200px] mt-3">
                                    <FaCloudUploadAlt className="text-4xl" />
                                    <p className="font-medium text-sm">Unggah NIB Valid</p>
                                </div>
                            </div>
                            <button
                                className="mt-3 nline-flex justify-center rounded-md border border-transparent bg-orange-400 py-2 px-4 font-medium text-white w-full"
                                onClick={HandleClick}
                            >
                                Selanjutnya
                            </button>
                        </div>
                        <div className="relative min-h-full bg-gray-300 w-3 rounded-full">
                            <div className="absolute inline-block h-40 bg-blue-500 w-3 rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function SelectOption(props) {
    return (
        <div className="mt-3">
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-gray-500 focus:ring-gray-500 text-gray-500"
                    placeholder={props.name}
                />
                <div className="absolute inset-y-0 right-0 items-center">
                    <select name="" id="" className="border-transparent bg-transparent w-full rounded-md"></select>
                </div>
            </div>
        </div>
    )
}

function Input(props) {
    return (
        <div className="mt-3">
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    className="block w-full rounded-md border-gray-300 pl-4 pr-12 focus:border-gray-500 focus:ring-gray-500 text-gray-500"
                    placeholder={props.name}
                />
            </div>
        </div>
    )
}