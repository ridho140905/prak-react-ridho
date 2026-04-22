import { useState } from "react";
import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaEye } from "react-icons/fa";
import PageHeader from "../components/Page.Header";

export default function Customers() {
    return (
        <div id="dashboard-container" className="pb-10">
            
            <PageHeader 
                title="Customer List" 
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button className="bg-hijau text-white px-4 py-2 rounded-lg hover:bg-green-600">
                    Add Order
                </button>
            </PageHeader>

        </div>
    );
}