import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEye } from "react-icons/fa";
import PageHeader from "../components/Page.Header";

export default function Dashboard() {
    // Data dummy untuk tabel improvisasi
    const recentOrders = [
        { id: "#12341", name: "Rizky Ridho", menu: "Ayam Bakar", status: "Delivered", price: "Rp 25.000" },
        { id: "#12342", name: "Siti Aminah", menu: "Nasi Goreng", status: "Pending", price: "Rp 15.000" },
        { id: "#12343", name: "Budi Santoso", menu: "Es Teh Manis", status: "Canceled", price: "Rp 5.000" },
    ];

    return (
        <div id="dashboard-container" className="pb-10">
            <PageHeader />

            {/* Grid Card (Bawaan Modul) */}
            <div id="dashboard-grid" className="p-5 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-4 border-b-4 border-green-500">
                    <div className="bg-green-500 rounded-full p-4 text-white shadow-lg shadow-green-100">
                        <FaShoppingCart className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">75</span>
                        <span className="text-gray-400 text-sm">Total Orders</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-4 border-b-4 border-blue-500">
                    <div className="bg-blue-500 rounded-full p-4 text-white shadow-lg shadow-blue-100">
                        <FaTruck className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">175</span>
                        <span className="text-gray-400 text-sm">Total Delivered</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-4 border-b-4 border-red-500">
                    <div className="bg-red-500 rounded-full p-4 text-white shadow-lg shadow-red-100">
                        <FaBan className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">40</span>
                        <span className="text-gray-400 text-sm">Total Canceled</span>
                    </div>
                </div>

                <div className="flex items-center space-x-5 bg-white rounded-xl shadow-sm p-4 border-b-4 border-yellow-400">
                    <div className="bg-yellow-400 rounded-full p-4 text-white shadow-lg shadow-yellow-100">
                        <FaDollarSign className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-bold text-teks">Rp.128</span>
                        <span className="text-gray-400 text-sm">Total Revenue</span>
                    </div>
                </div>
            </div>

            {/* IMPROVISASI 2: Tabel Pesanan Terbaru */}
            <div id="recent-orders-section" className="mx-5 mt-6 p-6 bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-bold text-teks">Recent Orders List</h3>
                    <button className="text-hijau font-semibold hover:underline text-sm">View All</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-100">
                                <th className="pb-4 font-medium">Order ID</th>
                                <th className="pb-4 font-medium">Customer</th>
                                <th className="pb-4 font-medium">Menu</th>
                                <th className="pb-4 font-medium">Status</th>
                                <th className="pb-4 font-medium">Price</th>
                                <th className="pb-4 font-medium">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentOrders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-4 font-bold text-gray-700">{order.id}</td>
                                    <td className="py-4">{order.name}</td>
                                    <td className="py-4 text-gray-500">{order.menu}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            order.status === 'Delivered' ? 'bg-green-100 text-green-600' :
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                                            'bg-red-100 text-red-600'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-semibold">{order.price}</td>
                                    <td className="py-4 text-hijau cursor-pointer hover:text-green-700">
                                        <FaEye />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}