import {
  ArrowForward,
  DocumentScanner,
  FlightTakeoff,
  LocalShipping,
  TwoWheeler,
} from "@mui/icons-material";
import "./Services.css";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const service = [
  {
    head: "Freight Forwarding",
    cap: "At Qwik Parcel, we provide our customers with Freight forwarding to arrival airport or door to door delivery - Fast, efficient and reliable chain - Cargo pickup - Direct airline and express services for more urgent consignment.",
    link: "/services/forwarding",
  },
  {
    head: "Haulage Services",
    cap: "Qwik Parcel's haulage services aims to provide value for money in a rather unsexy element of your business' transport. We have a fleet of our own vehicles and partner with agents on the continent to deliver great value for money for palletized shipping, full and part loads as well as same day delivery.",
    link: "/services/haulage",
  },
  {
    head: "Custom Clearance",
    cap: "We offer an array of cargo transportation and value-added services, including custom clearance and regulatory compliance assistance to expedite your international supply chain. Our Customs brokerage experts specialize in expediting your cargo through the supply chain as t enters the country via any of the many air, ocean or land entry points.",
    link: "/services/custom-clearance",
  },
  {
    head: "Dispatch Services",
    cap: "At Qwik Parcel, our approach to courier services is unique. Our Courier partnership offer a cost effective, reliable, timeable courier service, baced up by the latest computer technology and online parcel track and trace facilities, making Qwik Parcel Couriers the ideal choice for small to medium sized businesses",
    link: "/services/dispatch",
  },
];

export default function Services() {
  function icon(indx, color, sz) {
    switch (indx) {
      case 0:
        return (
          <>
            <FlightTakeoff sx={{ color: color, fontSize: sz }} />
          </>
        );

      case 1:
        return (
          <>
            <LocalShipping sx={{ color: color, fontSize: sz }} />
          </>
        );

      case 2:
        return (
          <>
            <DocumentScanner sx={{ color: color, fontSize: sz }} />
          </>
        );

      case 3:
        return (
          <>
            <TwoWheeler sx={{ color: color, fontSize: sz }} />
          </>
        );

      default:
        break;
    }
  }

  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div
      className="services"
      id="services"
      style={{
        padding: isMobile && "1rem 0",
      }}
    >
      <h1 style={{ fontSize: isMobile && "28px" }}>
        Services <span>We Offer</span>
      </h1>
      {isSmallScr ? (
        <div className="services__sx">
          {service.map((val, ind) => {
            return (
              <div className="services__card" key={ind}>
                <div className="content__sx">
                  {icon(ind, "rgb(var(--primary-color))", 35)}
                  <h1>{val.head}</h1>
                  <div className="para__sx">
                    <p>{val.cap}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="services__bg">
          {service.map((val, ind) => {
            return (
              <div className="service__card" key={ind}>
                <div className="content">
                  {icon(ind, "lightgray", 40)}
                  <h1>{val.head}</h1>
                  <div className="para">
                    <p>{val.cap}</p>
                  </div>
                </div>
                <Link href={val.link}>
                  <div className="arrow__con">
                    <div className="arrow">
                      <ArrowForward
                        sx={{
                          color: "white",
                          fontSize: 25,
                        }}
                      />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
