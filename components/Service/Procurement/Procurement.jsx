import "./Procurement.css";
import JN from '../../../assets/images/jn.jpg';
import Container from "../Container/Container";

export default function Procurement() {
    return (
        <div className="procurement">

            <Container
                img={ JN }
                head='Procurement'
                txt="
                    Procurement in logistics is the sourcing of resources required to make things at their 
                    most basic level. To put it another way, this section of the supply chain is responsible 
                    for acquiring raw materials, replacement components, auxiliary supplies, operating 
                    supplies, and other goods required for the production process to run smoothly. We at 
                    Boblink World Wide Logistics can help you secure, pay and ship your desired 
                    packages from the source to your doorstep with ease.
                "
            />
            
        </div>
    )
}
