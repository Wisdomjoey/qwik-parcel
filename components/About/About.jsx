import './About.css';
import about from '../../assets/images/about_img01.png';
import { useMediaQuery } from 'react-responsive';

export default function About() {

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
        <div className='about' id='about'>

            <h1
                style={{
                    fontSize: isTablet && '28px',
                    marginBottom: isTablet && '3rem'
                }}
            >About Us</h1>
            <div
                className="about__con"
                style={{
                    justifyContent: isTablet && 'center',
                    padding: isTablet ? 0 : isSmallScr && '0 6%',
                    height: isTablet && '350px'
                }}
            >
            
                <img
                    src={about.src} alt=""
                    style={{
                        display: isTablet && 'none',
                        width: isSmallScr && '20%'
                    }}
                />
                <div
                    className="about__info"
                    style={{
                        width: isTablet && '95%',
                        height: isTablet && '300px'
                    }}
                >

                    <div className="ab__bg">

                        <p
                            style={{
                                width: isTablet && '85%',
                                fontSize: isTablet && '10px',
                                wordSpacing: isMobile && 0
                            }}
                        >
                            We at Qwik Parcel have mastered the act of Logistics over 
                            the years and built a long connection chain of partnership across the globe with our 
                            remarkable services .  We are offer  Air freight , Sea freight and Land freight services. 
                            To ensure proper and adequate delivery of goods and consignments, we deploy sophisticated 
                            and cutting-edge logistics tools. Our primary mission is to keep you happy, therefore you 
                            might call us a one-customer logistics firm with your satisfaction as the ultimate goal. 
                            We understand the importance of timely delivery, and we take great delight in it. 
                            We are the quickest cargo solution available.
                        </p>

                    </div>

                </div>
            
            </div>

        </div>
    )
}
