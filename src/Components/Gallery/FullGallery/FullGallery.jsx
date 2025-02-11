import './FullGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { CloseFullscreen } from '@mui/icons-material/';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMediaQuery } from 'react-responsive';

export default function FullGallery({ urls, startInd }) {

    // let [fullScr1, setFullScr1] = useState(tt);
    let fGall = document.getElementsByClassName('full__gallery');

    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    let urlN = [];

    for (let i = startInd; i < urls.length; i++) {
        urlN.push(urls[i].img);
        if (i === (20)) {
            for (let k = 0; k < startInd; k++) {
                urlN.push(urls[k].img);
            }
        }
    }

    function closeF() {
        // if (fullScr1) {
        //     setFullScr1(false);
        //     // console.log(fGall);
        // }
        fGall[0].style.display = 'none';
    }

  return (
    <div
        className="full__gallery"
        // style={{
        //     display: fullScr1 ? 'flex' : 'none'
        // }}
    >

        <div
            className="gallery__ex"
            style={{
                width: isSmallScr && '100%',
                height: isSmallScr && '50vh'
            }}
        >

            <Swiper
                slidesPerView={ 1 }
                modules={[
                    Pagination,
                    Navigation
                ]}
                pagination={{
                    clickable: true
                }}
                navigation={ true }
                loop={ true }
                className={ 'swiper__ex' }
            >

                { urlN.map((val, ind) => {
                    return (
                        <SwiperSlide key={ ind } className={ 'swiper__slide' }>

                            <div
                                className="swiper__img"
                                style={{
                                    backgroundImage: `url('${ val }')`,
                                    backgroundPosition: 'center',
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }}
                            ></div>

                        </SwiperSlide>
                    )
                }) }

            </Swiper>

        </div>
        <div className="close__btnx" onClick={ closeF } title='Close Fullscreen'>

            <CloseFullscreen sx={{ color: 'white' }} />

        </div>

    </div>
  )
}
