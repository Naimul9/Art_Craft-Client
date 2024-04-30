import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewDetail = () => {
    const { id } = useParams(); // Get the ID parameter from the URL
    const [itemData, setItemData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:5000/craft/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch item details');
                }
                const data = await response.json();
                setItemData(data);
            } catch (error) {
                console.error('Error fetching item details:', error);
                // Handle error state or display error message
            }
        };

        fetchData(); // Call the fetchData function when the component mounts
    }, [id]); // Re-run the effect when 'id' changes (URL parameter)

    if (!itemData) {
        return <div>Loading...</div>; // Render loading indicator while fetching data
    }

    // Render detailed information of the item once data is fetched
    return (
        <div>
            <h1>Item Details - {id}</h1>
            <p>Name: {itemData.name}</p>
            <p>Category: {itemData.sub_category}</p>
            {/* Display other item details based on 'itemData' */}
        </div>
    );
};

export default ViewDetail;
