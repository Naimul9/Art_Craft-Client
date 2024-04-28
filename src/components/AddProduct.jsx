

const AddProduct = () => {
    return (
        <div className="max-w-screen-xl mx-auto">


<h1 className="text-4xl text-center font-semibold mt-10">Add Your Craft </h1>


                 <form className="mt-10" >
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
                htmlFor="brand"
              >
                Sub_Category Name
              </label>
              <select
                name="brand"
                id="brand"
                className="w-full p-2 border rounded-md focus:outline-slate-400"
                type="text"
                placeholder="Select Brand"
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
                id="Price"
                name="price"
              />
              <label
                className="block mt-4 mb-2 "
                htmlFor="custom"
              >
               Customization
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-slate-400"
                type="text"
                placeholder="Customizable"
                id="custom"
                name="custom"
              />
              <label
                className="block mt-4 mb-2 "
                htmlFor="stock"
              >
                Stock Status
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-slate-400"
                type="text"
                placeholder="StockStatus"
                id="stock"
                name="stock"
              />

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
              <label className="block mb-2 mt-4 " htmlFor="type">
                Short Description
              </label>
              <input
                className="w-full p-2 border rounded-md focus:outline-slate-400"
                type="text"
                placeholder="Enter type"
                id="type"
                name="type"
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