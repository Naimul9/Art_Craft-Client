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

      

            </div>

        </div>
    );
};

export default Home;