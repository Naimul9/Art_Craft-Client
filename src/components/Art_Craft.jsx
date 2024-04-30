
import { Link, useLoaderData } from "react-router-dom";

const Art_Craft = () => {
  const data = useLoaderData();

  return (
    <div className="overflow-x-auto ">
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        {/* Table Body */}
        <tbody>
          
          {data.map((item, index) => (
            <tr key={index}>
              
              <td>
                <div className="flex items-center lg:gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.stockStatus}</div>
                  </div>
                </div>
              </td>
              <td>
                
                <span className="badge badge-ghost badge-md">{item.price}</span>
              </td>
              <td>{item.sub_category}</td>
              <th>
                <Link to={`/view_detail/${item._id}`}><button className="btn btn-ghost btn-sm"> View Details</button></Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Art_Craft;
