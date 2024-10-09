import ProductCard from '../common/ProductCard';

const FeaturedProducts = () => {

    const products = [
        { image: '/product1.png', title: 'Peanut Butter Cookie', price: 25 },
        { image: '/product2.png', title: 'Organic Dog Food', price: 50 },
    ];

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl capitalize font-bold mb-8">Some Of Our Favourites To Care for their whole Health</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                    <ProductCard key={index} {...product} />
                ))}
            </div>
        </section>
    );
};

export default FeaturedProducts;
