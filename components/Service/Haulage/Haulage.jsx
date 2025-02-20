import "./Haulage.css";
import Haul from '../../../assets/images/haulage.jpg';
import Container from "../Container/Container";

export default function Haulage() {
    return (
        <div className="haulage">

            <Container
                img={ Haul }
                head='Haulage Services'
                txt="
                    We have a fleet of our own vehicles and partner with agents on the continent to 
                    deliver great value for money for palletized shipping, full and part loads as 
                    well as same-day delivery whatever your transport requirements. 
                    Our Road Freight Products range from typical services such as LTL 
                    (Less-than-Truck Load), PTL (Part) or FTL (Full-Truck Load) shipments 
                    to temperature-controlled and highly secure transports.
                "
            />
            
        </div>
    )
}
