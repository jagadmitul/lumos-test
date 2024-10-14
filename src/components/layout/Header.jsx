import Image from 'next/image';
import { FaSearch, FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa6';

const Header = () => {
    return (
        <header className="w-full z-50 fixed bg-white">
            {/* Top announcement bar */}
            <div className="bg-[#195F6B] text-white text-sm">
                <div className="container flex justify-center items-center w-full max-w-xxl py-2 px-5 mx-auto">
                    <span className="mx-10">&lt;</span>
                    Free same-day delivery on orders $35+ when you order by 2PM.
                    <span className="mx-10">&gt;</span>
                </div>
            </div>
            {/* Main header */}
            <div>
                <div className="container flex justify-between items-center py-4 w-full max-w-xxl px-5 mx-auto">
                    {/* Logo */}
                    <div className="flex justify-between items-center gap-10 logo">
                        <div>
                            <Image src="/logo.png" alt="Dubidoo" width={150} height={50} />
                        </div>
                        <div>
                            <nav>
                                <ul className="flex space-x-6">
                                    <li className="relative group">
                                        <button className="font-bold text-lg">Pets Food</button>
                                    </li>
                                    <li className="relative group">
                                        <button className="font-bold text-lg">Accessories</button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    {/* Navigation */}
                    {/* Icons */}
                    <div className="flex items-center space-x-4">
                        {/* Search */}
                        <div className="flex items-center bg-gray-100 p-2 rounded-lg">
                            <FaSearch className="text-gray-500" />
                            <input
                                type="text"
                                placeholder="Search For Product"
                                className="ml-2 bg-transparent outline-none"
                            />
                        </div>
                        {/* Favourites */}
                        <FaHeart className="text-gray-700 cursor-pointer" />
                        {/* User */}
                        <FaUserAlt className="text-gray-700 cursor-pointer" />
                        {/* Cart */}
                        <div className="relative">
                            <FaShoppingCart className="text-gray-700 cursor-pointer" />
                            <span className="absolute -top-2 -right-2 bg-[#F26E4B] text-white text-xs rounded-full px-1">
                                1
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
