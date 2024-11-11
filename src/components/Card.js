import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Card.css'; // Import your custom CSS file

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className="card-container d-flex flex-wrap justify-content-center">
            {data.map(product => (
                <div key={product._id} className="card m-3" style={{ width: "18rem" }}>
                    <img src={product.img} className="card-img-top img-fixed" alt={product.name} />
                    <div className="card-body">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <div className='container w-10'>
                            <select
                                className='m-2 h-10 bg-success rounded'
                                onChange={(e) => handleSelectChange(product._id, e.target.value)}
                            >
                                <option value="">Select Quantity</option>
                                {Array.from(Array(6), (e, i) => (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>

                            <select
                                className='m-2 h-10 bg-success rounded '
                                onChange={(e) => handleSelectChange(product._id, e.target.value)}
                            >
                                <option value="">Select Size</option>
                                <option value="half">Half</option>
                                <option value="full">Full</option>
                            </select>

                            <div className='d-inline h-10 fs-5'>
                                Total Price: 
                                {selectedOptions[product._id] ? (
                                    product.options.find(option => option[Object.keys(option)[0]]).hasOwnProperty(selectedOptions[product._id]) ? (
                                        <span>{selectedOptions[product._id] === 'half' ? product.options[0].half : product.options[0].full} (for {selectedOptions[product._id]})</span>
                                    ) : (
                                        <span>Select Size</span>
                                    )
                                ) : (
                                    <span>Select Size</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
