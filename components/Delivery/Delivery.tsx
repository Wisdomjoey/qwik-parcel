import d1 from "../../assets/images/d1.jpg";
import d2 from "../../assets/images/d2.jpg";
import d3 from "../../assets/images/d3.jpg";
import { useMediaQuery } from "react-responsive";
import "./Delivery.css";

export default function Delivery() {
  const data = [
    {
      img: d1,
      head: "Speedy Delivery",
      txt: "Delays can cripple a business. QwikParcel solves this by providing consistently fast and reliable delivery services, ensuring your shipments arrive when they're supposed to.",
    },
    {
      img: d2,
      head: "24/7 Support",
      txt: "Horizon Parcel Logistics offers 24/7 phone support, recognizing that our clients need constant and accessible communication.",
    },
    {
      img: d3,
      head: "Experience More",
      txt: "We specialize in global shipping, connecting you to markets worldwide. Our vast network and expert handling guarantee your goods reach international destinations efficiently and safely.",
    },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="delivery">
      <h1 style={{ fontSize: isMobile && "28px" }}>Cargo Delivery</h1>
      <div className="data__features">
        {data.map((val, ind) => (
          <div key={ind} className="feature">
            <img src={val.img.src} alt="Cargo Delivery" />
            <div className="feature__content">
                <h3>{val.head}</h3>
                <p>{val.txt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
