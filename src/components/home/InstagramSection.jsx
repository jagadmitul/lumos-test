const InstagramSection = () => {
    return (
        <section className="bg-gray-200 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Explore #Dubidoo</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                    <img src="/insta1.png" alt="Instagram Post 1" />
                    <img src="/insta2.png" alt="Instagram Post 2" />
                    <img src="/insta3.png" alt="Instagram Post 3" />
                    <img src="/insta4.png" alt="Instagram Post 4" />
                </div>
            </div>
        </section>
    );
};

export default InstagramSection;
