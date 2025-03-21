import "./Footer.css";
import logo from "../../assets/images/logo4.png";
import logo2 from "../../assets/images/logo2.png";
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
import Link from "next/link";

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
                href="tel:+1 561-240-8558"
                style={{ fontSize: isTablet && "9px" }}
              >
                +1 561-240-8558
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
                    <h4 style={{ fontSize: isTablet && "11px" }}>Support</h4>
                  </div>
                  <a
                    href="mailto:support@qwikparcel.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    support@qwikparcel.com
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
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    +1 561-240-8558
                  </a>
                </div>
                <div className="insta">
                  <div className="headl">
                    <Instagram
                      sx={{ color: "white", fontSize: isTablet ? 15 : 20 }}
                    />
                    <h4 style={{ fontSize: isTablet && "11px" }}>Instagram</h4>
                  </div>
                  <a href="/" style={{ fontSize: isTablet && "9px" }}>
                    @qwikparcel
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
                    href="/"
                    target="_blank"
                    rel="noreferrer"
                    style={{ fontSize: isTablet && "9px" }}
                  >
                    @qwikparcel
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
          <Link href="/">
            <img
              src={isTablet ? logo2.src : logo.src}
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
