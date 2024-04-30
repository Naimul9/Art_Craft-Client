import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { key } from "localforage";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyArt_Craft = () => {
 const {user}= useContext(AuthContext)
 const [item, setItem] =useState([])

 const handleDelete =(_id)=>{
    console.log(_id);
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
        
        fetch(`http://localhost:5000/craft/${_id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(data=> {
             console.log(data)
             if(data.deletedCount>0){
  Swal.fire({
                title: "Deleted!",
                text: "Your At/Craft has been deleted.",
                icon: "success"
          });
          const remaining = item.filter(art => art._id !==_id)
          setItem(remaining)
             }
        })
        }
      });

 }

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
        <div key={p._id}>
<h1>
{p.name}
</h1>
<p>
    {p.price}
</p>
<Link to={`/updateCraft/${p._id}`}><button className="btn">Update</button></Link>
<button onClick={()=> handleDelete(p._id)} className="btn">delete</button>

        </div>
         ))
         }
        </div>
    );
};

export default MyArt_Craft;