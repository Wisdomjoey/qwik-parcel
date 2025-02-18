import "./Navbar.css";
import Logo from "../../images/logo2.png";
import {
  alpha,
  Button,
  Link as Nink,
  Menu,
  MenuItem,
  styled,
  Box,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import ChatRow from "../ChatRow/ChatRow";
import { Link } from "react-router-dom";
import {
  Build,
  Close,
  Collections,
  ConnectingAirports,
  DirectionsBoat,
  DocumentScanner,
  FlightTakeoff,
  Handshake,
  Home,
  Info,
  KeyboardArrowDown,
  Link as Bink,
  LocalShipping,
  Menu as Mink,
  TwoWheeler,
  Chat,
  Send,
  CloseOutlined,
  ArrowUpward,
  WhatsApp,
  LinkedIn,
  FacebookOutlined,
  Instagram,
} from "@mui/icons-material";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function Navbar({ bg = false }) {
  const isMobile = useMediaQuery({
    query: "(max-width: 480px)",
  });
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const isSmallScr = useMediaQuery({
    query: "(max-width: 1024px)",
  });
  // const isLargeScr = useMediaQuery({
  //     query: '(min-width: 1025px)'
  // })

  const [state, setstate] = useState(false);
  const [drawer, setDrawer] = useState(false);
  const [btn, showBtn] = useState(false);
  const [anc, setanc] = useState(false);
  const [anc1, setanc1] = useState(false);
  const [anc2, setanc2] = useState(false);
  const [anc3, setanc3] = useState(false);
  const [ancmg, setancmg] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const answers = [
    [
      <p>
        We offer:
        <br />- International Logistics (Imports and Exports)
        <br />- Warehousing
        <br />- Procurement
        <br />- Clearance
      </p>,
    ],
    [
      <p>
        We ship to Asian countries including:
        <br />
        Korea
        <br />
        Japan
        <br />
        Thailand
        <br />
        Indonesia
        <br />
        Bangladesh
        <br />
        Philippine
        <br />
        Malaysia
        <br />
        Taiwan
        <br />
        Vietnam
      </p>,
    ],
    [<p>Packages arrive within 5-7 working days</p>],
    [<p>Head office 17, Tokunbo Alli street, Toyin Ikeja Lagos.</p>],
    [<p>Yes, depending on the shipment details</p>],
    [
      <p>
        Our rates vary depending on your shipment and destination, you can
        either type in your shipment details or any enquires not listed and
        you'll be connected to one of our staffs.
      </p>,
    ],
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setDrawer(false);
  };

  function changeHover() {
    if (window.scrollY >= 500) {
      setstate(true);
    } else {
      setstate(false);
    }
  }

  function showButton() {
    if (window.scrollY >= 700) {
      showBtn(true);
    } else {
      showBtn(false);
    }
  }

  function openChat() {
    const chatbox = document.getElementById("chatbox");
    const chatus = document.getElementById("chatus");

    chatus.style.display = "none";

    if (isMobile) {
      chatbox.classList.add("open__sm");
    } else {
      chatbox.classList.add("open");
    }

    setanc(true);
    scmsgb();
  }

  function closeChat() {
    const chatbox = document.getElementById("chatbox");
    const chatus = document.getElementById("chatus");

    if (isMobile) {
      chatbox.classList.remove("open__sm");
    } else {
      chatbox.classList.remove("open");
    }

    chatus.style.display = "flex";
    // setanc(false);
    // setanc1(false);
    setanc2(false);
  }

  function scmsgb() {
    setTimeout(() => {
      setanc1(true);
      setanc2(true);
    }, 1500);
  }

  function ancMg(id) {
    const ancId = document.getElementById(`faq${id}`);

    setanc3(true);
    setancmg((prev) => [
      ...prev,
      <ChatRow
        dir="right"
        msg={[<p>{ancId.innerText}</p>]}
        bg="#fbfbfb"
        anim={false}
        profile={false}
      />,
    ]);
    setTimeout(() => {
      setancmg((prev) => [
        ...prev,
        <ChatRow dir="left" msg={[answers[id - 1]]} />,
      ]);
    }, 500);
  }

  function staffConn() {
    // const boxInput = document.getElementById('box__input').value;
    // const urlStr = boxInput.replace(/ /gi, '%20');
    // window.location.href = `https://wa.me/+2349132312725?text=${ urlStr }`;
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      changeHover();
      showButton();
    });
  }, []);

  const actions = [
    {
      icon: (
        <a
          href="https://wa.me/message/7XS7HLKKCISNH1"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsApp />
        </a>
      ),
      name: "WhatsApp",
    },
    {
      icon: (
        <a
          href="https://www.linkedin.com/in/lukman-obisesan-80ba5a20a"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
      ),
      name: "LinkedIn",
    },
    {
      icon: (
        <a
          href="https://www.facebook.com/bwlservices"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookOutlined />
        </a>
      ),
      name: "Facebook",
    },
    {
      icon: (
        <a
          href="https://instagram.com/boblink_worldwide"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram />
        </a>
      ),
      name: "Instagram",
    },
  ];

  return (
    <div
      className={bg ? "navbar nav" : state ? "navbar nav" : "navbar"}
      style={{ height: isMobile ? 60 : isTablet ? 75 : 80 }}
    >
      <div className="left__nav">
        <Link to="/">
          <img
            src={Logo}
            alt=""
            height={isMobile ? "40" : isTablet ? "50" : "60"}
          />
        </Link>
      </div>

      <div className="right__nav">
        {isTablet && (
          <div className={drawer ? "drawer d" : "drawer"}>
            <div className={drawer ? "links d" : "links"}>
              <div
                className="cl__btn"
                onClick={() => {
                  setDrawer(false);
                }}
              >
                <Close />
              </div>
              <ul>
                <li
                  onClick={() => {
                    setDrawer(false);
                  }}
                >
                  <Link to="/">
                    <Home sx={{ fontSize: 20 }} />
                    Home
                  </Link>
                </li>
                <li>
                  <Nink href="#services">
                    <div>
                      <Button
                        id="demo-customized-button"
                        aria-controls={
                          open ? "demo-customized-menu" : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        variant="contained"
                        disableElevation
                        onClick={handleClick}
                        startIcon={<Build sx={{ fontSize: 20 }} />}
                        endIcon={<KeyboardArrowDown />}
                      >
                        Services
                      </Button>
                      <StyledMenu
                        id="demo-customized-menu"
                        MenuListProps={{
                          "aria-labelledby": "demo-customized-button",
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                      >
                        <Link to="/#/services/airfreight">
                          <MenuItem onClick={handleClose} disableRipple>
                            <FlightTakeoff sx={{ fontSize: 20 }} />
                            Air Freight
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/seafreight">
                          <MenuItem onClick={handleClose} disableRipple>
                            <DirectionsBoat sx={{ fontSize: 20 }} />
                            Sea Freight
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/haulage">
                          <MenuItem onClick={handleClose} disableRipple>
                            <LocalShipping sx={{ fontSize: 20 }} />
                            Haulage Services
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/custom-clearance">
                          <MenuItem onClick={handleClose} disableRipple>
                            <DocumentScanner sx={{ fontSize: 20 }} />
                            Custom Clearance
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/dispatch">
                          <MenuItem onClick={handleClose} disableRipple>
                            <TwoWheeler sx={{ fontSize: 20 }} />
                            Dispatch Services
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/inter-state">
                          <MenuItem onClick={handleClose} disableRipple>
                            <ConnectingAirports sx={{ fontSize: 20 }} />
                            Inter State Delivery
                          </MenuItem>
                        </Link>
                        <Link to="/#/services/procurement">
                          <MenuItem onClick={handleClose} disableRipple>
                            <Handshake sx={{ fontSize: 20 }} />
                            Procurement
                          </MenuItem>
                        </Link>
                      </StyledMenu>
                    </div>
                  </Nink>
                </li>
                <li
                  onClick={() => {
                    setDrawer(false);
                  }}
                >
                  <Nink href="#gallery">
                    <Collections sx={{ fontSize: 20 }} />
                    Gallery
                  </Nink>
                </li>
                <li
                  onClick={() => {
                    setDrawer(false);
                  }}
                >
                  <Nink href="#about">
                    <Info sx={{ fontSize: 20 }} />
                    About
                  </Nink>
                </li>
              </ul>
              <hr />
              <Link to="/#/tracking">
                <button
                  style={{ padding: ".2rem 1rem" }}
                  className="button navb sp"
                >
                  <span className="str">Tracking</span>
                </button>
              </Link>
            </div>
          </div>
        )}
        {isTablet ? (
          <div
            className="ham__menu"
            onClick={() => {
              setDrawer(!drawer);
            }}
          >
            <Mink sx={{ fontSize: isMobile ? 30 : 40 }} />
          </div>
        ) : (
          <div
            className="links"
            style={{
              fontSize: isSmallScr && "13px",
            }}
          >
            <ul
              style={{
                gap: isSmallScr && "10%",
                marginRight: isSmallScr && "1.5rem",
              }}
            >
              <li>
                <Link to="/">
                  Home
                  <span className="change"></span>
                </Link>
              </li>
              <li>
                <Nink href="#services">
                  <div>
                    <Button
                      id="demo-customized-button"
                      aria-controls={open ? "demo-customized-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      variant="contained"
                      disableElevation
                      onClick={handleClick}
                      endIcon={<KeyboardArrowDown />}
                      style={{
                        fontSize: isSmallScr
                          ? "13px !important"
                          : "16px !important",
                      }}
                    >
                      Services
                    </Button>
                    <StyledMenu
                      id="demo-customized-menu"
                      MenuListProps={{
                        "aria-labelledby": "demo-customized-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={() => setAnchorEl(null)}
                    >
                      <Link to="/#/services/airfreight">
                        <MenuItem onClick={handleClose} disableRipple>
                          <FlightTakeoff />
                          Air Freight
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/seafreight">
                        <MenuItem onClick={handleClose} disableRipple>
                          <DirectionsBoat />
                          Sea Freight
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/haulage">
                        <MenuItem onClick={handleClose} disableRipple>
                          <LocalShipping />
                          Haulage Services
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/custom-clearance">
                        <MenuItem onClick={handleClose} disableRipple>
                          <DocumentScanner />
                          Custom Clearance
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/dispatch">
                        <MenuItem onClick={handleClose} disableRipple>
                          <TwoWheeler />
                          Dispatch Services
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/inter-state">
                        <MenuItem onClick={handleClose} disableRipple>
                          <ConnectingAirports />
                          Inter State Delivery
                        </MenuItem>
                      </Link>
                      <Link to="/#/services/procurement">
                        <MenuItem onClick={handleClose} disableRipple>
                          <Handshake />
                          Procurement
                        </MenuItem>
                      </Link>
                    </StyledMenu>
                  </div>
                  <span className="change"></span>
                </Nink>
              </li>
              <li>
                <Nink href="#gallery">
                  Gallery
                  <span className="change"></span>
                </Nink>
              </li>
              <li>
                <Nink href="#about">
                  About
                  <span className="change"></span>
                </Nink>
              </li>
              <li>
                <Link to="/#/tracking">
                  <button
                    style={{
                      padding: ".2rem 1rem",
                      fontSize: isSmallScr ? "13px" : "16px",
                    }}
                    className="button sp"
                  >
                    <span className="str">Tracking</span>
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="chatus"
        id="chatus"
        style={{
          width: isMobile && "120px",
          height: isMobile && "40px",
          right: isMobile && "calc((5% + 30px) - ((120px / 2) - 25px))",
          gap: isMobile && "5px",
        }}
        onClick={() => openChat()}
      >
        <Chat sx={{ fontSize: "22px" }} />
        <p
          style={{
            fontSize: isMobile && "17px",
          }}
        >
          Chat Us
        </p>
      </div>
      <div
        className="chatbox"
        id="chatbox"
        style={{
          width: isMobile && "120px",
          height: isMobile && "40px",
          right: isMobile && "calc((5% + 30px) - ((120px / 2) - 25px))",
        }}
      >
        <div
          className="boxnav"
          style={{
            gap: isMobile && "5px",
          }}
        >
          <Chat sx={{ fontSize: isMobile ? "20px" : "22px" }} />
          <h3
            style={{
              fontSize: isMobile && "17px",
            }}
          >
            Chat
          </h3>
        </div>
        <div className="boxbody">
          <div className="boxbody__con">
            {anc && (
              <>
                <ChatRow
                  dir="left"
                  msg={[<p>Hello I'm Jay, How may I help you today?</p>]}
                />
              </>
            )}
            {anc1 && (
              <ChatRow
                dir="left"
                msg={[
                  <p>
                    Please select a request from the left panel or you can type
                    a message to talk with our staff directly
                  </p>,
                ]}
              />
            )}
            {anc3 &&
              ancmg.map((val) => {
                return val;
              })}
          </div>
        </div>
        <div className="boxfooter">
          <input id="box__input" placeholder="enquiry" />
          <div className="box__btn" onClick={() => staffConn()}>
            <Send sx={{ color: "rgb(var(--primary-color))" }} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="clsbox" title="close" onClick={() => closeChat()}>
          <CloseOutlined />
        </div>
      </div>
      {anc2 && (
        <div
          style={{
            right: isMobile && "calc((5% + 55px) - ((170px / 2) - 30px))",
            bottom: isMobile && "calc(15vh + 200px)",
          }}
          className="faq__con"
        >
          <div className="faq__box">
            <div className="faq">
              <div onClick={() => ancMg(1)} className="q__row">
                <p id="faq1">What services do you offer?</p>
              </div>
              <div onClick={() => ancMg(2)} className="q__row">
                <p id="faq2">What countries do you ship to?</p>
              </div>
              <div onClick={() => ancMg(3)} className="q__row">
                <p id="faq3">How many days does it take to deliver?</p>
              </div>
              <div onClick={() => ancMg(4)} className="q__row">
                <p id="faq4">Where is your Head office?</p>
              </div>
              <div onClick={() => ancMg(5)} className="q__row">
                <p id="faq5">
                  Do you have capacity to ship multiple containers?
                </p>
              </div>
              <div onClick={() => ancMg(6)} className="q__row">
                <p id="faq6">What are your rates?</p>
              </div>
            </div>
          </div>
          <svg
            style={{
              left: isMobile && "50%",
              transform: isMobile && "translateX(-50%) rotate(90deg)",
              top: isMobile && "calc(100% - 40px)",
            }}
            width="20px"
            height="30px"
            viewBox="0 0 100 100"
            fill="#fff"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L 100,50 0,100 Z" />
          </svg>
        </div>
      )}
      {btn && (
        <div
          className="scrollt"
          onClick={scrollTop}
          style={{
            width: isMobile && "50px",
            height: isMobile && "30px",
          }}
        >
          <ArrowUpward sx={{ fontSize: isMobile && "23px" }} />
        </div>
      )}
      <div
        className="social__links"
        style={{
          width: isMobile && "50px",
          height: isMobile && "50px",
          fontSize: isMobile && "15px",
        }}
      >
        <Box
          sx={{
            height: isMobile ? 270 : 300,
            transform: "translateZ(0px)",
            flexGrow: 1,
          }}
        >
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute" }}
            icon={<Bink />}
            className={isMobile ? "speed" : ""}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                className={isMobile ? "speed" : ""}
              />
            ))}
          </SpeedDial>
        </Box>
      </div>
    </div>
  );
}
