import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from 'sweetalert2'


const AddProduct = () => {

    const { user } = useContext(AuthContext);
    const handleAddProduct = (e) => {
        e.preventDefault()
        console.log(user);
        const name = e.target.name.value
        const sub_category = e.target.sub_category.value
        const customization = e.target.custom.value
        const price = e.target.price.value
        const stock_status = e.target.stock.value
        const user_email = e.target.user_email.value
        const image = e.target.image.value
        const short_description = e.target.short_description.value
        const rating = e.target.rating.value
        const processing_time = e.target.time.value
        const user_name = e.target.user_name.value
        const email = user.email

        const info = {
            name, sub_category, customization, price, stock_status, user_email, image, short_description, rating, processing_time, user_name, email
        }

        console.log(info)

     fetch('http://localhost:5000/addCraft',{
        method: 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body : JSON.stringify(info)
     })
     .then(res=> res.json())
     .then(data=>{console.log(data);
    if(data.insertedId){
        Swal.fire({
            title: 'Success',
            text: 'Craft Added Successfully',
            icon: 'success',
            confirmButtonText: 'Done'
          })
    }
    
    })

    }









    return (
        <div className="max-w-screen-xl mx-auto">


            <h1 className="text-4xl text-center font-semibold mt-10">Add Your Craft </h1>


            <form onSubmit={handleAddProduct} className="mt-10" >
                <div className="flex gap-8 ">
                    <div className="flex-1">
                        <label className="block mb-2 " htmlFor="name">
                            Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Name"
                            id="name"
                            name="name"
                        />

                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="sub_category"
                        >
                            Sub_Category Name
                        </label>
                        <select
                            name="sub_category"
                            id="sub_category"
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Select Sub Category"
                        >
                            <option value="Test" selected>
                                Test
                            </option>
                            <option value="Test2" selected>
                                Test2
                            </option>
                            <option value="Test3" selected>
                                Test3
                            </option>
                        </select>

                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Enter Price"
                            id="price"
                            name="price"
                        />


                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="custom"
                        >
                            Customization
                        </label>
                        <select
                            name="custom"
                            id="custom"
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Select Sub Category"
                        >
                            <option value="Yes" selected>
                                Yes
                            </option>
                            <option value="No" selected>
                                No
                            </option>

                        </select>





                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="stock"
                        >
                           Stock Status
                        </label>
                        <select
                            name="stock"
                            id="stock"
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Stock Status"
                        >
                            <option value="In-Stock" selected>
                            In-Stock
                            </option>
                            <option value="Out-of-Stock" selected>
                            Out-of-Stock
                            </option>

                        </select>

                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="user_email"
                        >
                            User Email
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="User Email"
                            id="user_email"
                            name="user_email"
                        />
                    </div>


                    {/* Right side */}
                    <div className="flex-1">
                        <label className="block mb-2 " htmlFor="image">
                            Image
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Enter Image URL"
                            id="image"
                            name="image"
                        />
                        <label className="block mb-2 mt-4 " htmlFor="short_description">
                            Short Description
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Enter type"
                            id="short_description"
                            name="short_description"
                        />

                        <label
                            className="block mt-4 mb-2 "
                            htmlFor="rating"
                        >
                            Rating
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            maxLength={5}
                            max={5}
                            min={0}
                            type="number"
                            placeholder="Enter Rating"
                            id="rating"
                            name="rating"
                        />

                        <label className="block mb-2 mt-4 " htmlFor="time">
                            Processing Time
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="Enter type"
                            id="time"
                            name="time"
                        />

                        <label className="block mb-2 mt-4 " htmlFor="user_name">
                            User Name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:outline-slate-400"
                            type="text"
                            placeholder="User Name"
                            id="user_name"
                            name="user_name"
                        />

                    </div>
                </div>

                <input
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-slate-700 bg-slate-400 duration-200 text-white cursor-pointer font-semibold"
                    type="submit"
                    value="Add Product"
                />
            </form>
        </div>
    );
};

export default AddProduct;