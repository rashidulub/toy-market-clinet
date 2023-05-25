import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../../../assets/home/slide1.png'
import slider2 from '../../../assets/home/slide2.png'
import slider3 from '../../../assets/home/slide3.png'
import slider4 from '../../../assets/home/slide4.png'
import slider5 from '../../../assets/home/slide5.png'
import slider6 from '../../../assets/home/slide6.png'

const Banner = () => {
    return (
        <div>
            <div >
            <Carousel className='text-center '>
                <div>
                    <img src={slider1} />
                    <p  className="legend">Supper Car</p>
                </div>
                <div>
                    <img src={slider2} />
                    <p className="legend">Action Car</p>
                </div>
                <div>
                    <img src={slider3} />
                    <p className="legend">ecosport Car</p>
                </div>
                <div>
                    <img src={slider4} />
                    <p className="legend">Fire Car</p>
                </div>
                <div>
                    <img src={slider5} />
                    <p className="legend">Action Car</p>
                </div>
                <div>
                    <img src={slider6} />
                    <p className="legend">Fire Car</p>
                </div>
            </Carousel>
           
            </div>
            
        </div>
    );
};

export default Banner;