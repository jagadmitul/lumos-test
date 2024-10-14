import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const HeroSection = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="w-full"
        >
            {/* First Slide */}
            <SwiperSlide>
                <section
                    className="bg-cover bg-center py-16 min-h-[700px] flex items-center"
                    style={{ backgroundImage: "url('/hero.png')" }}
                >
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                        {/* Text content */}
                        <div className="text-content max-w-lg">
                            <h1 className="text-5xl font-bold text-[#112025]">
                                The only thing you need is all here
                            </h1>
                            <p className="mt-4 text-lg text-[#4A5568]">
                                Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.
                            </p>
                            <button className="mt-8 uppercase bg-[#112025] text-white py-4 px-10 rounded-full hover:bg-[#195F6B] transition-all duration-300">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </section>
            </SwiperSlide>

            {/* Additional slides with different background images if needed */}
            <SwiperSlide>
                <section
                    className="bg-cover bg-center py-16 min-h-[700px] flex items-center"
                    style={{ backgroundImage: "url('/hero.png')" }}
                >
                    <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
                        {/* Text content */}
                        <div className="text-content max-w-lg">
                            <h1 className="text-5xl font-bold text-[#112025]">
                                The only thing you need is all here
                            </h1>
                            <p className="mt-4 text-lg text-[#4A5568]">
                                Sagittis in et purus euismod lorem nunc varius porta. Semper elit porttitor vestibulum, habitant duis arcu sit feugiat diam.
                            </p>
                            <button className="mt-8 uppercase bg-[#112025] text-white py-4 px-10 rounded-full hover:bg-[#195F6B] transition-all duration-300">
                                Shop Now
                            </button>
                        </div>
                    </div>
                </section>
            </SwiperSlide>
        </Swiper>
    );
};

export default HeroSection;
