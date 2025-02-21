import "./Tracking.css";
import bg from "../../assets/images/5229-min.jpg";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";
import JsBarcode from "jsbarcode";

export default function Tracking({ data, error }) {
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

  const formatD = (date) => {
    return new Date(date).toLocaleDateString();
  };

  useEffect(() => {
    if (data?.barcode) {
      JsBarcode("#barcode", data.tracking_no);
    }
  }, [data]);

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
            <form action="/tracking">
              <input
                style={{
                  width: isMobile && "290px",
                  height: isMobile && "37px",
                }}
                type="text"
                name="id"
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
          <a href="/">Go home</a>
        </div>
      </div>

      {error && (
        <div className="error__con">
          <p>{error}</p>
        </div>
      )}

      {data && (
        <div className="tracking__results">
          <h2 style={{ fontSize: isMobile ? "28px" : "32px" }}>
            Tracking Results
          </h2>

          <div className="tracking__bio">
            {data?.barcode ? (
              <svg id="barcode"></svg>
            ) : (
              <h3>JZ-OFRVNORROE5678-CARGO</h3>
            )}
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
            <p>
              Shipment Status - {data.status[data.status.length - 1].status}
            </p>
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
                { label: "Shipment Type", value: data.shipment.type ?? "---" },
                { label: "Shipment Mode", value: data.shipment.mode ?? "---" },
                {
                  label: "Total Packages",
                  value: data.shipment.packages ?? "---",
                },
                {
                  label: "Pacakges Weight",
                  value: `${data.shipment.weight ?? "---"} kg`,
                },
                { label: "Carrier", value: data.shipment.carrier ?? "---" },
                { label: "Courier", value: data.shipment.courier ?? "---" },
                {
                  label: "Pickup Time",
                  value: data.shipment.depart_time
                    ? formatDT(data.shipment.depart_time)
                    : "---",
                },
                {
                  label: "Departure Time",
                  value: data.shipment.pickup_time
                    ? formatDT(data.shipment.pickup_time)
                    : "---",
                },
                { label: "Origin", value: data.shipment.origin ?? "---" },
                {
                  label: "Destination",
                  value: data.shipment.destination ?? "---",
                },
                {
                  label: "Expected Delivery Date",
                  value: data.shipment.delivery_date
                    ? formatD(data.shipment.delivery_date)
                    : "---",
                },
                { label: "Comment", value: data.shipment.comment ?? "---" },
              ].map((info, ind) => (
                <div key={ind} className="info__piece">
                  <strong>{info.label}</strong>

                  <p>{info.value}</p>
                </div>
              ))}
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
                  {(data.packages ?? []).map((pkg, ind) => (
                    <tr key={ind}>
                      <td>{pkg.type ?? "---"}</td>
                      <td>{pkg.quantity ?? "---"}</td>
                      <td>{pkg.width ?? "---"}</td>
                      <td>{pkg.height ?? "---"}</td>
                      <td>{pkg.length ?? "---"}</td>
                      <td>{pkg.weight ?? "---"}</td>
                      <td>{pkg.description ?? "---"}</td>
                    </tr>
                  ))}
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
                  {(data.status ?? []).map((stats, ind) => (
                    <tr key={ind}>
                      <td>{stats.location ?? "---"}</td>
                      <td>{stats.date ? formatD(stats.date) : "---"}</td>
                      <td>{stats.time ?? "---"}</td>
                      <td>{stats.status ?? "---"}</td>
                      <td>{stats.remark ?? "---"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
