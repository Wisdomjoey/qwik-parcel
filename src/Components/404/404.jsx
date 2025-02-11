import './404.css';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

export default function H404() {
    
	const isMobile = useMediaQuery({
        query: '(max-width: 480px)'
    })
    document.title = 'Boblink Logistics | 404';

    return (
        <div className="h404">

            <h3>404</h3>
            <h2
                style={{
                    fontSize: isMobile && 25
                }}
            >Page Not Found</h2>
            <Link to='/'>
                <p
                    style={{
                        fontSize: isMobile && 10
                    }}
                >Go back home</p>
            </Link>

        </div>
    )
}
