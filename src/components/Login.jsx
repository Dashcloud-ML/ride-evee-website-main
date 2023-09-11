import React from "react";
import logo from "../assets/logo.png";
import group from "../assets/Group 1.png";
import google from "../assets/Google.svg";
import facebook from "../assets/Facebook.svg";

const Login = () => {
  return (
    <div className="w-full sm:w-auto h-screen md:h-screen flex items-center bg-[#60A547]">
      <div className="static w-1/3 h-full flex flex-col">
        <div className="md:w-auto">
          <img
            src={logo}
            alt=""
            className="md:w-auto md:h-auto w-[169.743px] h-[58.757px]  ml-[39px] mt-[42px] items-start"
          />
        </div>
        <div className="md:p-auto pt-[30px] pl-[39px] text-white text-[44.39px] ">
          <h1
            style={{
              color: `#FFF`,
              fontFamily: `Poppins`,
              fontSize: `44.394px`,
              fontStyle: `normal`,
              fontWeight: `600`,
              lineHeight: ` 52.229px` /* 117.647% */,
            }}>
            LOG INTO{" "}
          </h1>
          <h1
            style={{
              color: `#FFF`,
              fontFamily: `Poppins`,
              fontSize: `44.394px`,
              fontStyle: `normal`,
              fontWeight: `600`,
              lineHeight: ` 52.229px` /* 117.647% */,
            }}>
            RIDE
            <span
              style={{
                color: `#2F313C`,
                fontFamily: `Poppins`,
                fontSize: `44.394px`,
                fontStyle: `normal`,
                fontWeight: `600`,
                lineHeight: ` 52.229px` /* 117.647% */,
              }}>
              {" "}
              EVEE
            </span>
          </h1>
        </div>
        <div className="pl-[39px] pt-[13px] text-white uppercase">
          <h1
            style={{
              color: `#FFF`,
              fontFamily: `MTT Milano`,
              fontSize: `26.114px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
            }}>
            ​India's Leading One-Way Inter-
            <br />
            City Cab Service Provider
          </h1>
        </div>
        <div>
          <img
            src={group}
            alt=""
            className="absolute bottom-0 left-0 w-[1/3] md:w-[2/3]  "
            style={{
              background: `linear-gradient(199deg, #60A547 49.27%, #D5F5C9 100%)`,
            }}
          />
        </div>
      </div>
      <div
        className=" w-2/3 md:w-2/3 h-full flex flex-col bg-white p-20 justify-between text-center"
        style={{
          borderRadius: `39.171px 0px 0px 39.171px`,
        }}>
        <div className=" pt-[130px] text-center ">
          <h1
            style={{
              color: `#2F313C`,
              fontFamily: `Poppins`,
              fontSize: `36.56px`,
              fontStyle: `normal`,
              fontWeight: `600`,
              lineHeight: `normal`,
            }}>
            Create Account
          </h1>
        </div>
        <div className="flex justify-between md:justify-between md:items-center items-center md:px-[90px] px-[180px]">
          <div
            className="w-[287.257px]
h-[52.229px]  text-[#060606] my-2 font-semibold bg-white p-4 text-center flex items-center justify-center"
            style={{
              borderRadius: `7.834px`,
              border: `1.306px solid #E8E8E8`,
            }}>
            <button className="flex justify-between items-center align-middle">
              <img src={google} alt="" className="h-6 mr-2" />
              Continue with Google
            </button>
          </div>
          <div
            className="w-[287.257px]
h-[52.229px] text-[#060606] my-2 font-semibold bg-white p-4 text-center flex items-center justify-center"
            style={{
              borderRadius: `7.834px`,
              border: `1.306px solid #E8E8E8`,
            }}>
            <button className="flex ">
              <img src={facebook} alt="" className="h-6 mr-2" />
              Continue with FaceBook
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center relative py-2">
          <p className="text-lg abosulte text-black/80 bg-[#f5f5f5]">- OR -</p>
        </div>

        <div className="w-full items-center justify-center flex flex-col">
          <input
            type="email"
            placeholder="Email"
            className="w-[605px] py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
          <input
            type="Password"
            placeholder="Password"
            className="w-[605px] py-4 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
          />
        </div>

        <div className="  justify-center items-center flex flex-col h-[52.229px]">
          <button className="w-[605.851px] bg-[#60A547] my-2 rounded-md p-4 text-center flex items-center justify-center">
            <p className="text-center">Log In</p>
          </button>
        </div>
        <div className="pl-[180px] pt-[32px]">
          <p className="pt-[32px] pb-[117px] pr-[391px] items-center">
            Don't have an Account?
            <a href="/SignUp" className="text-[#60A547]">
              Create an Acount
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
