import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEye } from "react-icons/fa";
import PageHeader from "../components/Page.Header";
import { dataOrders } from "../data/dummy"; // Import data JSON

export default function Orders() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div id="orders-container" className="pb-10 relative">
            <PageHeader 
                title="Order List" 
                breadcrumb={["Dashboard", "Orders"]}
            >
                {/* Saat diklik, state isFormOpen berubah jadi true */}
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-hijau text-white px-5 py-2 rounded-lg hover:bg-green-600 shadow-sm font-semibold transition-all"
                >
                    + Add Orders
                </button>
            </PageHeader>

            {/* TABEL DATA ORDERS */}
            <div className="mx-5 p-6 bg-white rounded-2xl shadow-sm mt-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-100">
                                <th className="pb-4 font-medium">Order ID</th>
                                <th className="pb-4 font-medium">Customer Name</th>
                                <th className="pb-4 font-medium">Status</th>
                                <th className="pb-4 font-medium">Total Price</th>
                                <th className="pb-4 font-medium">Order Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {dataOrders.map((order, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-4 font-bold text-gray-700">{order.orderId}</td>
                                    <td className="py-4 font-semibold text-gray-800">{order.customerName}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                                            order.status === 'Completed' ? 'bg-green-100 text-green-600' :
                                            order.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                                            'bg-red-100 text-red-600'
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-bold text-gray-900">{order.totalPrice}</td>
                                    <td className="py-4 text-gray-600">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL FORM ADD ORDER */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-bold mb-4">Add New Order</h2>
                        <form className="flex flex-col space-y-3">
                            <input type="text" placeholder="Order ID" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <input type="text" placeholder="Customer Name" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <select className="border p-2 rounded-md outline-none focus:border-hijau bg-white">
                                <option value="">Select Status</option>
                                <option value="Pending">Pending</option>
                                <option value="Completed">Completed</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                            <input type="text" placeholder="Total Price (Rp)" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <input type="date" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            
                            <div className="flex justify-end space-x-2 mt-4">
                                <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 text-gray-500 hover:bg-gray-100 rounded-md">Cancel</button>
                                <button type="button" onClick={() => setIsFormOpen(false)} className="px-4 py-2 bg-hijau text-white rounded-md hover:bg-green-600">Save Data</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}