import './Service.css';
import plane from '../../images/plane-f1.jpg';
import ship from '../../images/ship-f.jpg';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function Service() {

    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })

    window.scrollTo({
        top: 0
    })

    document.title = 'Boblink Logistics | Freight Forwarding';

    return (
        <div
            className="service"
            style={{
                marginTop: isMobile && '9rem'
            }}
        >

            <h1
                style={{
                    fontSize: isMobile && '25px'
                }}
            >Freight Forwarding</h1>
            <div className="service__con">

                <div
                    className="air__freight"
                    style={{
                        width: isSmallScr && '95%',
                        flexDirection: isTablet && 'column',
                        gap: !isTablet && isSmallScr && '4rem'
                    }}
                >

                    <motion.div
                        className="img__con"
                        initial={{
                            x: '170%',
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        style={{
                            width: isTablet ?  '300px' : isSmallScr && '300px',
                            height: isTablet ?  '150px' : isSmallScr && '200px'
                        }}
                    >
                    
                        <img
                            src={ plane }
                            alt=""
                            style={{
                                clipPath: isTablet && 'none',
                                boxShadow: isTablet && '0 0 10px rgba(0, 0, 0, .3)'
                            }}
                        />
                        <div
                            className="dv"
                            style={{
                                display: isTablet && 'none'
                            }}
                        ></div>
                    
                    </motion.div>
                    <motion.div
                        className="freight__info"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        style={{
                            width: isMobile ? '100%' : isTablet ? '70%' : isSmallScr && '60%',
                            textAlign: isTablet && 'center'
                        }}
                    >

                        <h3>Air Freight</h3>
                        <p
                            style={{
                                fontSize: isSmallScr && '13px'
                            }}
                        >We operate with schedules on all of the world's key routes, working with carefully 
                    selected carriers, so you may plan with confidence and become more efficient. 
                    We provide a variety of extremely flexible goods that allow you to choose from a 
                    variety of delivery speeds to meet your needs.</p>

                    </motion.div>

                </div>
                <div
                    className="sea__freight"
                    style={{
                        width: isSmallScr && '95%',
                        flexDirection: isTablet && 'column',
                        gap: !isTablet && isSmallScr && '4rem'
                    }}
                >

                    <motion.div
                        className="img__con"
                        initial={{
                            x: '170%',
                            opacity: 0
                        }}
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        style={{
                            width: isTablet ?  '300px' : isSmallScr && '300px',
                            height: isTablet ?  '150px' : isSmallScr && '200px'
                        }}
                    >
                    
                        <img
                            src={ ship }
                            alt=""
                            style={{
                                clipPath: isTablet && 'none',
                                boxShadow: isTablet && '0 0 10px rgba(0, 0, 0, .3)'
                            }}
                        />
                        <div
                            className="dv"
                            style={{
                                display: isTablet && 'none'
                            }}
                        ></div>
                    
                    </motion.div>
                    <motion.div
                        className="freight__info"
                        initial={{
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1
                        }}
                        transition={{
                            duration: 2,
                            type: 'spring'
                        }}
                        style={{
                            width: isMobile ? '100%' : isTablet ? '70%' : isSmallScr && '60%',
                            textAlign: isTablet && 'center'
                        }}
                    >

                        <h3>Sea Freight</h3>
                        <p
                            style={{
                                fontSize: isSmallScr && '13px'
                            }}
                        >With our diverse product offering, we can provide a variety of equipment and consolidation 
                    services to ensure that your cargo arrives at the correct location, at the right time, 
                    and at a reasonable cost. We have prepared space protection from every major cargo port 
                    in the world in order to provide the highest level of reliability.</p>

                    </motion.div>

                </div>

            </div>

        </div>
    )
}
