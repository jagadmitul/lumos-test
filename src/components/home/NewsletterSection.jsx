const NewsletterSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">Stay Connected With Us.</h2>
                <p className="mt-4 text-lg">Choose your pet and subscribe! Receive exclusive discounts to always buy at the best price in Petshop.</p>
                <div className="mt-8 flex justify-center">
                    <input
                        type="email"
                        placeholder="Signup for Newsletter"
                        className="p-3 rounded-full"
                    />
                    <button className="bg-[#112025] text-white py-3 px-6 rounded-full">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
