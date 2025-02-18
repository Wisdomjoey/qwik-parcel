import "./Tracking.css";
import bg from "../../images/5229-min.jpg";
import { useMediaQuery } from "react-responsive";

export default function Tracking() {
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="tracking__wrapper">
      <div className="tracking">
        {!isSmallScr && (
          <div className="left__track">
            <img src={bg} alt="" />
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

        <div className="tracking__result">
          <div className="person__infos">
            <div className="person__info">
              <h2>Shipper Information</h2>

              <div className="information">
                <p>
                  <strong>Name:</strong> Jonathan Wisdom
                </p>
                <p>
                  <strong>Email:</strong> joeboywizz@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +2348029494195
                </p>
                <p>
                  <strong>Address:</strong> Some Address Here
                </p>
              </div>
            </div>

            <div className="person__info">
              <h2>Receiver Information</h2>

              <div className="information">
                <p>
                  <strong>Name:</strong> Jonathan Wisdom
                </p>
                <p>
                  <strong>Email:</strong> joeboywizz@gmail.com
                </p>
                <p>
                  <strong>Phone:</strong> +2348029494195
                </p>
                <p>
                  <strong>Address:</strong> Some Address Here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="status__display">
          <p>Shipment Status - In Transit</p>
        </div>

        <div className="shipment__info">
          <h2>Shipment Information</h2>

          <div className="shipment__information">
            <div className="info__piece">
              <strong>Shipment Type</strong>

              <p>Type</p>
            </div>
            <div className="info__piece">
              <strong>Shipment Mode</strong>

              <p>Mode</p>
            </div>
            <div className="info__piece">
              <strong>Total Packages</strong>

              <p>Packages</p>
            </div>
            <div className="info__piece">
              <strong>Pacakges Weight</strong>

              <p>Weight</p>
            </div>
            <div className="info__piece">
              <strong>Carrier</strong>

              <p>Carrier</p>
            </div>
            <div className="info__piece">
              <strong>Courier</strong>

              <p>Courier</p>
            </div>
            <div className="info__piece">
              <strong>Pickup Time</strong>

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
