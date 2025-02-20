import './Container.css';
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

export default function Container({ img, head, txt }) {

    const isTablet = useMediaQuery({
        query: '(max-width: 768px)'
    })
    
    return (
        <div className="container">

            <div
                className="bgSF"
                style={{
                    backgroundImage: `url('${ img.src }')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: isTablet && '50vh'
                }}
            >

                <motion.h1
                    initial={{
                        opacity: 0,
                        fontSize: 0
                    }}
                    whileInView={{
                        opacity: 1,
                        fontSize: isTablet ? '29px' : '60px'
                    }}
                    transition={{
                        duration: 2,
                        type: 'spring'
                    }}
                    style={{
                        marginBottom: isTablet && 0
                    }}
                >{ head }</motion.h1>
                { !isTablet && (
                    <div className="con__info">
                
                        <cite>
                            { txt }
                        </cite>
                    
                    </div>
                ) }

            </div>
            { isTablet && (
                <div className="con__info1">
                
                    <cite>
                        { txt }
                    </cite>
                
                </div>
            ) }

        </div>
    )
}
