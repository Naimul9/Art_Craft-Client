


const SingleArt = ({item}) => {

const {
    image, 
    item_name, 
    subcategory_Name,short_description,
    price, rating, 
    customization, 
    processing_time, 
    stockStatus, user_name, 
    user_email} = item

    return (
        <div >
        <section className="h-[600px] mx-auto lg:w-[430px] border rounded-xl mt-8 relative">
                <div className="container p-6 mx-auto ">

                    <div>
                        <article className="flex flex-col ">

                            <img alt="" className="object-fill  h-[230px] w-[400px] rounded-2xl" src={image} />

                          
                            <div className="flex flex-col flex-1 mt-5">

                                <div className="flex gap-2 items-center">
                                    <p className="text-lg font-bold">Features:</p>
                                    <p className="w-[140px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium "></p>
                                    <p className="w-[140px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium"></p>
                                </div>

                                <h1 className="text-lg font-semibold mt-3 px-1 flex items-center gap-1"> Location : </h1>

                                <h3 className="flex-1 py-2 text-[20px] font-bold "></h3>
                                <p className="font-medium">  </p>


                                <div className="flex flex-wrap justify-between  text-black mt-4  font-medium">
                                    <span className="text-xl">Type : <span className="font-bold">  </span> </span>
                                    <p className="flex items-center justify-center gap-2  font-medium"> {price} </p>
                                </div>

                                <p className="mt-4 font-bold">Area :</p>
                               
                            </div>
                        </article>

                    </div>
                </div>
            </section>
    </div>
    );
};

export default SingleArt;