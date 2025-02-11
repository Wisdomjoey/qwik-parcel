import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "./Testimonials.css";
import { useMediaQuery } from "react-responsive";
import t1 from "../../images/t1.png";
import t2 from "../../images/t2.png";

const testimonials = [
  {
    img: t1,
    author: "Lanu Dexander",
    rating: 5,
    cap: "“ I needed an urgent delivery, and this cargo service exceeded my expectations. Not only did they deliver on time, but their communication throughout the process was exceptional. Will definitely use their services again.”",
    date: "2 weeks ago",
  },
  {
    img: t2,
    author: "Tony Alexander",
    rating: 5,
    cap: "“ I used this cargo delivery service to ship goods internationally, and I was extremely impressed. The process was seamless, the staff was friendly, and my items arrived on time without damage. Highly recommed! ”",
    date: "2 days ago",
  },
];

export default function Testimonials() {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div
      className="testimonial"
      id="testimonials"
      style={{
        marginTop: isMobile && "4rem",
      }}
    >
      <h1 style={{ fontSize: isMobile && "28px" }}>Testimonials</h1>
      <div className="testimonial__con">
        <div
          className="testimonial__overlay"
          style={{
            padding: isTablet && "10rem 0",
          }}
        >
          <Swiper
            slidesPerView={1}
            modules={[Autoplay, Pagination]}
            pagination={{
              dynamicBullets: true,
              clickable: true,
              // bulletClass: "test__bullet",
              // bulletActiveClass: 'test__bullet__active'
            }}
            autoplay={{
              delay: 4000,
            }}
            loop={true}
            style={{
              width: isMobile ? "90%" : isTablet && "60%",
            }}
          >
            {testimonials.map((val, ind) => {
              return (
                <SwiperSlide key={ind}>
                  <div className="test__con">
                    <div className="test__head">
                      <img src={val.img} alt="profile" />
                      <h2 style={{ fontSize: isMobile && "18px" }}>
                        {val.author}
                      </h2>
                    </div>
                    <cite style={{ fontSize: isMobile && "12px" }}>
                      {val.cap}
                    </cite>
                    <div className="ratings">
                      {Array(val.rating)
                        .fill(null)
                        .map((val, ind) => {
                          return (
                            <span
                              style={{
                                transform: isMobile && "scale(.9)",
                              }}
                              key={ind}
                            >
                              ⭐
                            </span>
                          );
                        })}
                      <p style={{ fontSize: isMobile && "11px" }}>{val.date}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
