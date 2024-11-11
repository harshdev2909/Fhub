import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import './Card.css'; // Import your custom CSS file
import CartContext from '../context/CartContext';

function Card() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({}); // Track selected options

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/products'); // Adjust this URL as necessary
                console.log(response.data); // Log the data directly
                setData(response.data);
            } catch (err) {
                setError(err);
                console.error(err); // Log the error
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleSelectChange = (productId, value) => {
        setSelectedOptions(prev => ({
            ...prev,
            [productId]: value,
        }));
    };
   
    const handleAddToCart = () =>{

    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="card-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8 p-8">
    {data.map(product => (
        <div key={product._id} className="card bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
            <img src={product.img} className="w-full h-56 object-cover rounded-t-lg" alt={product.name} />
            <div className="card-body p-5">
                <h5 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h5>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>

                <div className="mt-4 space-y-4">
                    <div className="flex gap-4">
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => handleSelectChange(product._id, e.target.value)}
                        >
                            <option value="">Select Quantity</option>
                            {Array.from(Array(6), (e, i) => (
                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                            ))}
                        </select>

                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onChange={(e) => handleSelectChange(product._id, e.target.value)}
                        >
                            <option value="">Select Size</option>
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                    </div>

                    <div className="flex justify-between items-center text-lg font-semibold">
                        <div>
                            <p className='text-gray-800'>Total Price: </p>
                            {selectedOptions[product._id] ? (
                                product.options.find(option => option[Object.keys(option)[0]]).hasOwnProperty(selectedOptions[product._id]) ? (
                                    <span className="text-red-900">
                                        {selectedOptions[product._id] === 'half' ? product.options[0].half : product.options[0].full} (for {selectedOptions[product._id]})
                                    </span>
                                ) : (
                                    <span className="text-red-500">Select Size</span>
                                )
                            ) : (
                                <span className="text-red-500">Select Size</span>
                            )}
                        </div>

                        <button
                            className="px-6 py-2 bg-green-600 text-white font-bold rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors duration-300"
                            // onClick={() => handleAddToCart(product._id)}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>

    );
}

export default Card;
