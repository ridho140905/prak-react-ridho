import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEye } from "react-icons/fa";
import PageHeader from "../components/Page.Header";
import { dataCustomers } from "../data/dummy"; // Import data JSON

export default function Customers() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <div id="customers-container" className="pb-10 relative">
            <PageHeader 
                title="Customer List" 
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button 
                    onClick={() => setIsFormOpen(true)}
                    className="bg-hijau text-white px-5 py-2 rounded-lg hover:bg-green-600 shadow-sm font-semibold transition-all"
                >
                    + Add Customer
                </button>
            </PageHeader>

            {/* TABEL DATA CUSTOMERS */}
            <div className="mx-5 p-6 bg-white rounded-2xl shadow-sm mt-4">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="text-gray-400 border-b border-gray-100">
                                <th className="pb-4 font-medium">Customer ID</th>
                                <th className="pb-4 font-medium">Customer Name</th>
                                <th className="pb-4 font-medium">Email</th>
                                <th className="pb-4 font-medium">Phone</th>
                                <th className="pb-4 font-medium">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {dataCustomers.map((cust, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="py-4 font-bold text-gray-700">{cust.customerId}</td>
                                    <td className="py-4 font-semibold text-gray-800">{cust.customerName}</td>
                                    <td className="py-4 text-gray-600">{cust.email}</td>
                                    <td className="py-4 text-gray-600">{cust.phone}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase ${
                                            cust.loyalty === 'Gold' ? 'bg-yellow-100 text-yellow-600' :
                                            cust.loyalty === 'Silver' ? 'bg-gray-200 text-gray-600' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                            {cust.loyalty}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* MODAL FORM ADD CUSTOMER */}
            {isFormOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-2xl">
                        <h2 className="text-xl font-bold mb-4">Add New Customer</h2>
                        <form className="flex flex-col space-y-3">
                            <input type="text" placeholder="Customer ID" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <input type="text" placeholder="Customer Name" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <input type="email" placeholder="Email Address" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <input type="tel" placeholder="Phone Number" className="border p-2 rounded-md outline-none focus:border-hijau" />
                            <select className="border p-2 rounded-md outline-none focus:border-hijau bg-white">
                                <option value="">Select Loyalty</option>
                                <option value="Bronze">Bronze</option>
                                <option value="Silver">Silver</option>
                                <option value="Gold">Gold</option>
                            </select>
                            
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