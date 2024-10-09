const Footer = () => {
    return (
        <footer className="bg-teal-800 text-white py-8">
            <div className="container mx-auto px-4 flex justify-between">
                <div>
                    <h3 className="text-xl font-bold">Dubidoo</h3>
                    <p>&copy; 2024 PetStore. All Rights Reserved.</p>
                </div>
                <div>
                    <h4>Follow us</h4>
                    <div className="flex space-x-4">
                        <span>Instagram</span>
                        <span>Facebook</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
