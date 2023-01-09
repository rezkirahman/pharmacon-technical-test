import React from "react";
import NavsBar from '../components/navsbar';
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const navigate = useNavigate()

    const HandleRegiter = () => {
        navigate('/pendaftaran')
    }

    const HandleLogin = () => {
        navigate('/dashboard')
    }

    return (
        <div className="bg-sky-200 relative">
            <div className="w-full bg-sky-100 absolute min-h-[60%]"></div>
            <div className="relative">
                <NavsBar />
            </div>
            <div className="px-20 pt-6 pb-6 relative">
                <div className="flex justify-between place-items-center">
                    <div className="text-gray-500 px-20">
                        <p className="text-5xl font-bold">Selamat Datang di Solusi Perangkat Lunak Farmasi</p>
                        <p className="text-3xl mt-2">Sistem Manajemen Apotek Online</p>
                    </div>
                    <img src="https://www.pngplay.com/wp-content/uploads/7/Doctor-Nurse-PNG-Clipart-Background.png" alt="" />
                </div>
                <div>
                    <p className="text-center text-2xl font-medium text-gray-600">Silahkan masuk ke dalam akun anda dan kelola apotek Anda.</p>
                    <div className="w-1/4 mx-auto mt-3">
                        <div>
                            <label className="block font-semibold text-gray-500 text-lg">
                                EMAIL
                            </label>
                            <div className="relative mt-1 rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500 text-gray-500"
                                    placeholder="name@gmail.com"
                                />
                            </div>
                        </div>
                        <div className="mt-3">
                            <label className="block font-semibold text-gray-500 text-lg">
                                PASSWORD
                            </label>
                            <div className="relative mt- rounded-md shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <span className="text-gray-500 sm:text-sm">$</span>
                                </div>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-gray-500 focus:ring-gray-500 text-gray-500"
                                    placeholder="*****************"
                                />
                            </div>
                        </div>
                        <div className="mt-3 flex justify-between">
                            <div className="flex items-start items-center">
                                <div>
                                    <input id="ingatsaya" name="ingatsaya" type="checkbox" class="h-4 w-4 rounded border-gray-400 text-gray-600 focus:ring-gray-500" />
                                </div>
                                <div className="ml-3">
                                    <label htmlFor="ingatsaya" className="font-medium text-gray-500">
                                        Ingat saya
                                    </label>
                                </div>
                            </div>
                            <div>
                                <a href="#">
                                    <label className="font-medium text-gray-500 text-red-500">
                                        Lupa Password?
                                    </label>
                                </a>
                            </div>
                        </div>
                        <div className="mt-3">
                            <button
                                type="submit"
                                className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-sky-500 to-blue-500 py-2 px-4 font-medium text-white w-full"
                            onClick={HandleLogin}
                            >
                                Masuk
                            </button>
                        </div>
                        <div className="mt-3 text-center font-medium text-gray-500">
                            <p>
                                Belum registrasi? silahkan klik <button className="font-bold text-orange-500" onClick={HandleRegiter}>Daftar</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}