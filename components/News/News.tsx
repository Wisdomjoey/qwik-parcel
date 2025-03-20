import n1 from "../../assets/images/n1.jpg";
import n2 from "../../assets/images/n2.jpg";
import n3 from "../../assets/images/n3.jpg";
import { useMediaQuery } from "react-responsive";
import "./News.css";
import {
  CalendarTodayOutlined,
  ChatBubbleOutlineRounded,
} from "@mui/icons-material";

export default function News() {
  const data = [
    {
      img: n1,
      head: "Supply Chain Diversification Gains Momentum",
      txt: "Businesses are increasingly diversifying their supply chains to mitigate risks from geopolitical tensions and regional disruptions. This involves expanding sourcing and manufacturing locations, and building stronger regional networks.",
    },
    {
      img: n2,
      head: "Rail Freight Sees Increased Intermodal Growth",
      txt: "Intermodal rail freight is showing strong growth, as companies seek more sustainable and cost-effective transportation solutions. Increased investment into rail infrastructure is allowing for more efficient movement of goods.",
    },
    {
      img: n3,
      head: "Trucking Industry Adapts to New Emissions Standards",
      txt: "New, stricter emissions regulations are prompting significant changes in the trucking industry. Companies are rapidly adopting electric and hydrogen-powered vehicles, and investing in infrastructure to support these transitions.",
    },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });

  return (
    <div className="news">
      <h1 style={{ fontSize: isMobile && "28px" }}>Popular News</h1>
      <div className="n__data__features">
        {data.map((val, ind) => (
          <div key={ind} className="n__feature">
            <img src={val.img.src} alt="News" />
            <div className="n__feature__con">
              <div className="n__feature__content">
                <h3>{val.head}</h3>
                <p>{val.txt}</p>
              </div>
              <div className="n__feature__footer">
                <small>
                  <CalendarTodayOutlined
                    sx={{ color: "rgb(105,105,105)", fontSize: 16 }}
                  />{" "}
                  January 14, 2025
                </small>

                <small>
                  <ChatBubbleOutlineRounded
                    sx={{ color: "rgb(105,105,105)", fontSize: 16 }}
                  />{" "}
                  45
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
