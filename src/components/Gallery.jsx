
import { Typewriter } from 'react-simple-typewriter';

const Gallery = () => {
  const handleType = (text = hello) => {
    
    console.log(text);
  };

  const handleDone = () => {
    console.log(`Typewriter animation completed!`);
  };

  return (
    <div>
    
      <section className="py-6">
        <h1 className="text-5xl text-center font-semibold bg-slate-100 py-5">OUR EXHIBITION</h1>

{/*  */}
<div style={{ paddingTop: '3rem', margin: 'auto 0',  fontWeight: 'normal', textAlign: 'center', fontSize :'30px' }}>
        VISIT OUR BEST {' '}
        <span style={{ color: 'orange', fontWeight: 'bold' }}>
          <Typewriter
            words={['ARTS', 'CRAFTS',]}
            loop={30}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onType={handleType}
            onLoopDone={handleDone}
          />
        </span>
      </div>

{/*  */}
        <div className="container flex flex-col justify-center p-4 mx-auto dark:bg-gray-100 mt-10">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {/* Replace image URLs with your own */}
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/GdHMwVf/pexels-alena-koval-233944-826114.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/sRb5kCF/pexels-tanaaz-khan-24036019-6725138.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/dBnQ2zv/pexels-apasaric-2948271.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/Gd2339H/pexels-niezam-16516.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/F80fJdd/pexels-mccutcheon-1212407.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/dfKxx7m/pexels-sankyrao90-716107.jpg" alt="Gallery Image" />
            <img className="object-cover w-full h-full aspect-square" src="https://i.ibb.co/M2WzghX/pexels-cristian-rojas-8066100.jpg" alt="Gallery Image" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
