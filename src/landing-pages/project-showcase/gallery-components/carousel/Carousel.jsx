import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import SwiperCore from 'swiper/core';
import { EffectCards, EffectCoverflow, EffectCreative } from "swiper/modules";
import 'swiper/css';

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
                    delay: 2500
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
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src="src\\assets\\images\\SpeechTeach-logo.png"/>
                        <p className="project-title">SpeechTeach</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\Pathforging-Realms-img.png" />
                        <p className="project-title">Pathforging Realms</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\whisper-finetune-img.png" />
                        <p className="project-title">Fine-tuned Whisper</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\virtual-assistant-img.png" />
                        <p className="project-title">Social Media Virtual Assistant</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\signature-detection-img.png" />
                        <p className="project-title">Signature Forgery Detection</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\flexinote-img.png" />
                        <p className="project-title">Flexinote</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="carousel-container">
                        <img src = "src\assets\images\gold-mine-img.png" />
                        <p className="project-title">The Gold Mine</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Carousel;