import Image from 'next/image';

const NewSection = () => {
    const products = [
        {
            image: '/hero.png',
            title: 'Homestead Turkey & Ancient Grains Dog Dry Food',
            discount: 20,
            price: '$15.99 - $40.99',
        },
        {
            image: '/hero.png',
            title: 'Elenco Dog Food',
            discount: 20,
            price: '$15.99 - $40.99',
        },
        {
            image: '/hero.png',
            title: 'Backcountry Raw Dog Food',
            discount: 20,
            price: '$15.99 - $40.99',
        },
        {
            image: '/hero.png',
            title: 'Homestead Turkey & Ancient Grains Dog Dry Food',
            price: '$15.99 - $40.99',
        },
        {
            image: '/hero.png',
            title: 'Homestead Turkey & Ancient Grains Dog Dry Food',
            price: '$15.99 - $40.99',
        },
    ];

    const benefits = [
        {
            icon: '/hero.png', // replace with the correct icon
            title: 'Fresh Product',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tristique ligula.',
        },
        {
            icon: '/hero.png', // replace with the correct icon
            title: 'Fast Shipping, Always',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tristique ligula.',
        },
        {
            icon: '/hero.png', // replace with the correct icon
            title: 'Flexible Delivery',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non tristique ligula.',
        },
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            {/* Category Banner Section */}
            <div className="flex justify-between items-center mb-10">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">Everything Your Pet Needs</h2>
                <p className="text-blue-500">View All Products →</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                <div className="relative group">
                    <Image src="/hero.png" alt="Dog" width={400} height={300} className="rounded-lg" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
                    <p className="absolute bottom-4 left-4 text-white text-xl font-bold">For Dogs & Dogs Lover</p>
                </div>
                <div className="relative group">
                    <Image src="/hero.png" alt="Cat" width={400} height={300} className="rounded-lg" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
                    <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Meow Meow</p>
                </div>
                <div className="relative group">
                    <Image src="/hero.png" alt="Bird" width={400} height={300} className="rounded-lg" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
                    <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Birds Lover</p>
                </div>
                <div className="relative group">
                    <Image src="/hero.png" alt="Accessories" width={400} height={300} className="rounded-lg" />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity"></div>
                    <p className="absolute bottom-4 left-4 text-white text-xl font-bold">Pet Accessories</p>
                </div>
            </div>

            {/* Best Selling Product Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Best Selling Product Of The Month</h2>
                <p className="text-blue-500">View All Products →</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
                {products.map((product, index) => (
                    <div key={index} className="p-4 bg-white shadow-lg rounded-lg">
                        <Image src={product.image} alt={product.title} width={200} height={200} className="mx-auto mb-4" />
                        <p className="text-gray-800 font-bold text-lg">{product.title}</p>
                        {product.discount && (
                            <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                                {product.discount}% OFF
                            </span>
                        )}
                        <p className="text-gray-600 text-sm">{product.price}</p>
                    </div>
                ))}
            </div>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg text-center">
                        <Image src={benefit.icon} alt={benefit.title} width={80} height={80} className="mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewSection;
