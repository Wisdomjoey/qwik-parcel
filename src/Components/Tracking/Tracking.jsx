import './Tracking.css';
import bg from '../../images/5229-min.jpg';
import { useMediaQuery } from 'react-responsive';

export default function Tracking() {

    const isSmallScr = useMediaQuery({
        query: '(max-width: 1024px)'
    })
    const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })

    return (
        <div className='tracking'>
            { !isSmallScr && (
                <div className="left__track">
                    <img src={bg} alt="" />
                </div>
            ) }
            <div className="right__track">
                <div className="tracking__con">
                    <h2 style={{ fontSize: isMobile && '28px' }}>Parcel</h2>
                    <form action="https://www.track-trace.com/aircargo" target='_blank' method='post'>
                        <input style={{ width: isMobile && '290px', height: isMobile && '37px' }} type="text"  name='number' placeholder='Enter Tracking ID...' />
                        <input style={{ width: isMobile && '100px', height: isMobile && '30px', fontSize: isMobile && '16px' }} type="submit" name='commit' value='Track' />
                    </form>
                </div>
                <small>Note: You'll be redirected to a third-party site, continue tracking there.</small>
                <a href="/">Go home</a>
            </div>
        </div>
    )
}
