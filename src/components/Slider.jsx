

const Slider = () => {
    return (
      <section className="q
       max-w-screen-2xl mt-16 mb-4 ">
          <div className="max-w-screen-xl mx-auto ">
         <div className="carousel rounded-2xl   ">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/0V0zg57/pexels-shahram-jahansooz-180917-5113153.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/TY4yyRt/pexels-dreamypixel-580151.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/fYRbZhG/pexels-navneet-shanu-202773-672630.jpg" className="w-full h-[600px]" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
       
      </div>
       </div>
      </section>
    );
};

export default Slider;