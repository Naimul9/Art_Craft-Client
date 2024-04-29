import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { key } from "localforage";
import { Link } from "react-router-dom";


const MyArt_Craft = () => {
 const {user}= useContext(AuthContext)
 const [item, setItem] =useState([])

useEffect(()=>{
    fetch(`http://localhost:5000/myProduct/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setItem(data)
    })
}, [user])

    return (
        <div>
         {
         item.map(p => (
        <div>
<h1>
{p.item_name}
</h1>
<p>
    {p.price}
</p>
<Link to={`/updateCraft/${p._id}`}><button className="btn">Update</button></Link>
<button className="btn">delete</button>

        </div>
         ))
         }
        </div>
    );
};

export default MyArt_Craft;