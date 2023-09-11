import { useState } from "react";
import { Location } from "iconsax-react";
import { Calendar } from "iconsax-react";
import { Clock } from "iconsax-react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Outstation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Tabs
        selectedIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}>
        <TabList className="flex gap-8 justify-center">
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
            ONE WAY
          </Tab>
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
            ROUND TRIP
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
          <div className="  space-y-10  px-3 pt-10">
            <li className="flex  border-b-2 border-[#60A547] gap-[1vw]">
              <Location size="32" color="#727272" />
              <input placeholder="From City" />
            </li>
            <li className="flex border-b-2 border-[#60A547] gap-[1vw]">
              <Location size="32" color="#727272" />
              <input placeholder="To City" />
            </li>
            <div className="w-1/4">
              <ul className="flex gap-4">
                <li className="flex gap-[1vw] flex-grow-0 border-b-2 border-[#60A547]">
                  <Calendar size="32" color="#727272" />
                  <input className="w-[200px]" placeholder="Start Date" />
                </li>
                <li className="flex gap-[1vw] flex-grow-0 border-b-2 border-[#60A547]">
                  <Calendar size="32" color="#727272" />
                  <input className="w-[200px]" placeholder="END DATE" />
                </li>
                <li className="flex gap-[1vw] flex-grow-0 border-b-2 border-[#60A547]">
                  <Clock size="32" color="#727272" />
                  <input className="w-[200px]" placeholder="Time" />
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
      </Tabs>
    </div>
  );
};

export default Outstation;
