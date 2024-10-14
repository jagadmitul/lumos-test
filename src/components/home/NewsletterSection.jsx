const NewsletterSection = () => {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">Stay Connected With Us.</h2>
                <p className="mt-4 text-lg">Choose your pet and subscribe! Receive exclusive discounts to always buy at the best price in Petshop.</p>
                <div className="mt-8">
                    <div className="flex justify-center space-x-4 mb-4">
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#112025]" />
                            <span className="ml-2">Dog</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#112025]" />
                            <span className="ml-2">Cat</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#112025]" />
                            <span className="ml-2">Small Pets</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#112025]" />
                            <span className="ml-2">Fish</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input type="checkbox" className="form-checkbox h-5 w-5 text-[#112025]" />
                            <span className="ml-2">Birds</span>
                        </label>
                    </div>
                    <div className="flex justify-center">
                        <input
                            type="email"
                            placeholder="Signup for Newsletter"
                            className="p-3 rounded-full w-1/2"
                        />
                        <button className="bg-[#112025] text-white py-3 px-6 rounded-full ml-4">
                            SUBMIT
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;
