import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEye } from "react-icons/fa";
import PageHeader from "../components/Page.Header";

export default function Orders() {
    return (
        <div id="dashboard-container" className="pb-10">
            {/* Isi breadcrumb pakai Array */}
            <PageHeader 
                title="Order List" 
                breadcrumb={["Dashboard", "Orders"]}
            >
                {/* Tombol ini otomatis jadi props 'children' */}
                <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Add Order
                </button>
            </PageHeader>
        </div>
    );
}