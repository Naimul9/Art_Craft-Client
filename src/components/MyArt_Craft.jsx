import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyArt_Craft = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);
    const [filterValue, setFilterValue] = useState("All"); // State for filter value

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/craft/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your Art/Craft has been deleted.",
                            icon: "success"
                        });
                        const remaining = items.filter(art => art._id !== _id);
                        setItems(remaining);
                    }
                })
                .catch(error => {
                    console.error('Error deleting item:', error);
                });
            }
        });
    }

    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            })
            .catch(error => {
                console.error('Error fetching items:', error);
            });
    }, [user]);

  
    const filteredItems = items.filter(item => {
        if (filterValue === "All") {
            return true;
        } else {
            return item.customization === filterValue; 
        }
    });

    return (
        <div>
    
            <div className="flex justify-end mb-4">
                <select
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                    className="p-2 border border-gray-300 rounded"
                >
                    <option value="All">All</option>
                    <option value="Yes">Customizable</option>
                    <option value="No">Non-customizable</option>
                </select>
            </div>

         
            <div className="flex flex-wrap justify-center gap-4">
                {filteredItems.map(item => (
                    <div key={item._id} className="card">
                        <img className="card-image lg:h-[600px]" src={item.image} alt={item.name} />
                        <div className="card-content">
                            <p className="card-title">{item.name}</p>
                            <p className="card-info">Price: {item.price}</p>
                            <p className="card-info">Rating: {item.rating}</p>
                            <p className="card-info">Customization: {item.customization}</p>
                            <p className="card-info">Stock Status: {item.stockStatus}</p>
                            <div className="card-actions">
                                <Link to={`/updateCraft/${item._id}`} className="btn">Update</Link>
                                <button onClick={() => handleDelete(item._id)} className="btn">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyArt_Craft;
