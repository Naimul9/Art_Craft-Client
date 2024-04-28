import { useLoaderData } from "react-router-dom";
import Slider from "./Slider";

const Home = () => {

    const craft = useLoaderData()

    return (
        <div>
            <h1 className="font-semibold text-6xl mt-3 bg-stone-200 text-center py-3">THE GALLERY</h1>
            <Slider></Slider>

            <div className="mt-10">
               <h1 className="font-semibold text-4xl text-white text-center bg-black py-5 "> CRAFT ITEMS</h1>

<p> {craft.length} </p>
            </div>

        </div>
    );
};

export default Home;