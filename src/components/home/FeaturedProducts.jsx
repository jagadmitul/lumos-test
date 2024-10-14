import Image from 'next/image';
import { useState } from 'react';

const categories = ['Cat', 'Dog', 'New Born', 'Fish', 'Birds'];

const FeaturedProducts = () => {
    const [activeCategory, setActiveCategory] = useState('Dog');

    const products = [
        {
            image: '/hero.png',
            title: 'Peanut Butter Cookies',
            description: 'Let\'s Create cookies for pets, with Chocolate Ingredients.',
            price: 25,
            buttonText: 'Order Now',
        },
        {
            image: '/hero.png',
            title: 'Made From The Real Chocolate Ingredient',
            price: 50,
            buttonText: 'Order Now',
        },
        {
            image: '/hero.png',
            title: 'Made From The Real Chocolate Ingredient',
            price: 50,
            buttonText: 'Order Now',
        },
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            {/* Category Toggle */}
            <h2 className="text-center uppercase text-lg text-gray-400 mb-2">
                Based On Veterinary Doctor's
            </h2>
            <h2 className="text-center text-3xl capitalize font-bold text-gray-800 mb-10">
                Some Of Our Favourites To Care For Their Whole Health
            </h2>

            <div className="flex justify-center items-center space-x-4 mb-8">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full border ${activeCategory === category ? 'bg-[#112025] text-white' : 'text-gray-700'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`p-6 bg-white shadow-lg rounded-lg`}
                    >
                        {/* Image */}
                        <div className="mb-4">
                            <Image src={product.image} alt={product.title} width={500} height={500} className="rounded-lg" />
                        </div>

                        {/* Product Info */}
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
                        {product.description && (
                            <p className="text-gray-600 mb-4">{product.description}</p>
                        )}
                        <div className="flex items-center justify-between">
                            {/* Order Button */}
                            <button className="bg-[#112025] text-white py-2 px-6 rounded-full hover:bg-[#0f454d] transition-all">
                                {product.buttonText}
                            </button>
                            {/* Price */}
                            <span className="text-lg font-bold text-gray-800">${product.price}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Dogs Do Speak Section */}
            <div className="bg-[#FDF5F2] py-16 rounded-lg relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        {/* Dog Food Package and Dogs */}
                        <div className="flex-shrink-0 relative w-1/2 md:w-1/3 mb-8 md:mb-0">
                            <Image
                                src="/hero.png" // Replace with actual path
                                alt="Premium Organic Dog Food"
                                width={400}
                                height={400}
                                className="mx-auto"
                            />
                            {/* Dog Images */}
                            <Image
                                src="/hero.png" // Replace with actual path
                                alt="Dog 1"
                                width={100}
                                height={100}
                                className="absolute -left-16 bottom-0"
                            />
                            <Image
                                src="/hero.png" // Replace with actual path
                                alt="Dog 2"
                                width={100}
                                height={100}
                                className="absolute -right-16 top-0"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="md:w-2/3">
                            <h2 className="text-4xl font-bold text-gray-800 mb-6">
                                Dogs do speak, but only to those who know how to listen.
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Sweet roll ice-cream powder candy canes ice cream donut pudding biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding fruitcake cheesecake jelly-o pie muffin topping cake.
                            </p>
                            <button className="bg-[#112025] text-white py-2 px-6 rounded-full hover:bg-[#0f454d] transition-all">
                                Explore Now
                            </button>
                        </div>
                    </div>
                </div>
                {/* Decorative Elements (Floating Food Bites) */}
                <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                    <Image src="/hero.png" alt="Floating Bites" width={500} height={500} className="opacity-20" />
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
