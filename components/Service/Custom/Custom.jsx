import Container from '../Container/Container';
import custom from '../../../assets/images/custom.jpg';
import './Custom.css';

export default function Custom() {
  return (
    <div className='custom'>
        
			<Container
				img={ custom }
				head='Custom Clearance'
				txt="
					Customs clearance is one of the most difficult aspects of global commerce compliance. 
					This mainly entails preparing and submitting documents for shipments into or out of the 
					country. Customs clearance also verifies that the shipper has paid all duties and that 
					the shipment can cross the trading territory. Our customer brokerage experts 
					specialize in expediting your cargo through the supply chain as it enters the country 
					via any of the many Air, Ocean or  land entry points.

				"
			/>
        
    </div>
  )
}
