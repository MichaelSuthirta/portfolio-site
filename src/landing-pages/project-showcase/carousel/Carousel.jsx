import "./Carousel.css";
import { ProjectList } from "../../../project-maps/ProjectList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper/core';
import { EffectCreative } from "swiper/modules";
import 'swiper/css';
import { Link } from "react-router-dom";

function Carousel(){
    SwiperCore.use([Autoplay]);

    return(
        <div class="carousel">     
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                loopAdditionalSlides={2}
                autoplay={{
                    delay: 2000
                }}
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
                ProjectList.map(
                    (project) => {
                        return <SwiperSlide>
                            <Link to={{pathname: "/detail"}}>
                                <div className="carousel-container">
                                    <img src={project.mainImgUrl}/>
                                    <p className="project-title">{project.title}</p>
                                </div>
                            </Link>
                        </SwiperSlide>    
                    }
                )
            }
            </Swiper>
        </div>
    );
}

export default Carousel;