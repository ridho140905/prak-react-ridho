import { useState } from "react";
import { FaBell, FaSearch, FaTimes } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

import avatarImage from "../assets/windah.jpg";

export default function Header() {
    // State untuk mengontrol buka/tutup modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center p-4 relative">
            
            {/* Search Bar - Klik untuk buka modal */}
            <div id="search-bar" className="relative w-full max-w-lg">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search Here..."
                    readOnly
                    onClick={() => setIsModalOpen(true)}
                    className="border border-gray-100 p-2 pr-10 bg-white w-full max-w-lg rounded-md outline-none cursor-pointer hover:border-hijau transition-all"
                />
                <FaSearch id="search-icon" className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300" />
            </div>

            {/* MODAL SEARCH (Improvisasi 1) */}
            {isModalOpen && (
                <div id="search-modal-overlay" className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div id="search-modal-content" className="bg-white p-6 rounded-2xl w-full max-w-xl relative shadow-2xl animate-in fade-in zoom-in duration-200">
                        
                        {/* Tombol Tutup */}
                        <button 
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-merah transition-colors"
                        >
                            <FaTimes size={20} />
                        </button>

                        <h2 className="text-xl font-bold mb-4 text-teks">Pencarian Cepat</h2>
                        
                        <div className="relative">
                            <input 
                                autoFocus
                                type="text" 
                                placeholder="Ketik menu atau nama customer..."
                                className="w-full border-b-2 border-hijau p-3 text-lg outline-none focus:bg-gray-50"
                            />
                            <FaSearch className="absolute right-3 top-4 text-hijau" />
                        </div>

                        {/* Contoh Hasil Pencarian (DUMMY) */}
                        <div className="mt-5">
                            <p className="text-xs font-bold text-gray-400 uppercase mb-2">Sering Dicari:</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-hijau hover:text-white">Order #1234</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-hijau hover:text-white">Fikri Muhaffizh</span>
                                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-hijau hover:text-white">Revenue Report</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Icon & Profile Section */}
            <div id="icons-container" className="flex items-center space-x-4">
                
                {/* Icons */}
                <div id="notification-icon" className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer hover:scale-110 transition-transform">
                    <FaBell />
                    <span id="notification-badge" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 py-0.5 text-[10px] font-bold">
                        50
                    </span>
                </div>
                
                <div id="chart-icon" className="p-3 bg-blue-100 rounded-2xl cursor-pointer hover:scale-110 transition-transform">
                    <FcAreaChart />
                </div>
                
                <div id="settings-icon" className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer hover:scale-110 transition-transform">
                    <SlSettings />
                </div>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center space-x-4 border-l pl-4 border-gray-300">
                    <span id="profile-text" className="hidden md:block">
                        Hello, <b>Fikri Muhaffizh</b>
                    </span>
                    <img
                        id="profile-avatar"
                        src={avatarImage}
                        className="w-10 h-10 rounded-full object-cover border-2 border-hijau"
                        alt="Profile Avatar"
                    />
                </div>
                
            </div>
        </div>
    );
}