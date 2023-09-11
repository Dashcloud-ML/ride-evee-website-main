import "./Career.css";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { Button, IconButton } from "@mui/material";
// import Table from "../../components/navbar/Tables";
import Logo from "../../assets/logo.png";
import Table from "./Table";
import group from "../../assets/group.png";
import Nav from "../bookings/Nav";
import carrer from "../../assets/carrer.png";
import Footer from "../Footer";
const Career = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="career_container ">
        <div className=" ">
          <div
            className="relative flex uppercase flex-col space-y-8 bottom-0 justify-start h-screen"
            style={{
              backgroundImage: `url(${carrer})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
            <h1
              className="absolute bottom-10 left-5"
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#FFF",
                fontFamily: "Rounded Mplus 1c",
                fontSize: "80px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                textTransform: "uppercase",
              }}>
              Career at{" "}
              <span
                style={{
                  color: "#60A547",
                  fontFamily: "Rounded Mplus 1c",
                  fontSize: "80px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}>
                Ride Evee
              </span>
            </h1>
          </div>
        </div>

        {/* <div className="career_sec1">
          <div className="sec1-inner bg-black ">
            <h1
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#FFF",
                fontFamily: "Rounded Mplus 1c",
                fontSize: "80px",
                fontStyle: "normal",
                fontWeight: "800",
                lineHeight: "normal",
                textTransform: "uppercase",
              }}>
              Career at{" "}
              <span
                style={{
                  color: "#60A547",
                  fontFamily: "Rounded Mplus 1c",
                  fontSize: "80px",
                  fontStyle: "normal",
                  fontWeight: "800",
                  lineHeight: "normal",
                  textTransform: "uppercase",
                }}>
                Ride Evee
              </span>
            </h1>
          </div>
        </div> */}
        <div
          className="pt-5 pl-10 pr-10 "
          style={{ justifyItems: "center", alignContent: "center" }}>
          <div className="careerpage_searchBar">
            <form className="searchbar_form">
              <input placeholder="search open roles" />
              {/* <IconButton>
              <ArrowForwardIcon />
            </IconButton> */}
            </form>
          </div>

          <div className="careerpage_jobopenings w-full ">
            <h1
              style={{
                color: "#000",
                fontFamily: "MTT Milano",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
                letterSpacing: "-0.32px",
                paddingTop: "15vh",
                justifyItems: "left",
                paddingLeft: "60px",
              }}>
              Job Opening at RIDE{" "}
              <span
                style={{
                  color: "#60A547",
                  fontFamily: "MTT Milano",
                  fontSize: "40px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  letterSpacing: "-0.32px",
                }}>
                {" "}
                EVEE
              </span>
            </h1>
            <p
              style={{
                color: "#60A547",
                fontFamily: "Poppins",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
                letterSpacing: "-0.14px",
                paddingLeft: "60px",
                paddingTop: "5px",
              }}>
              14 Open Roles
            </p>
          </div>

          <div className="careerpage_table">
            <Table />
          </div>
          <div
            className="careerpage_newsAlert"
            style={{
              borderRadius: "75.692px",
              background: "#60A547",
            }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "10vw",
              }}
              className="grid grid-cols-3 gap-4">
              <div>
                <h1
                  style={{
                    color: "#FFF",
                    fontFamily: "Poppins",
                    fontSize: "41.631px",
                    fontStyle: "normal",
                    fontWeight: "600",
                    lineHeight: "120%",
                    marginRight: "35px",
                    paddingRight: "60px",
                  }}
                  className="p-10">
                  Never Want to Miss Any Jobs News?
                </h1>
              </div>
              <div className="col-span-2">
                <form className="relative z-40">
                  <div
                    style={{
                      display: "flex",
                      borderRadius: "47.308px",
                      background: "#FFF",
                      padding: "22.27px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "30.277px",
                    }}>
                    <input
                      placeholder="Enter your email address here..."
                      style={{
                        border: "none",
                        outline: "none",
                        width: "100%",
                        color: "var(--gray-3, #828282)",
                        fontFamily: "Poppins",
                        fontSize: "18.923px",
                        fontStyle: "normal",
                        fontWeight: "300",
                        lineHeight: "140%" /* 26.492px */,
                      }}
                    />
                    <button
                      style={{
                        borderRadius: "28.385px",
                        background: "#60A547",
                        display: "flex",
                        padding: "7.569px 15.138px",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "7.569px",
                        color: "#fff",
                      }}>
                      Subscribe
                    </button>
                  </div>
                  <svg
                    className="absolute -top-[22rem] opacity-20 -left-[64rem] w-[433px] -z-30 h-[479px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="434"
                    height="481"
                    viewBox="0 0 434 481"
                    fill="none">
                    <path
                      d="M343.269 200.174C281.514 67.2667 249.391 16.7798 148.498 18.8924C112.556 19.6237 121.169 -7.16362 93.7591 2.99336C66.4029 13.1503 89.8859 28.0202 61.8797 51.0155C-16.7218 115.56 -9.49 175.256 26.9668 317.535C42.3241 377.474 -10.0588 380.4 10.6614 438.47C25.8021 480.832 137.393 498.573 255.106 454.911C372.846 411.223 447.032 324.523 431.892 282.161C411.171 224.063 369.297 256.132 343.269 200.174ZM242.349 419.104C137.204 458.107 50.8018 435.193 47.1453 424.982C40.8615 407.376 81.0831 348.71 201.288 304.1C321.492 259.491 388.582 276.04 395.597 295.677C399.741 307.296 347.521 380.074 242.349 419.104ZM208.546 324.468C153.59 344.864 115.4 368.184 90.6442 389.175C108.06 404.993 140.671 408.839 173.146 396.786C214.505 381.483 239.938 346.245 229.89 318.13L229.456 317.155C222.658 319.376 215.697 321.787 208.546 324.468Z"
                      fill="#F2F2F2"
                    />
                  </svg>
                  <svg
                    className="absolute -top-[19rem] -left-[28rem]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="227"
                    height="227"
                    viewBox="0 0 227 227"
                    fill="none">
                    <g opacity="0.1">
                      <path
                        d="M165.631 96.733C139.883 41.3181 126.489 20.2679 84.4229 21.1488C69.437 21.4537 73.0282 10.2849 61.5997 14.5198C50.1937 18.7547 59.9848 24.9545 48.3078 34.5423C15.5354 61.4536 18.5506 86.3434 33.7511 145.666C40.1542 170.657 18.3135 171.877 26.9527 196.089C33.2655 213.751 79.7927 221.148 128.872 202.944C177.963 184.728 208.895 148.579 202.582 130.917C193.943 106.693 176.484 120.064 165.631 96.733ZM123.553 188.015C79.7137 204.277 43.6889 194.723 42.1644 190.465C39.5444 183.125 56.3145 158.664 106.433 140.064C156.551 121.465 184.524 128.365 187.449 136.552C189.177 141.397 167.404 171.741 123.553 188.015ZM109.46 148.557C86.546 157.06 70.6228 166.784 60.301 175.536C67.5624 182.131 81.1592 183.735 94.6995 178.709C111.944 172.329 122.548 157.636 118.358 145.914L118.178 145.508C115.343 146.434 112.441 147.439 109.46 148.557Z"
                        fill="#F2F2F2"
                      />
                    </g>
                  </svg>
                  <img
                    className="absolute rounded-[75px] -z-40 bottom-0 -top-[10rem] w-[897px] -right-[5rem] h-[410px]"
                    src={group}
                    alt=""
                  />
                </form>
              </div>
            </div>
          </div>
          <div className="careerpage_location">
            <h1
              style={{
                color: "#2F313C",
                fontFamily: "MTT Milano",
                fontSize: "40px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}>
              Find Us on Google Maps
            </h1>
            <p
              style={{
                color: "#2F313C",
                fontFamily: "MTT Milano",
                fontSize: "24px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
              }}>
              "Welcome to our cab service! Navigate hassle-free, find us on
              Google Maps to catch your ride whenever you need."
            </p>
            <div
              style={{
                padding: "25px",
              }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.339043541869!2d80.8827836755592!3d26.765460476735264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf94ebb93769f%3A0xd25d850e74c76635!2sChaudhary%20Charan%20Singh%20International%20Airport!5e0!3m2!1sen!2sin!4v1689820123948!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                padding="10px"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div style={{ background: "#60A547", padding: "5vw" }}>
          <div className="grid grid-cols-3 ">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}>
              <img
                src={Logo}
                style={{
                  width: "158px",
                  height: "55px",
                  flexShrink: "0",
                }}
              />
              <p
                style={{
                  color: "#2F313C",
                  fontFamily: "MTT Milano",
                  fontSize: "20px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "normal",
                  paddingRight: "100px",
                }}>
                The world famous EV Cabs of Lucknow, India
              </p>
            </div>
            <div
              className="col-span-2"
              style={{
                color: "#2F313C",
                fontFamily: "MTT Milano",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "normal",
              }}>
              <p>we are a professional Indian taxi company.</p>{" "}
              <p>
                Yatri Cabs is operating in Lucknow and providing a high class
                travelling experience to their customers. We offer latest
                facilities to our customers, desired in a world class car rental
                service. We own the most well maintained fleet of cars equipped
                with all the modern facilities. Our car rental services can be
                easily availed from airport, railway stations, busterminals,
                hotels or homes within moments of contacting us. We arecapable
                of dropping you at your desired destination in minimum course
                oftime.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Career;
