import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import SingleArt from "./SingleArt";

import Gallery from "./Gallery";
import Review from "./Review";



const Home = () => {

    const craft = useLoaderData()

    return (
        <div>
            <h1 className="font-semibold text-6xl mt-3 bg-stone-200 text-center py-3">THE GALLERY</h1>
            <Slider></Slider>

            <div className="mt-10">
               <h1 className="font-semibold text-4xl text-white text-center bg-black py-5 ">ART & CRAFT ITEMS</h1>

               <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 gap-1 '>
            {
                craft.map(item=> <SingleArt item={item} key={item._id}>  </SingleArt>   )
            }
        </div>

        <section >
            <h1 className= " mt-10 font-semibold text-4xl text-white text-center bg-black py-5">
            Art & Craft Categories Section
            </h1>

            <section className="p-6 my-6">
	<div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Landscape <br /> Painting</p>
				
			</div>
		</div>
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Sculpture and <br />Modeling</p>
				
			</div>
		</div>
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Textile <br /> Arts</p>
				
			</div>
		</div>
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Paper Crafts <br /> & Glass Art
</p>
				
			</div>
		</div>
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Ceramics and <br /> Pottery
</p>
				
			</div>
		</div>
		<div className="text-center p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">Jute & <br /> Wooden Crafts</p>
				
			</div>
		</div>
		
	
	</div>
</section>
       
        </section>
  
      {/* Gallery section */}
<Gallery></Gallery>

{/* Review */}
      
<Review></Review>
            </div>

        </div>
    );
};

export default Home;