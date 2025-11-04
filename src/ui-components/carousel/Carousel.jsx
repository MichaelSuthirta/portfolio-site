import "./Carousel.css";
import { ProjectList } from "../../project-maps/ProjectList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper/core';
import { EffectCreative } from "swiper/modules";
import 'swiper/css';
import { Link } from "react-router-dom";

function Carousel({autoplay, list}){
    SwiperCore.use([Autoplay]);

    return(
        <div class="carousel">     
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                loopAdditionalSlides={2}
                autoplay={autoplay? {delay:2000} : false}
                modules={[EffectCreative]}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        opacity:0.95,
                        translate:[-200,0,-5],
                        scale: 0.9,
                    },
                    next: {
                        translate:[200,0,-5],
                        opacity:0.95,
                        scale:0.9
                    },
                }}
            >
            {
                list.map(
                    (content) => {
                        return <SwiperSlide>
                            <div className="carousel-container">
                                {content.val}
                            </div>
                        </SwiperSlide>    
                    }
                )
            }
            </Swiper>
        </div>
    );
}

export default Carousel;