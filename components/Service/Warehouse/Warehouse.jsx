import WH from '../../../assets/images/warehouse.jpg';
import Container from "../Container/Container";

export default function Warehouse() {
    return (
        <div className="warehouse">

            <Container
                img={ WH }
                head='Warehouse Services'
                txt="
                    Our logistics warehousing service offers secure, scalable, and efficient storage solutions tailored to your business needs. We provide comprehensive inventory management, order fulfillment, and distribution services, ensuring your products are handled with care and delivered on time. With state-of-the-art facilities and advanced technology, we optimize your supply chain, reduce costs, and enhance customer satisfaction. Let us handle your warehousing needs, so you can focus on growing your business.
                "
            />
            
        </div>
    )
}
