import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";
import SingleArt from "./SingleArt";
import Art_Craft from "./Art_Craft";


const Home = () => {

    const craft = useLoaderData()

    return (
        <div>
            <h1 className="font-semibold text-6xl mt-3 bg-stone-200 text-center py-3">THE GALLERY</h1>
            <Slider></Slider>

            <div className="mt-10">
               <h1 className="font-semibold text-4xl text-white text-center bg-black py-5 "> CRAFT ITEMS</h1>

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
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">7500</p>
				<p className="capitalize">New customers</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
			
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">172%</p>
				<p className="capitalize">Growth</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
		<div className="flex p-4 space-x-4 rounded-lg md:space-x-6 bg-gray-500 text-gray-100">
			<div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-violet-400">
				
			</div>
			<div className="flex flex-col justify-center align-middle">
				<p className="text-3xl font-semibold leading-none">17%</p>
				<p className="capitalize">Bounce rate</p>
			</div>
		</div>
	</div>
</section>
       
        </section>

      

            </div>

        </div>
    );
};

export default Home;