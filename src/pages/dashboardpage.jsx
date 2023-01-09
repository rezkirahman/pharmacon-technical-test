import { React, useState, useEffect } from 'react'
import SideBar from '../components/sidebar'
import { NavsBarUser } from '../components/navsbar'
import {
    BiDotsVerticalRounded,
    BiBarChart,
    BiBarChartSquare,
    BiDollar,
    BiUpArrowAlt
} from 'react-icons/bi'
import { FiArrowUpRight } from 'react-icons/fi'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Doughnut, Bar } from 'react-chartjs-2'

export default function DashboardPage() {
    return (
        <div className='bg-slate-100 min-h-screen w-full pb-6'>
            <NavsBarUser />
            <SideBar />
            <div className='pl-[424px] pt-[100px] mr-6'>
                <p className='text-2xl font-bold text-gray-600'>Order Statistic</p>
                <div className='mt-6 flex justify-start gap-8'>
                    <div className='flex justify-between items-center bg-white py-2 px-8 border-2 border-gray-200 rounded-xl w-64'>
                        <div className='font-bold text-gray-600'>
                            <p className='text-[12px]'>Total Selling</p>
                            <p className='text-xl mt-4'>890</p>
                        </div>
                        <div className='text-blue-500' align="center">
                            <BiUpArrowAlt className='text-xl' />
                            <p className='font-bold'>20,5%</p>
                        </div>
                    </div>
                    <div className='bg-white py-2 px-8 border-2 border-gray-200 rounded-xl w-64'>
                        <div className='font-bold text-gray-600'>
                            <p className='text-[12px]'>Expired inventory</p>
                            <p className='text-xl mt-4'>5</p>
                        </div>
                    </div>
                    <div className='bg-white py-2 px-8 border-2 border-gray-200 rounded-xl w-64'>
                        <div className='font-bold text-gray-600'>
                            <p className='text-[12px]'>Out of stock Inventory</p>
                            <p className='text-xl mt-4'>12</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6 flex gap-4'>
                    <div className='bg-white py-6 px-8 border-2 border-gray-200 rounded-xl w-3/4'>
                        <div className='flex justify-between items-center'>
                            <span className='text-2xl text-gray-500 font-bold'>Sales & Purchases</span>
                            <BiDotsVerticalRounded className='text-gray-400 text-3xl' />
                        </div>
                        <div className='flex items-center bg-slate-900 mx-auto w-16 p-1 rounded-lg' align='center'>
                            <FiArrowUpRight className='text-cyan-400 text-xl' />
                            <span className='font-bold text-white text-sm'>23,5%</span>
                        </div>
                        <div>
                            <ChartSales />
                        </div>
                    </div>


                    <div className='space-y-4 w-1/4'>
                        <div className='flex justify-between items-center bg-white py-6 px-4 border-2 border-gray-200 rounded-xl'>
                            <div>
                                <BiBarChart className='text-[60px] text-blue-500' />
                            </div>
                            <div align="right" className='font-bold text-gray-600'>
                                <div>
                                    <text>Total Transaksi</text>
                                </div>
                                <div className='mt-4'>
                                    <text className='text-xl'>Rp. 80.000.000</text>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center bg-white py-6 px-4 border-2 border-gray-200 rounded-xl'>
                            <div>
                                <BiBarChartSquare className='text-[60px] text-blue-500' />
                            </div>
                            <div align="right" className='font-bold text-gray-600'>
                                <div>
                                    <text>Sales</text>
                                </div>
                                <div className='mt-4'>
                                    <text className='text-xl'>289</text>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-between items-center bg-white py-6 px-4 border-2 border-gray-200 rounded-xl'>
                            <div>
                                <BiDollar className='text-[60px] text-blue-500' />
                            </div>
                            <div align="right" className='font-bold text-gray-600'>
                                <div>
                                    <text>Purchase</text>
                                </div>
                                <div className='mt-4'>
                                    <text className='text-xl'>289</text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between mt-6'>
                    <div className='bg-white py-6 px-4 border-2 border-gray-200 rounded-xl w-1/3'>
                        <div className='flex justify-between items-center'>
                            <text className='text-2xl text-gray-500 font-bold'>Inventory</text>
                            <BiDotsVerticalRounded className='text-gray-400 text-3xl' />
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>New Order</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold mx'>3</text>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>Prepare Order</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold'>5</text>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>Waiting Pickup</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold'>12</text>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>sent</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold'>9</text>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>Cancel</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold'>7</text>
                            </div>
                        </div>
                        <div className='flex justify-between items-center mt-3'>
                            <text className='font-medium text-gray-400'>Done</text>
                            <div className='py-1 w-[32px] rounded-lg bg-blue-200' align="center">
                                <text className='text-gray-500 font-bold'>5</text>
                            </div>
                        </div>
                    </div>

                    <div className='bg-white py-6 px-4 border-2 border-gray-200 rounded-xl w-1/3'>
                        <div>
                            <text className='text-xl text-gray-500 font-bold'>Persentase Penjualan Obat</text>
                        </div>
                        <div>
<ChartPenjualan/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function ChartSales() {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
            datasets: [
                {
                    label: "Whom'st let the dogs out",
                    data: [12, 55, 34, 120, 320],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },
            ],
        });
        setChartOptions({
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Whom'st let the dogs out",
                },
            },
        });
    }, []);

    return (
        <>
            <div>
                <Bar options={chartOptions} data={chartData} />
            </div>
        </>
    )
}

function ChartPenjualan() {
    const [chartData, setChartData] = useState({
        datasets: [],
    });

    useEffect(() => {
        setChartData({
            labels: ["Offline", "Alodoc", "Halodoc", "SehatQ", "GrabHealth", "Tokopedia", "Shopee"],
            datasets: [
                {
                    label: "Whom'st let the dogs out",
                    data: [12, 55, 34, 120, 320, 55, 20],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgba(53, 162, 235, 0.4)",
                },
            ],
        });
    }, []);

    return (
        <div>
            <Doughnut data={chartData} />
        </div>
    )
}
