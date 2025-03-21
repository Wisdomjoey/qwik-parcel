import "./Tracking.css";
import bg from "../../assets/images/5229-min.jpg";
import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import JsBarcode from "jsbarcode";
// import ReactMapBoxGL from "react-mapbox-gl";
import MapBoxGL from "mapbox-gl";
// import polyline from "@mapbox/polyline";
// import * as turf from "@turf/turf";

export default function Tracking({ data, error }) {
  const mapConRef = useRef(null);
  const [err, setErr] = useState();
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  // const Map = new MapBoxGL.Map({
  //   accessToken: process.env.NEXT_PUBLIC_MAPBOX_KEY,
  // });

  const formatDT = (date) => {
    return new Date(date).toLocaleString();
  };

  const formatD = (date) => {
    return new Date(date).toLocaleDateString();
  };

  // const divideRoute = (start, end) => {
  //   const maxDistance = 2;
  //   const line = turf.lineString([start, end]);
  //   const totalDistance = turf.length(line, { units: "kilometers" });

  //   if (totalDistance <= maxDistance) {
  //     return [start, end];
  //   }

  //   const numSegments = Math.ceil(totalDistance / maxDistance);
  //   const points = [start];

  //   for (let i = 1; i < numSegments; i++) {
  //     const along = turf.along(line, (i / numSegments) * totalDistance, {
  //       units: "kilometers",
  //     });
  //     points.push(along.geometry.coordinates);
  //   }

  //   points.push(end);

  //   return points;
  // };

  useEffect(() => {
    if (err) return;

    const loadMap = async () => {
      try {
        const locations = [
          // ...(data.shipment.destination
          //   ? [encodeURIComponent(data.shipment.destination)]
          //   : []),
          ...(data.status ?? []).map((stat) =>
            encodeURIComponent(stat.location)
          ),
        ];

        if (locations.length > 0) {
          const accessToken = process.env.NEXT_PUBLIC_MAPBOX_KEY;
          MapBoxGL.accessToken = accessToken;

          const centers = [];

          for (let i = 0; i < locations.length; i++) {
            const location = locations[i];

            const res = await fetch(
              `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${accessToken}`
            );

            if (res.ok) {
              const data = await res.json();

              if (data.features.length <= 0) return setErr("Invalid Location");

              centers.push(data.features[0].center);
            } else {
              return setErr("Something went wrong");
            }
          }

          const map = new MapBoxGL.Map({
            container: mapConRef.current,
            center: centers[centers.length - 1],
            style: "mapbox://styles/mapbox/navigation-day-v1",
            zoom: 10,
          });

          map.on("load", async () => {
            // Add Markers
            centers.forEach((center) =>
              new MapBoxGL.Marker().setLngLat(center).addTo(map)
            );

            map.addControl(new MapBoxGL.NavigationControl());
            // map.setFeatureState(
            //   { source: 'my-source', id: 'some-id' },
            //   { hover: false }
            // );

            // map.addInteraction({
            //   id: 'hover-interaction',
            //   layers: ['my-layer'],
            //   type: 'hover',
            //   onHover: (e) => {
            //     map.setFeatureState(
            //       { source: 'my-source', id: e.features[0].id },
            //       { hover: true }
            //     );
            //   },
            //   onLeave: (e) => {
            //     map.setFeatureState(
            //       { source: 'my-source', id: e.features[0].id },
            //       { hover: false }
            //     );
            //   }
            // });

            // // Add Routes
            // const cd1 = centers[0];
            // const cd2 = centers[centers.length - 1];
            // const waypoints = divideRoute(cd1, cd2);

            // // if (waypoints.length > 25) return;

            // for (let i = 0; i < waypoints.length - 1; i++) {
            //   const start = waypoints[i];
            //   const end = waypoints[i + 1];
            //   const url = `https://api.mapbox.com/matching/v5/mapbox/driving/${start[0]},${start[1]};${end[0]},${end[1]}?geometries=geojson&access_token=${accessToken}`;

            //   const res = await fetch(url);

            //   if (!res.ok) return setErr("Something went wrong");

            //   const mapData = await res.json();
            //   console.log(mapData)
            //   const decodedCoordinates = polyline.decode(
            //     mapData.routes[0].geometry
            //   );
            //   console.log(decodedCoordinates)
            //   const cod1 = decodedCoordinates[0].join(",");
            //   const cod2 =
            //     decodedCoordinates[decodedCoordinates.length - 1].join(",");

            //   const url1 = `https://api.mapbox.com/directions/v5/mapbox/driving/${cod1};${cod2}?geometries=geojson&access_token=${accessToken}`;
            //   const res1 = await fetch(url1);

            //   if (!res1.ok) return setErr("Invalid Location");

            //   const routeData = await res1.json();
            //   const route = routeData.routes[0].geometry;

            //   // Add the route to the map
            //   map.addSource(`route${i}`, {
            //     type: "geojson",
            //     data: {
            //       type: "Feature",
            //       properties: {},
            //       geometry: route,
            //     },
            //   });

            //   map.addLayer({
            //     id: `route${i}`,
            //     type: "line",
            //     source: `route${i}`,
            //     layout: {
            //       "line-join": "round",
            //       "line-cap": "round",
            //     },
            //     paint: {
            //       "line-color": "#888",
            //       "line-width": 8,
            //     },
            //   });
            // }

            // Animate Route
            if (centers.length > 1) {
              const coord1 = centers[centers.length - 2];
              // const coord2 = centers[centers.length - 1];
              const route = {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    geometry: {
                      type: "LineString",
                      coordinates: centers,
                    },
                  },
                ],
              };

              // A single point that animates along the route.
              const point = {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: coord1,
                    },
                  },
                ],
              };

              // Number of steps to use in the arc and animation, more steps means
              // a smoother arc and animation, but too many steps will result in a
              // low frame rate
              // let counter = 0;
              if (!route.features[0] || !route.features[0].geometry) {
                console.error("Invalid route data");
                return setErr("Invalid route data");
              }

              // const lineString = route.features[0].geometry;
              // const start = lineString.coordinates[0];
              // const end = lineString.coordinates[1];
              // const step = turf.length(lineString) / 500;

              // function animate() {
              //   if (counter >= turf.length(lineString)) {
              //     // Animation has reached the end
              //     return;
              //   }

              //   // Update the moving point
              //   const alongPoint = turf.along(lineString, counter);

              //   point.features[0].geometry.coordinates =
              //     alongPoint.geometry.coordinates;

              //   // Calculate and update the midpoint
              //   const remainingLine = turf.lineSlice(
              //     alongPoint,
              //     turf.point(end),
              //     lineString
              //   );
              //   const midpoint = turf.along(
              //     remainingLine,
              //     turf.length(remainingLine) / 2
              //   );

              //   map.getSource("midpoint").setData({
              //     type: "FeatureCollection",
              //     features: [
              //       {
              //         type: "Feature",
              //         geometry: {
              //           type: "Point",
              //           coordinates: midpoint.geometry.coordinates,
              //         },
              //       },
              //     ],
              //   });

              //   // Calculate the bearing to ensure the icon is rotated to match the route arc
              //   // The bearing is calculated between the current point and the next point, except
              //   // at the end of the arc, which uses the previous point and the current point
              //   point.features[0].properties.bearing = turf.bearing(
              //     turf.point(start),
              //     turf.point(end)
              //   );

              //   // Update the source with this new data
              //   map.getSource("point").setData(point);

              //   counter = counter + step;
              //   requestAnimationFrame(animate);
              // }

              // Add Data to Map
              map.addSource("midpoint", {
                type: "geojson",
                data: {
                  type: "FeatureCollection",
                  features: [],
                },
              });

              map.addSource("route", {
                type: "geojson",
                data: route,
              });

              map.addSource("point", {
                type: "geojson",
                data: point,
              });

              map.addLayer({
                id: "route",
                source: "route",
                type: "line",
                paint: {
                  "line-width": 2,
                  "line-color": "#007cbf",
                },
              });

              map.addLayer({
                id: "point",
                source: "point",
                type: "symbol",
                layout: {
                  "icon-image": "airport",
                  "icon-size": 1.5,
                  "icon-rotate": ["get", "bearing"],
                  "icon-rotation-alignment": "map",
                  "icon-allow-overlap": true,
                  "icon-ignore-placement": true,
                },
              });

              // Start the animation
              // animate();
            }
          });
        }
      } catch (error) {
        console.error(error);

        setErr("Something went wrong");
      }
    };

    if (data) {
      if (data.barcode) JsBarcode("#barcode", data.tracking_no);

      loadMap();
    }
  }, [data, err]);

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
            {data.logo && <img alt="Logo" src={data.logo} />}

            {data?.barcode ? (
              <svg
                id="barcode"
                style={{ width: "100%", maxWidth: "35rem" }}
              ></svg>
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
                    <strong>Name:</strong> {data.receiver.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {data.receiver.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {data.receiver.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {data.receiver.address}
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

          <div className="pkg__image">
          <img alt="package" src={data.pkg_image} />
          </div>

          <div className="shipment__info">
            <h2>Shipment Information</h2>

            <div
              className="shipment__information"
              style={{
                gridTemplateColumns: isMobile
                  ? "auto"
                  : isTablet
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
                { label: "Shipping Fee", value: data.shipment.price ?? "---" },
                {
                  label: "Payment Method",
                  value: data.shipment.pay_method ?? "---",
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

          {err ? (
            <div className="error__con">
              <p>{err}</p>
            </div>
          ) : (
            <div ref={mapConRef} className="map__display"></div>
          )}
        </div>
      )}
    </div>
  );
}
