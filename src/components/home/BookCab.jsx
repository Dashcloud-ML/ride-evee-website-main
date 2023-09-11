import { Location } from "iconsax-react";
import { Calendar } from "iconsax-react";
import { Clock } from "iconsax-react";
import car from "../../assets/car2.png";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { useState } from "react";
import { AiFillCar } from "react-icons/ai";
import { BiSolidBuildings } from "react-icons/bi";
import { BsAirplaneEngines } from "react-icons/bs";
import Outstation from "./Outstation";
import AirportTransfer from "./AirportTransfer";
const BookCab = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full">
      <div className=" justify-between py-10 px-6 items-center border-2">
        {/* <ul className="flex">
            <li className="px-4 hover:bg-[#60A547]  w-[179px] h-[70px] text-center align-middle">
              <h1 className="align-middle mt-6 text-[18px] group-hover:text-[#FFF]">
                Local
              </h1>
            </li>
            <li className="px-4 hover:bg-[#60A547] w-[179px] h-[70px] text-center align-middle">
              <h1 className="align-middle mt-6 text-[18px] group-hover:text-[#FFF]">
                Outstation
              </h1>
            </li>
            <li className="px-4 hover:bg-[#60A547] w-[179px] h-[70px] text-center align-middle">
              <h1 className="align-middle mt-6 text-[18px] hover:text-[#FFF]">
                Airpot Transfer
              </h1>
            </li>
          </ul>
          <div>
            <ul className="flex pt-[40px] pl-[161px] gap-[8vw]">
              <li className="border-2 border-[#60A547] w-[165px] h-[53px] rounded-sm">
                <button className="rounded-[5px] hover:bg-[#60A547] w-[154px] h-[45px] ">
                  OneWay
                </button>
              </li>
              <li className="border-2 border-[#60A547] w-[165px] h-[53px] rounded-sm">
                <button className="rounded-[5px] hover:bg-[#60A547] w-[154px] h-[45px]">
                  RoundTrip
                </button>
              </li>
            </ul>
          </div> */}
        <div className="flex shadow-xl justify-center ">
          <ul
            className="justify-start items-start "
            style={{
              color: `#4F4F4F`,
              fontFamily: `MTT Milano`,
              fontSize: `23.509px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `uppercase`,
            }}>
            <Tabs
              selectedIndex={activeIndex}
              onSelect={(index) => setActiveIndex(index)}>
              <TabList className="flex gap-8 justify-center">
                <Tab
                  className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <AiFillCar /> Local
                  </div>
                </Tab>
                <Tab
                  className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <BiSolidBuildings /> Outstation
                  </div>
                </Tab>
                <Tab
                  className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 2 ? "active-tab" : "unactive-tab"}`}>
                  <div className="flex gap-3 items-center">
                    <BsAirplaneEngines /> Airport Transfer
                  </div>
                </Tab>
              </TabList>

              <TabPanel className="w-full">
                <div className="text-center  space-y-10  px-3 spa pt-10">
                  <li className="flex  border-b-2 border-[#60A547] gap-[1vw]">
                    <Location size="32" color="#727272" />
                    <input placeholder="From City" />
                  </li>
                  <li className="flex border-b-2 border-[#60A547] gap-[1vw]">
                    <Location size="32" color="#727272" />
                    <input placeholder="To City" />
                  </li>
                  <div>
                    <ul className="flex gap-[4vw]">
                      <li className="flex  border-b-2  md:border-b-6 border-[#60A547] gap-[1vw]">
                        <Calendar size="32" color="#727272" />
                        <input placeholder="Date" />
                      </li>
                      <li className="flex border-b-2  border-[#60A547] gap-[1vw]">
                        <Clock size="32" color="#727272" />
                        <input placeholder="Time" />
                      </li>
                    </ul>
                  </div>
                  <div className="justify-start items-start pt-[40px] ">
                    <button className="justify-start items-baseline bg-[#60A547] w-[760px] h-[85px] ml-0">
                      <p
                        style={{
                          color: `#FFF`,
                          fontFamily: `MTT Milano`,
                          fontSize: `36px`,
                          fontStyle: `normal`,
                          fontWeight: `500`,
                          lineHeight: `normal`,
                        }}>
                        Book Your Cab Now !
                      </p>
                    </button>
                  </div>
                </div>
              </TabPanel>

              <TabPanel className="w-full">
                <div className=" px-3 pt-10">
                  <Outstation></Outstation>
                </div>
              </TabPanel>
              <TabPanel className="w-full">
                <div className=" px-3 pt-10">
                  <AirportTransfer />
                </div>
              </TabPanel>
            </Tabs>
          </ul>

          {/* <div className="flex bg-gradient-to-b from-[#CDFF34] to-[#E6EB7B]  rounded-t-lg right-0 h-[350px] ml-auto mb-auto ">
              <img src={car} alt="" className=" " />
            </div> */}
          <div className="flex relative bg-gradient-to-b from-[#CDFF34] to-[#E6EB7B] w-[480.492px] h-[490px] rounded-t-lg right-0 ml-auto mb-auto ">
            <img
              src={car}
              alt=""
              className="md:w-auto absolute bottom-0 md:min-w-auto md:min-h-auto w-[623.108px] h-[302.979px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCab;
