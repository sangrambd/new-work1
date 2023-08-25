import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import img5 from '../../assets/img/img5.jpg'
import img6 from '../../assets/img/img6.jpg'

const Slider = () => {
    return (
       <div className="mx-auto w-2/3 h-1/3 mt-5">
        <h2 className="text-4xl text-center">Our Services</h2>
         <Carousel className="mt-3">
       
        <div>
            <img src={img1} alt="" />
            
        </div>
        <div>
            <img src={img2} alt="" />
            
        </div>
        <div>
            <img src={img3} alt="" />
            
        </div>
        <div>
            <img src={img4} alt="" />
            
        </div>
     
        <div>
            <img src={img5} alt="" />
            
        </div>
     
        <div>
            <img src={img6} alt="" />
            
        </div>
        
    </Carousel>
       </div>
    );
};

export default Slider;