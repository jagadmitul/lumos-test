import { FaInstagram } from "react-icons/fa6";

const InstagramSection = () => {
    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Explore #Dubidoo</h2>
                <p className="text-center mt-2">Simply tag @pet.food in your caption on Instagram or Twitter to be featured on our website.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/hero.png" alt="Instagram Post 1" className="w-full" />
                        <div className="p-4">
                            <p className="text-sm">Simply tag @pet.food in your caption on Instagram or Twitter to be featured on our website.</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm">Instagram User</span>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/hero.png" alt="Instagram Post 2" className="w-full" />
                        <div className="p-4">
                            <p className="text-sm">Simply tag @pet.food in your caption on Instagram or Twitter to be featured on our website.</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm">Instagram User</span>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/hero.png" alt="Instagram Post 3" className="w-full" />
                        <div className="p-4">
                            <p className="text-sm">Simply tag @pet.food in your caption on Instagram or Twitter to be featured on our website.</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm">Instagram User</span>
                                <FaInstagram />
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="/hero.png" alt="Instagram Post 4" className="w-full" />
                        <div className="p-4">
                            <p className="text-sm">Simply tag @pet.food in your caption on Instagram or Twitter to be featured on our website.</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm">Instagram User</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
