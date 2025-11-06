import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper/core';
import { EffectCreative, EffectFade } from "swiper/modules";
import 'swiper/css';

function Carousel({autoplay, list, loop=true, effect = "creative"}){
    SwiperCore.use([Autoplay]);

    return(
        // <div className="carousel">     
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={loop}
                loopAdditionalSlides={2}
                autoplay={autoplay? {delay:2000} : false}
                modules={[EffectCreative, EffectFade]}
                effect={effect? effect : "creative"}
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
                    (content, index) => {
                        return <SwiperSlide key={content.key ?? index}>
                            <div className="carousel-container">
                                {content.val}
                            </div>
                        </SwiperSlide>    
                    }
                )
            }
            </Swiper>
        // </div>
    );
}

export default Carousel;