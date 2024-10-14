import Image from "next/image";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer>
            <div className="container mx-auto px-4 py-4 flex flex-wrap justify-between">
                {/* Logo and Contact */}
                <div className="w-full md:w-1/3 mb-8">
                    <div>
                        <Image src="/logo.png" alt="Dubidoo" width={150} height={50} />
                    </div>
                    <p className="mt-4">© 2024 PetStore. All Rights Reserved.</p>
                    <p className="mt-4">Say hi@dubidoo.com</p>
                    <p>(251) 555-0102</p>
                </div>

                {/* Services */}
                <div className="w-full md:w-1/3 mb-8">
                    <h4 className="text-xl font-bold mb-4">Our Service</h4>
                    <ul>
                        <li>Track Order</li>
                        <li>Returns</li>
                        <li>Shipping Info</li>
                        <li>Certificates</li>
                    </ul>
                </div>

                {/* Pet Wise Food */}
                <div className="w-full md:w-1/3 mb-8">
                    <h4 className="text-xl font-bold mb-4">Pet Wise Food</h4>
                    <ul>
                        <li>Dog</li>
                        <li>Cat</li>
                        <li>Hamsters</li>
                        <li>Eagle</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="w-full md:w-1/3 mb-8">
                    <h4 className="text-xl font-bold mb-4">Social Media</h4>
                    <div className="flex space-x-4">
                        <FaFacebook />
                        <FaYoutube />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
            <div className="mt-8 bg-[#195F6B] text-white py-2 text-center text-sm">
                <a href="#">Privacy Policy</a>
                <span className="mx-4">|</span>
                <a href="#">T&C</a>
                <span className="mx-4">|</span>
                <a href="#">FAQ</a>
                <span className="mx-4">|</span>
                <a href="#">Return Policy</a>
            </div>
        </footer>
    );
};

export default Footer;
