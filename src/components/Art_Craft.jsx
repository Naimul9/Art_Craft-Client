
import { Link, useLoaderData } from "react-router-dom";

const Art_Craft = () => {
  const data = useLoaderData();

  return (
    <div className="lg:overflow-x-auto w-2/4">
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
              <th></th>
              <td>
                <div className="flex items-center lg:gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name}</div>
                    <div className="text-sm opacity-50">{item.user_email}</div>
                  </div>
                </div>
              </td>
              <td>
                
                <span className="badge badge-ghost badge-md">{item.price}</span>
              </td>
              <td>{item.subcategory_Name}</td>
              <th>
                <Link to={'/view_detail'}><button className="btn btn-ghost btn-sm"> View Details</button></Link>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Art_Craft;
