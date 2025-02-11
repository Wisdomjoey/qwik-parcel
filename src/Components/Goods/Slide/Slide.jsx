import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import'./Slide.css';
import { useMediaQuery } from 'react-responsive';

export default function Slide({ urls, dir, rd }) {

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    return (
        <div className="slide">

            <div className="slide__con" id={ dir }>

                <Swiper
                    spaceBetween={ 0 }
                    slidesPerView={ isMobile ? 2 : (isSmallScr ? 3 : 4) }
                    grabCursor={ true } modules={[ Autoplay ]}
                    autoplay={{ delay: 2000, reverseDirection: rd }}
                    loop
                    lazy
                >

                    { urls.map((val, ind) => {

                        return (
                            <SwiperSlide key={ ind }>

                                <div className="slide__imgs" key={ ind }>

                                    <div
                                        className="slide__img"
                                        style={{
                                            background: `url('${ val.url }')`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat',
                                            width: isMobile ? '150px' : (isTablet && '200px'),
                                            height: isMobile ? '100px' : (isTablet && '130px')
                                        }}
                                    ></div>
                                    <p>{ val.cap }</p>

                                </div>

                            </SwiperSlide>
                        )

                    }) }

                </Swiper>

            </div>

        </div>
    )
}
