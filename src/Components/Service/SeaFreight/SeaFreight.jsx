import "./SeaFreight.css";
import SeaF from '../../../images/loginbg.jpg';
import Container from "../Container/Container";

export default function SeaFreight() {

    window.scrollTo({
        top: 0
    })

    document.title = 'Boblink Logistics | Sea Freight';
    
    return (
        <div className="seaFreight">

            <Container
                img={ SeaF }
                head='Sea Freight'
                txt="
                    With our diverse product offering, we can provide a variety of equipment and consolidation 
                    services to ensure that your cargo arrives at the correct location, at the right time, 
                    and at a reasonable cost. We have prepared space protection from every major cargo port 
                    in the world in order to provide the highest level of reliability.
                "
            />
            
        </div>
    )
}
