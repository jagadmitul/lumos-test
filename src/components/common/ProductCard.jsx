const ProductCard = ({ image, title, price }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <h3 className="mt-4 text-xl font-bold">{title}</h3>
            <p className="mt-2 text-lg">${price}</p>
            <button className="mt-4 bg-[#112025] text-white py-2 px-4 rounded-lg">Order Now</button>
        </div>
    );
};

export default ProductCard;
