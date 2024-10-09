import Image from 'next/image';

const Header = () => {
    return (
        <header>
            <div className="bg-[#195F6B] text-white text-sm p-2 flex justify-center items-center">
                Free same-day delivery on orders $35+ when you order by 2PM.
            </div>
            <div className="p-4 flex justify-between items-center">
                <div className="logo">
                    <Image src="/logo.png" alt="Dubidoo" width={150} height={50} />
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li>Pets Food</li>
                        <li>Accessories</li>
                        <li>Search</li>
                    </ul>
                </nav>
                <div className="flex items-center">
                    <div>Cart</div>
                    <div>User</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
