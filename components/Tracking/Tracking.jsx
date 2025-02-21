import "./Tracking.css";
import bg from "../../assets/images/5229-min.jpg";
import { useMediaQuery } from "react-responsive";

export default function Tracking({ data, barcode }) {
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const formatDT = (date) => {
    return new Date(date).toLocaleString();
  };

  return (
    <div className="tracking__wrapper">
      <div className="tracking">
        {!isSmallScr && (
          <div className="left__track">
            <img src={bg.src} alt="" />
          </div>
        )}
        <div className="right__track">
          <div className="tracking__con">
            <h2 style={{ fontSize: isMobile && "28px" }}>Parcel</h2>
            <form
              action="https://www.track-trace.com/aircargo"
              target="_blank"
              method="post"
            >
              <input
                style={{
                  width: isMobile && "290px",
                  height: isMobile && "37px",
                }}
                type="text"
                name="number"
                placeholder="Enter Tracking ID..."
              />
              <input
                style={{
                  width: isMobile && "100px",
                  height: isMobile && "30px",
                  fontSize: isMobile && "16px",
                }}
                type="submit"
                name="commit"
                value="Track"
              />
            </form>
          </div>
          <small>
            Note: You'll be redirected to a third-party site, continue tracking
            there.
          </small>
          <a href="/">Go home</a>
        </div>
      </div>

      <div className="tracking__results">
        <h2 style={{ fontSize: isMobile ? "28px" : "32px" }}>
          Tracking Results
        </h2>

        <div className="tracking__bio">
          {barcode ?? <h3>JZ-OFRVNORROE5678-CARGO</h3>}
        </div>

        <div className="tracking__result">
          <div className="person__infos">
            <div className="person__info">
              <h2>Shipper Information</h2>

              <div className="information">
                <p>
                  <strong>Name:</strong> {data.shipper.name}
                </p>
                <p>
                  <strong>Email:</strong> {data.shipper.email}
                </p>
                <p>
                  <strong>Phone:</strong> {data.shipper.phone}
                </p>
                <p>
                  <strong>Address:</strong> {data.shipper.address}
                </p>
              </div>
            </div>

            <div className="person__info">
              <h2>Receiver Information</h2>

              <div className="information">
                <p>
                  <strong>Name:</strong> {data.shipper.name}
                </p>
                <p>
                  <strong>Email:</strong> {data.shipper.email}
                </p>
                <p>
                  <strong>Phone:</strong> {data.shipper.phone}
                </p>
                <p>
                  <strong>Address:</strong> {data.shipper.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="status__display">
          <p>Shipment Status - {data.status[data.status.length - 1].status}</p>
        </div>

        <div className="shipment__info">
          <h2>Shipment Information</h2>

          <div
            className="shipment__information"
            style={{
              gridTemplateColumns: isTablet
                ? "auto auto auto"
                : isMobile
                ? "auto auto"
                : "auto auto auto auto",
            }}
          >
            {[
              { label: "Shipment Type", value: data.shipment.type },
              { label: "Shipment Mode", value: data.shipment.mode },
              { label: "Total Packages", value: data.shipment.packages },
              { label: "Pacakges Weight", value: `${data.shipment.weight} kg` },
              { label: "Carrier", value: data.shipment.carrier },
              { label: "Courier", value: data.shipment.courier },
              { label: "Pickup Time", value: data.shipment.mode },
              { label: "", value: data.shipment.mode },
            ].map((info, ind) => (
              <div key={ind} className="info__piece">
                <strong>{info.label}</strong>

                <p>Type</p>
              </div>
            ))}
            <div className="info__piece">
              <strong></strong>

              <p>Time</p>
            </div>
            <div className="info__piece">
              <strong>Departure Time</strong>

              <p>Time</p>
            </div>
            <div className="info__piece">
              <strong>Origin</strong>

              <p>Otigin</p>
            </div>
            <div className="info__piece">
              <strong>Destination</strong>

              <p>Destination</p>
            </div>
            <div className="info__piece">
              <strong>Expected Delivery Date</strong>

              <p>Delivery</p>
            </div>
            <div className="info__piece">
              <strong>Comment</strong>

              <p>Comment</p>
            </div>
          </div>
        </div>

        <div className="packages__info">
          <h2>Packages</h2>

          <div className="packages__information">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Width (In)</th>
                  <th>Height (In)</th>
                  <th>Length (In)</th>
                  <th>Weight (Kg)</th>
                  <th>Description</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Carton</td>
                  <td>3</td>
                  <td>345</td>
                  <td>324</td>
                  <td>342</td>
                  <td>3423</td>
                  <td>Something</td>
                </tr>
                <tr>
                  <td>Carton</td>
                  <td>3</td>
                  <td>345</td>
                  <td>324</td>
                  <td>342</td>
                  <td>3423</td>
                  <td>Something</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="packages__info">
          <h2>Shipment Activity</h2>

          <div className="packages__information">
            <table>
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th>Remark</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Nigeria</td>
                  <td>23-45-34</td>
                  <td>23:43</td>
                  <td>In Transit</td>
                  <td>Something</td>
                </tr>
                <tr>
                  <td>Nigeria</td>
                  <td>23-45-34</td>
                  <td>23:43</td>
                  <td>In Transit</td>
                  <td>Something</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
