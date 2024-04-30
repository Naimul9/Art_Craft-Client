import { Link } from "react-router-dom";



const SingleArt = ({item}) => {

const {
    image, 
    name, 
    sub_category,short_description,
    price, rating, 
    customization, 
    processing_time, 
    stockStatus, user_name, 
    user_email, _id} = item

    return (
        <div  >
        <section className="lg:h-[750px] h-[800px] mx-auto lg:w-[600px] border rounded-xl mt-8 relative bg-slate-100">
                <div className="container p-6 mx-auto ">

                    <div>
                        <article className="flex flex-col ">

                            <img alt="" className="object-fill h-[400px]  w-[550px] rounded-2xl" src={image} />

                          
                            <div className="flex flex-col flex-1 mt-8">

                             
                                    <p className="text-4xl text-center font-bold lg:h-24 h-32">{name}</p>
                           
                                <p className="text-3xl ">Category: {sub_category}</p>
                           
<div className="flex text-3xl mt-6 justify-between">
    <p>Price : {price}</p>
    <p>Rating : {rating}</p>
</div>

<Link to={`/view_detail/${_id}`}><button className="btn mt-8 bg-slate-400 btn-block">View Details</button></Link>
                               
                               
                            </div>
                        </article>

                    </div>
                </div>
            </section>
    </div>
    );
};

export default SingleArt;