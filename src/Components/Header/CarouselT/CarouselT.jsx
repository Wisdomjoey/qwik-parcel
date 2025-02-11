import './CarouselT.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
// import img1 from '../../../images/hero_ground.jpg';
// import img2 from '../../../images/freight_shipping.jpg';
// import img3 from '../../../images/plane.jpg';

export default function CarouselT() {

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    const stylesInfo1 = {
        width: '100%',
        alignItems: 'center',
        textAlign: 'center',
        top: '25%',
        left: '.05%'
    }
    const stylesInfo2 = {
        width: '80%'
    }

    const stylesHead1 = {
        fontSize: '33px'
    }
    const stylesHead2 = {
        fontSize: '50px'
    }

    const stylesPara = {
        fontSize: '10px'
    }

    const stylesBtn = {
        fontSize: '13px',
        paddingTop: '.4rem',
        paddingBottom: '.4rem',
        paddingLeft: '1.2rem',
        paddingRight: '1.2rem',
    }
    
    const vart = {
        hide: {
            opacity: 1
        },
        show: {
            opacity: 1,
            transition: {
                type: 'spring',
                staggerChildren: .8
            }
        }
    }

    const vart1 = {
        hide: {
            y: '-150%',
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    const vart2 = {
        hide: {
            x: '100%',
            opacity: 0
        },
        show: {
            x: 0,
            opacity: 1
        }
    }

    const vart3 = {
        hide: {
            y: '500%',
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    }

    return (
        <Carousel
            swipeable={ false }
            showArrows={ false }
            showStatus={ false }
            showThumbs={ false }
            showIndicators={ false }
            autoPlay={ true }
            infiniteLoop={ true }
            interval={ 10000 }
            stopOnHover={ false }
        >

            <div className='car__slides'>

                <Carousel
                    swipeable={ false }
                    showArrows={ false }
                    showStatus={ false }
                    showThumbs={ false }
                    showIndicators={ false }
                    autoPlay={ true }
                    infiniteLoop={ true }
                    interval={ 5000 }
                    stopOnHover={ false }
                >

                    <div className="car__slide1"></div>
                    <div className="car__slide2"></div>

                </Carousel>
                <motion.div
                    style={
                        isTablet ? stylesInfo1 : (isSmallScr && stylesInfo2)
                    }
                    className="slide__info"
                    variants={ vart }
                    initial='hide'
                    whileInView='show'
                >

                    <motion.h1
                        variants={ vart1 }
                        style={
                            isMobile ? stylesHead1 : (isTablet && stylesHead2)
                        }
                    >
                        Haulage Services
                    </motion.h1>
                    <motion.p
                        variants={ vart2 }
                        style={
                            isMobile && stylesPara
                        }
                    >
                        We have a fleet of our own vehicles and partner with agents on the continent to deliver great value for money for palletized shipping, full and part loads as well as same-day delivery whatever your transport requirements.
                    </motion.p>
                    <Link to='/support'>

                        <motion.button
                            variants={ vart3 }
                            style={
                                isMobile && stylesBtn
                            }
                            className='button'
                        >
                            <span className="str">Contact Us</span>
                        </motion.button>
                        
                    </Link>

                </motion.div>

            </div>
            <div className='car__slides'>

            <Carousel
                swipeable={ false }
                    showArrows={ false }
                    showStatus={ false }
                    showThumbs={ false }
                    showIndicators={ false }
                    autoPlay={ true }
                    infiniteLoop={ true }
                    interval={ 5000 }
                    stopOnHover={ false }
                >

                    <div className="car__slide3"></div>
                    <div className="car__slide4"></div>

                </Carousel>
                <motion.div
                    style={
                        isTablet ? stylesInfo1 : (isSmallScr && stylesInfo2)
                    }
                    className="slide__info"
                    variants={ vart }
                    initial='hide'
                    whileInView='show'
                >

                    <motion.h1
                        variants={ vart1 }
                        style={
                            isMobile ? stylesHead1 : (isTablet && stylesHead2)
                        }
                    >
                        Sea Freight
                    </motion.h1>
                    <motion.p
                        variants={ vart2 }
                        style={
                            isMobile && stylesPara
                        }
                    >
                        With our diverse product offering, we can provide a variety of equipment and consolidation services to ensure that your cargo arrives at the correct location, at the right time, and at a reasonable cost...
                    </motion.p>
                    <Link to='/support'>

                        <motion.button
                            variants={ vart3 }
                            style={
                                isMobile && stylesBtn
                            }
                            className='button'
                        >
                            <span className="str">Contact Us</span>
                        </motion.button>
                        
                    </Link>

                </motion.div>

            </div>
            <div className='car__slides'>

            <Carousel
                swipeable={ false }
                    showArrows={ false }
                    showStatus={ false }
                    showThumbs={ false }
                    showIndicators={ false }
                    autoPlay={ true }
                    infiniteLoop={ true }
                    interval={ 5000 }
                    stopOnHover={ false }
                >

                    <div className="car__slide5"></div>
                    <div className="car__slide6"></div>

                </Carousel>
                <motion.div
                    style={
                        isTablet ? stylesInfo1 : (isSmallScr && stylesInfo2)
                    }
                    className="slide__info"
                    variants={ vart }
                    initial='hide'
                    whileInView='show'
                >

                    <motion.h1
                        variants={ vart1 }
                        style={
                            isMobile ? stylesHead1 : (isTablet && stylesHead2)
                        }
                    >
                        Air Freight
                    </motion.h1>
                    <motion.p
                        variants={ vart2 }
                        style={
                            isMobile && stylesPara
                        }
                    >
                        We operate with schedules on all of the world's key routes, working with carefully selected carriers, so you may plan with confidence and become more efficient...
                    </motion.p>
                    <Link to='/support'>

                        <motion.button
                            variants={ vart3 }
                            style={
                                isMobile && stylesBtn
                            }
                            className='button'
                        >
                            <span className="str">Contact Us</span>
                        </motion.button>
                        
                    </Link>

                </motion.div>

            </div>

        </Carousel>
    )
}
