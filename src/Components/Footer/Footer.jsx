import "./Footer.css";
import logo from "../../images/logo4.png";
import logo2 from "../../images/logo2.png";
import { useMediaQuery } from "react-responsive";
import {
  AddLocation,
  AlternateEmail,
  Contacts,
  Email,
  Facebook,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Footer() {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });

  return (
    <div
      className="footer__con"
      style={{
        padding: isTablet && 0,
      }}
    >
      <div
        style={{
          flexDirection: isTablet ? "column" : "row",
        }}
        className="footer"
      >
        <div
          className="left__footer"
          style={{
            width: isTablet && "100%",
            padding: isTablet && "4rem 1.5rem",
          }}
        >
          <div
            className="contact__footer"
            style={{
              flexDirection: isSmallScr && "column",
              width: isTablet && "50%",
              gap: isSmallScr && "2rem",
            }}
          >
            <div
              className="phone"
              style={{
                width: isTablet && "100%",
              }}
            >
              <div className="top__phone">
                <Contacts
                  sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                />
                <h3 style={{ fontSize: isTablet && "13px" }}>Contacts</h3>
              </div>
              <a
                href="tel:+234 8032 429 618"
                style={{ fontSize: isTablet && "9px" }}
              >
                +234(0) 8032 429 618
              </a>
              <a
                href="tel:+66942520030"
                style={{ fontSize: isTablet && "9px" }}
              >
                +66942520030
              </a>
              <a
                href="tel:+234 8120 255 749"
                style={{ fontSize: isTablet && "9px" }}
              >
                +234(0) 8120 255 749
              </a>
              <a
                href="tel:+234 913 2312 725"
                style={{ fontSize: isTablet && "9px" }}
              >
                +234(0) 913 2312 725
              </a>
            </div>
            <div
              className="email"
              style={{
                width: isTablet && "100%",
                border: isSmallScr && 0,
                padding: isSmallScr && 0,
              }}
            >
              <div className="top__mail">
                <Email sx={{ color: "white", fontSize: isTablet ? 15 : 20 }} />
                <h3 style={{ fontSize: isTablet && "13px" }}>Mails</h3>
              </div>
              <div className="mails">
                <div className="look">
                  <div className="headl">
                    <AlternateEmail
                      sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                    />
                    <h4 style={{ fontSize: isTablet && "11px" }}>OutLook</h4>
                  </div>
                  <a
                    href="mailto:boblinklogistics@outlook.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    boblinklogistics@
                    <br />
                    outlook.com
                  </a>
                </div>
                <div className="whats">
                  <div className="headl">
                    <WhatsApp
                      sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                    />
                    <h4 style={{ fontSize: isTablet && "11px" }}>Whatsapp</h4>
                  </div>
                  <a
                    href="https://wa.me/message/08032429618"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    +234 803 2429 618
                  </a>
                </div>
                <div className="insta">
                  <div className="headl">
                    <Instagram
                      sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                    />
                    <h4 style={{ fontSize: isTablet && "11px" }}>Instagram</h4>
                  </div>
                  <a
                    href="https://instagram.com/boblink_worldwide"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    boblink_worldwide
                  </a>
                </div>
                <div className="face">
                  <div className="headl">
                    <Facebook
                      sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                    />
                    <h4 style={{ fontSize: isTablet && "11px" }}>Facebook</h4>
                  </div>
                  <a
                    href="https://www.facebook.com/bwlservices"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    @bwlservices
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            className="address__footer"
            style={{
              width: isTablet && "50%",
              borderLeft: isSmallScr && "1px solid white",
            }}
          >
            <div className="top__add">
              <AddLocation
                sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
              />
              <h3 style={{ fontSize: isTablet && "13px" }}>Addresses</h3>
            </div>
            <div className="branch1">
              <h4 style={{ fontSize: isTablet && "11px" }}>United States</h4>
              <p style={{ fontSize: isTablet && "9px" }}>
                Olive St, Norwalk, CA 90650, United States
              </p>
            </div>
            <div className="branch2">
              <h4 style={{ fontSize: isTablet && "11px" }}>HEAD OFFICE</h4>
              <p style={{ fontSize: isTablet && "9px" }}>
                Olive St, Norwalk, CA 90650, United States
              </p>
            </div>
            <div className="branch3">
              <h4 style={{ fontSize: isTablet && "11px" }}>BRANCH OFFICE</h4>
              <p style={{ fontSize: isTablet && "9px" }}>
                Olive St, Norwalk, CA 90650, United States
              </p>
            </div>
          </div>
        </div>
        <div
          className="right__footer"
          style={{
            width: isTablet && "100%",
            padding: isTablet && "0 2rem",
            border: isTablet && "none",
            alignItems: isSmallScr && "center",
            justifyContent: isSmallScr && "center",
          }}
        >
          <Link to="/">
            <img
              src={isTablet ? logo2 : logo}
              alt=""
              style={{ width: "100%" }}
            />
          </Link>
        </div>
      </div>
      <div className="copyright">
        <cite>Created by Jay Z - QwikParcel, All Rights Reserved.</cite>
      </div>
    </div>
  );
}
