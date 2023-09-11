import { useEffect, useState } from "react";
import HeadingBooking from "./HeadingBooking";
import Nav from "./Nav";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiCheckCircle } from "react-icons/fi";
import Footer from "../Footer";

const Bookings = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("booking.json")
      .then((res) => res.json())
      .then((data) => {
        setBooking(data);
      });
  }, []);
  return (
    <div className="w-full">
      <Nav />
      <HeadingBooking />
      <div className="w-full py-7">
        <Tabs
          className="flex"
          selectedIndex={activeIndex}
          onSelect={(index) => setActiveIndex(index)}>
          <TabList className="w-1/6 shadow-xl h-screen px-4 space-y-4">
            <Tab
              className={`no-underline flex justify-between items-center cursor-pointer text-[#60A547] py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
              Upcoming <AiOutlineArrowRight />
            </Tab>
            <Tab
              className={`no-underline flex justify-between items-center cursor-pointer text-[#60A547] py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
              Cancelled <AiOutlineArrowRight />
            </Tab>
            <Tab
              className={`no-underline flex justify-between items-center text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 2 ? "active-tab" : "unactive-tab"}`}>
              Completed <AiOutlineArrowRight />
            </Tab>
          </TabList>

          <div className="w-5/6  px-4 justify-start">
            <div className=" px-3 justify-start">
              <TabPanel className="w-full ">
                <div className="flex text-lg items-center rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 px-3">
                  <h1 className="font-semibold">
                    You do not have any upcoming bookings with us. Do you want
                    to book a taxi?
                  </h1>
                  <button className="bg-[#60A547] rounded-lg text-white py-2 px-3">
                    Book Now
                  </button>
                </div>
              </TabPanel>

              <TabPanel className="w-full">
                {booking.map(
                  (entry) =>
                    entry.status === "Cancelled" && (
                      <div
                        key={entry._id}
                        className=" rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 my-4 px-3">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="inline-block">
                              <div className="bg-[#60A547] text-xl text-white w-20 h-20 flex items-center justify-center rounded-full font-semibold">
                                <p className="m-0 px-1">{entry.day}</p>
                                <p className="m-0">{entry.month}</p>
                              </div>
                            </div>

                            <div>
                              <h1 className="font-semibold">
                                {entry.location}
                                {entry.distance}
                              </h1>
                              <h1 className="font-semibold">{entry.area}</h1>
                              <p className="text-[#60A547] ">
                                Advanced Paid : Rs. {entry.paid}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h1 className="font-semibold text-end">
                              TRIP ID {entry.tripid}
                            </h1>
                            <p>{entry.from}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </TabPanel>

              <TabPanel className="w-full">
                {booking.map(
                  (entry) =>
                    entry.status === "Completed" && (
                      <div
                        key={entry._id}
                        className=" rounded-lg shadow-2xl bg-[#FFFFFF] justify-between py-6 my-4 px-3">
                        <div className="flex justify-between">
                          <div className="flex gap-4">
                            <div className="bg-[#60A547] text-white flex items-center rounded-full p-5 text-4xl font-semibold">
                              <FiCheckCircle />
                            </div>
                            <div>
                              <h1 className="font-semibold">
                                {entry.location}
                                {entry.distance}
                              </h1>
                              <h1 className="font-semibold">{entry.area}</h1>
                              <p className="text-[#60A547] ">
                                Advanced Paid : Rs. {entry.paid}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <h1 className="font-semibold text-end">
                              TRIP ID {entry.tripid}
                            </h1>
                            <p>{entry.from}</p>
                          </div>
                        </div>
                      </div>
                    )
                )}
              </TabPanel>
            </div>
          </div>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Bookings;
