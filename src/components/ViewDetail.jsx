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
                
            }
        };

        fetchData(); 
    }, [id]);

    if (!itemData) {
        return <div>Loading...</div>; 
    }

  
    return (
        <section className="p-4 lg:p-8 dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto space-y-12">
		<div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
			<img src={itemData.image} alt="" className="h-80 dark:bg-gray-500 aspect-video" />
			<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-50">
				<span className="text-xs uppercase dark:text-gray-600">{itemData.sub_category}</span>
				<h3 className="text-3xl font-bold">{itemData.name}</h3>
				<p className="my-4 dark:text-gray-600">{itemData.short_description}</p>
				<div className=' lg:flex gap-36 dark:text-gray-600'>
                    <p>Price: {itemData.price}</p>
                    <p>Rating: {itemData.rating}</p>
                </div>
				<div className=' lg:flex gap-20 dark:text-gray-600 mt-5'>
                    <p>Customization: {itemData.customization}</p>
                    <p>Processing Time: {itemData.processing_time}</p>
                </div>
				<div className=' lg:flex gap-20 dark:text-gray-600 mt-5'>
                    <p>User Name: {itemData.user_name}</p>
                    <p>User Email: {itemData.user_email}</p>
                </div>
                
			</div>
		</div>
		
	</div>
</section>
    );
};

export default ViewDetail;
