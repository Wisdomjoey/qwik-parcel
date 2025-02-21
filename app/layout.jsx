import "./globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

export const metadata = {
  title: "Qwik Parcel",
  description:
    "Qwik Parcel is a Cargo and Freight Logistics system that offer  Air freight , Sea freight and Land freight services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="App" id="app">
          {children}
        </div>
      </body>
    </html>
  );
}
