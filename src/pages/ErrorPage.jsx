import { Link } from "react-router-dom";
import { FaReply } from "react-icons/fa"; // Icon panah melengkung yang mirip di desain

export default function ErrorPage({ kodeError, deskripsiError, gambarError }) {
    return (
        <div className="relative flex flex-col items-center justify-center w-full min-h-[85vh] bg-white rounded-3xl overflow-hidden shadow-sm">
            
            {/* Latar Belakang Gelombang Biru Muda (Custom SVG) */}
            <svg 
                className="absolute inset-0 w-full h-full object-cover z-0" 
                preserveAspectRatio="none" 
                viewBox="0 0 100 100" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Path ini membentuk gelombang di tengah seperti desain Figma */}
                <path 
                    d="M 15 0 C 40 40 5 60 25 100 L 75 100 C 95 60 60 40 85 0 Z" 
                    fill="#baddff" 
                    opacity="0.6"
                />
            </svg>

            {/* Konten Utama (Berada di atas background) */}
            <div className="relative z-10 flex flex-col items-center text-center">
                
                {/* Kode Error (Hitam, Sangat Tebal) */}
                <h1 className="text-5xl font-black text-black mb-2 tracking-wide">
                    {kodeError}
                </h1>
                
                {/* Deskripsi Error */}
                <p className="text-lg text-gray-800 font-medium mb-8">
                    {deskripsiError}
                </p>

                {/* Tempat Gambar */}
                {/* Nanti ganti 'src' dengan gambar yang sudah kamu download dari Figma */}
                <img 
                    src={gambarError} 
                    alt={`Error ${kodeError}`} 
                    className="w-96 max-w-full h-64 object-contain mb-10 drop-shadow-sm"
                />

                {/* Tombol Go Home (Garis luar hitam, kapsul putih) */}
                <Link 
                    to="/" 
                    className="flex items-center space-x-2 bg-white text-black px-6 py-2 rounded-full border-[1.5px] border-black font-semibold hover:bg-gray-50 transition-colors shadow-sm"
                >
                    <FaReply className="text-sm scale-x-[-1]" /> {/* Di-flip agar panahnya ke kiri */}
                    <span>Go Home</span>
                </Link>

            </div>
        </div>
    );
}