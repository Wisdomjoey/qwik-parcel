import Container from "../Container/Container";
import dispatch from '../../../images/dispatch.jpg';
import "./Dispatch.css";

export default function Dispatch() {

    document.title = 'Boblink Logistics | Dispatch';

    return (
        <div className="dispatch">

            <Container
                img={ dispatch }
                head='Dispatch Services'
                txt="
                    Boblink World Wide Dispatch Service  will assist you in conserving your TIME. Cut the time 
                    it takes to process an item for delivery by skipping the lines at our experience centres. 
                    Our dispatch service allows your package to get to you quickly. We at Boblink know how 
                    sophisticated TRAFFIC problems can be in this part of the world and how Fast and Safe 
                    you need your package. That is why our dispatch riders are readily available at your 
                    service at your finger tip to get to your door-step.
                "
            />

        </div>
    )
}
