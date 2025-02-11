import "./AirFreight.css";
import Airfreight from '../../../images/airfreight.jpg';
import Container from "../Container/Container";

export default function AirFreight() {

    window.scrollTo({
        top: 0
    })

    document.title = 'Boblink Logistics | Air Freight';
    
    return (
        <div className="airFreight">

            <Container
                img={ Airfreight }
                head='Air Freight'
                txt="
                    We operate with schedules on all of the world's key routes, working with carefully 
                    selected carriers, so you may plan with confidence and become more efficient. 
                    We provide a variety of extremely flexible goods that allow you to choose from a 
                    variety of delivery speeds to meet your needs.
                "
            />

        </div>
    )
}
