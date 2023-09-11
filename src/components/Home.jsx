// import React from 'react';
import logo from "../assets/logo.png";
import { AiOutlineMenu } from "react-icons/ai";
import car from "../assets/car2.png";
import Image1 from "../assets/seodata-image 1.png";
import Image2 from "../assets/hand-holding-up-a-sprout-svgrepo-com 1.png";
import Image3 from "../assets/driving.png";
import Banner from "../assets/sceenback.png";
import image from "../assets/image 5.png";
import flag from "../assets/flag.png";
import mobile from "../assets/mobile.png";
import people from "../assets/people.png";
import money from "../assets/money-recive.png";
import car1 from "../assets/car.png";
import car2 from "../assets/car-1057 1.png";
import driving from "../assets/driving2.png";
import people1 from "../assets/people2.png";
import money1 from "../assets/moneys.png";
import { Location } from "iconsax-react";
import { Calendar } from "iconsax-react";
import { Clock } from "iconsax-react";
import Nav from "./bookings/Nav";
import Footer from "./Footer";
import BookCab from "./home/BookCab";

const Home = () => {
  return (
    <>
      <Nav></Nav>

      {/*Hero Section  */}
      {/* <div className="mobile:w-auto tablet:w-auto laptop:w-auto desktop:w-auto mobile:p-[150px] tablet:p-[100px] md:p-[75px] deskto:p-[50px] ">
        <div className="box-content h-532px w-1289px justify-between items-center border-2">
          <ul className="flex">
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
          </div>
          <div className="flex ">
            <ul
              className="pt-[50px] pl-[63px] justify-start items-start "
              style={{
                color: `#4F4F4F`,
                fontFamily: `MTT Milano`,
                fontSize: `23.509px`,
                fontStyle: `normal`,
                fontWeight: `500`,
                lineHeight: `normal`,
                textTransform: `uppercase`,
              }}>
              <li className="flex pt-[50px] border-b-2 border-[#60A547] gap-[1vw]">
                <Location size="32" color="#727272" />
                <input placeholder="From City" />
              </li>
              <li className="flex pt-[50px] border-b-2 border-[#60A547] gap-[1vw]">
                <Location size="32" color="#727272" />
                <input placeholder="To City" />
              </li>
              <div>
                <ul className="flex gap-[4vw]">
                  <li className="flex pt-[50px] border-b-2  md:border-b-6 border-[#60A547] gap-[1vw]">
                    <Calendar size="32" color="#727272" />
                    <input placeholder="Date" />
                  </li>
                  <li className="flex pt-[50px] border-b-2  border-[#60A547] gap-[1vw]">
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
            </ul>

            <div className="flex relative bg-gradient-to-b from-[#CDFF34] to-[#E6EB7B] w-[480.492px] h-[490px] rounded-t-lg right-0 ml-auto mb-auto ">
              <img
                src={car}
                alt=""
                className="md:w-auto absolute bottom-0 md:min-w-auto md:min-h-auto w-[623.108px] h-[302.979px] "
              />
            </div>
          </div>
        </div>
      </div> */}
      <BookCab></BookCab>

      {/* <div>
        <div>
          <h1 className="pl-[250px] pt-[92px] pr-[28px] text-[#60A547] text-[44px] font-[800] uppercase">
            ​India's Leading One-Way Inter-City Cab Service Provider
          </h1>
        </div>
        <div className="flex">
          <ul className="flex flex-row">
            <li className="pl-[150px] pt-[139px]">
              <img src={Image1} className="w-[500px] h-[300px]" />
            </li>
            <li className="">
              <img src={Image2} alt="" className="pl-[250px] pt-[121px]" />
              <h2 className="text-[#60A547] font-[500] uppercase pl-[200px] pt-[22px] text-[24px]">
                Return Fare, Not Fair!
              </h2>
              <p className="box-content pl-[200px] text-[20px] uppercase">
                Why Pay for Return Journey <br />
                when you are travelling one-
                <br />
                way? Now get discounted AC
                <br />
                Taxi at just half of the round
                <br />
                trip cost for your one-way travel.
              </p>
            </li>
            <li>
              <img src={Image3} className="pl-[315px] pt-[118px] pr-[201px]" />
              <h2 className="text-[#60A547] font-[500] uppercase pl-[225px] pt-[37px] text-[24px]">
                Return Fare, Not Fair!
              </h2>
              <p className="box-content pl-[225px] text-[20px] uppercase">
                Lucknow | Gorakhpur |<br /> Varanasi | Allahabad | Bareilly
              </p>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="w-full">
        <div>
          <h1 className="text-center text-[#60A547] text-[44px] font-[800] uppercase">
            ​India's Leading One-Way Inter-City Cab Service Provider
          </h1>
        </div>
        <div className=" flex gap-10 justify-center px-10">
          <li>
            <img src={Image1} alt="Image 1" className="w-[500px] h-[300px]" />
          </li>
          <li>
            <img src={Image2} alt="Image 2" className="mx-auto" />
            <h2 className="text-[#60A547] font-semibold uppercase text-2xl mt-4">
              Return Fare, Not Fair!
            </h2>
            <p className="text-[20px] mt-2">
              Why Pay for Return Journey <br />
              when you are traveling one- <br />
              way? Now get discounted AC <br />
              Taxi at just half of the round <br />
              trip cost for your one-way travel.
            </p>
          </li>
          <li>
            <img src={Image3} alt="Image 3" className="mx-auto" />
            <h2 className="text-[#60A547] font-semibold uppercase text-2xl mt-4">
              Return Fare, Not Fair!
            </h2>
            <p className="text-[20px] mt-2">
              Lucknow | Gorakhpur | <br /> Varanasi | Allahabad | Bareilly
            </p>
          </li>
        </div>
      </div>

      <div className="my-5">
        <div
          style={{
            backgroundImage: `url(${Banner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          <div className="bg-gradient-to-r from-black via-[#60A547] to-transparent bg-black bg-opacity-40 h-screen flex ps-20 items-center">
            <div className="w-3/5  text-white space-y-6">
              <h1 className="text-5xl font-bold">
                Why choose AC Bus or AC Train <br /> for your One-way Journey?
              </h1>
              <p className="text-xl">
                Our one-way cab service is cheaper than AC bus and 2-tier AC
                train ticket fares. It reduces your travel time, and you travel
                at your own private space to enjoy your journey. Our one-way
                taxi will come to your doorstep and take you to your desired
                destination. So book your one-way cab from Lucknow to Gorakhpur
                or Varanasi to Bareilly.{" "}
              </p>
              <p className="">Read More...</p>
            </div>
          </div>
        </div>

        {/* <img src={Banner} alt="" className="w-full h-[582px] pt-[151px]" /> */}
      </div>

      {/* Banner2 */}
      <div className="box-content border-2 border-[#60A547] rounded-lg grid grid-cols-3 p-10 pr-0">
        <img className="relative" src={image} />

        <div className="col-span-2">
          <h1
            className="pb-10"
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: `40px`,
              fontStyle: `normal`,
              fontWeight: `800`,
              lineHeight: `normal`,
              textTransform: `uppercase`,
              textAlign: "center",
            }}>
            Why choose Yatri Car Rental?
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-10 mr-20">
            <div>
              <div className="grid grid-cols-3 ">
                <div>
                  <img src={flag} />
                </div>
                <div className="col-span-2">
                  <h3
                    className="mb-2"
                    style={{
                      color: `#60A547`,
                      fontFamily: `MTT Milano,sans-serif`,
                      fontSize: `15px`,
                      fontStyle: `bold`,
                      fontWeight: `700`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Fast response time
                  </h3>
                  <p
                    style={{
                      color: `#000`,
                      fontFamily: `MTT Milano`,
                      fontSize: `14px`,
                      fontStyle: `normal`,
                      fontWeight: `500`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Avail Best Car Rental Service in Lucknow with driver for
                    Local or Outstation within the moment of your call for best
                    car hire experience.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3">
                <div>
                  <img src={people} />
                </div>
                <div className="col-span-2">
                  <h3
                    className="mb-2"
                    style={{
                      color: `#60A547`,
                      fontFamily: `MTT Milano,sans-serif`,
                      fontSize: `15px`,
                      fontStyle: `bold`,
                      fontWeight: `700`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Vast fleet
                  </h3>
                  <p
                    style={{
                      color: `#000`,
                      fontFamily: `MTT Milano`,
                      fontSize: `14px`,
                      fontStyle: `normal`,
                      fontWeight: `500`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    We have all kinds of Car on Rent available like Sedan, Suv,
                    Muv, Premium Sedan, Tampo Traveller etc as per ur
                    requirement
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3">
                <div>
                  <img src={mobile} />
                </div>
                <div className="col-span-2">
                  <h3
                    className="mb-2"
                    style={{
                      color: `#60A547`,
                      fontFamily: `MTT Milano,sans-serif`,
                      fontSize: `15px`,
                      fontStyle: `bold`,
                      fontWeight: `700`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Easy to order
                  </h3>
                  <p
                    style={{
                      color: `#000`,
                      fontFamily: `MTT Milano`,
                      fontSize: `14px`,
                      fontStyle: `normal`,
                      fontWeight: `500`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Easily Book Cab Online with our website or call our customer
                    support team
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-3">
                <div>
                  <img src={money} />
                </div>
                <div className="col-span-2">
                  <h3
                    className="mb-2"
                    style={{
                      color: `#60A547`,
                      fontFamily: `MTT Milano,sans-serif`,
                      fontSize: `15px`,
                      fontStyle: `bold`,
                      fontWeight: `700`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Great tariffs
                  </h3>
                  <p
                    style={{
                      color: `#000`,
                      fontFamily: `MTT Milano`,
                      fontSize: `14px`,
                      fontStyle: `normal`,
                      fontWeight: `500`,
                      lineHeight: `normal`,
                      textTransform: `uppercase`,
                    }}>
                    Rent A Car !Our car hire tariff are very low when compare to
                    other operators in Lucknow. Book online cabs with best
                    prices in Lucknow at Yatri Car Rental
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mainpage-sec5 m-20 text-center">
        <h1
          style={{
            color: `#60A547`,
            fontFamily: `Rounded Mplus 1c`,
            fontSize: `44px`,
            fontStyle: `normal`,
            fontWeight: `800`,
            lineHeight: `normal`,
            textTransform: `uppercase`,
            textAlign: "center",
          }}>
          Why Choose Oneway Cab?
        </h1>
        <div className="grid grid-cols-2 gap-4 leading-10 text-left mt-10">
          <div className="pl-20 ml-20">
            <ul className="list-disc">
              <li>Instant Booking & Confirmation</li>
              <li>Confirmed Booking Immediately</li>
              <li>No Return Fare for One-Way Trip</li>
              <li>Clean & Professional Cab Services</li>
              <li>No Night or Luggage Charges</li>
            </ul>
          </div>
          <div className="pl-20 ml-20">
            <ul className="list-disc">
              <li>Pick-up from your house</li>
              <li>Dedicated Cab just for you</li>
              <li>Drop to your desired destination</li>
              <li>Completed more than 20,000+ One-Way Trips</li>
              <li>Multiple Payment Option including Credit Card.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Banner 4 */}
      <div className="p-5" style={{ backgroundColor: "#000000" }}>
        <h1
          className="p-10 "
          style={{
            color: `#60A547`,
            fontFamily: `Rounded Mplus 1c,sans-serif`,
            fontSize: `44px`,
            fontStyle: `normal`,
            fontWeight: `800`,
            lineHeight: `normal`,
            textTransform: `uppercase`,
            textAlign: "center",
          }}>
          Please read the Terms & Conditions carefully
        </h1>
        <p
          className="pb-10"
          style={{
            color: `#FFF`,
            fontFamily: `MTT Milano,sans-serif`,
            fontSize: `22px`,
            fontStyle: `normal`,
            fontweight: `500`,
            lineHeight: `normal`,
            textTransform: `uppercase`,
            textAlign: "center",
          }}>
          **Above given tariff price does not include TOLL CHARGE, STATE ENTRY
          TAX and DRIVER NIGHT ALLOWANCE, that need to be paid extra + 5% GST on
          it, if required.
        </p>
        <ul
          className="list-disc  ml-10"
          style={{
            color: `#FFF`,
            fontFamily: `MTT Milano,sans-serif`,
            fontSize: `18px`,
            fontStyle: `normal`,
            fontWeight: `500`,
            lineHeight: `normal`,
            textTransform: `uppercase`,
            textAlign: "justify",
          }}>
          <li className="pb-3">
            Your Trip has a KM limit. If your usage exceeds this limit, you will
            be charged for the excess KM used.
          </li>
          <li className="pb-3">
            We promote cleaner fuel and thus your cab can be a CNG vehicle also.
            The driver may need to fill CNG once or more during your trip.
            Please cooperate with the driver.
          </li>
          <li className="pb-3">
            For driving between 09:45 PM to 06:00 AM on any of the nights, an
            Driver Night Allowance will be applicable and is to be paid to the
            driver.
          </li>
          <li className="pb-3">
            Your trip includes one pick up in Pick-up city and one drop to
            destination city. It does not include within city travel.
          </li>
          <li className="pb-3">
            If your Trip has Hill climbs, cab AC may be switched off during such
            climbs.Multiple Payment Option including Credit Card.
          </li>
        </ul>
      </div>

      {/*  */}
      <div>
        <table className="table-auto w-full bg-[#60A547]">
          <thead>
            <tr className="border-b-2  text-black font-medium">
              <th className="border-r-2 text-[22px]">
                <img src={car1} alt="" className="inline" /> Cab Type
              </th>
              <th className="border-r-2 text-[22px]">
                <img src={car2} alt="" className="inline" /> Models Include
              </th>
              <th className="border-r-2 text-[22px]">
                <img src={people1} alt="" className="inline" /> Passesger
              </th>
              <th className="border-r-2 text-[22px]">
                <img src={driving} alt="" className="inline" /> Ideal For
              </th>
              <th className="text-[22px]">
                <img src={money1} alt="" className="inline" /> Fare
              </th>
            </tr>
          </thead>
          <tbody className="text-white text-center">
            <tr className="border-r-2">
              <td className="border-r-2">Ac Sedan</td>
              <td className="border-r-2">Etios, Amaze, Dzire etc.</td>
              <td className="border-r-2">4 Pax</td>
              <td className="border-r-2">
                Comfortable trips with small families
              </td>
              <td className="border-r-2">Rs.11/KM</td>
            </tr>
            <tr>
              <td className="border-r-2">AC Hatchbacks</td>
              <td className="border-r-2">Wagon R, Celerio, Micra etc.</td>
              <td className="border-r-2">4 Pax</td>
              <td className="border-r-2">Budget trips over short distances</td>
              <td className="border-r-2">Rs.11/KM</td>
            </tr>
            <tr>
              <td className="border-r-2">AC SUV</td>
              <td className="border-r-2">Ertiga, Xylo etc.</td>
              <td className="border-r-2">6-7 Pax</td>
              <td className="border-r-2">Premium trips with large families</td>
              <td className="border-r-2">Rs.13/KM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mainpage-sec7 flex">
        <div className="p-10 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.339043541869!2d80.8827836755592!3d26.765460476735264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bf94ebb93769f%3A0xd25d850e74c76635!2sChaudhary%20Charan%20Singh%20International%20Airport!5e0!3m2!1sen!2sin!4v1689820123948!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="p-10">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: `Rounded Mplus 1c`,
              fontSize: `44px`,
              fontStyle: `normal`,
              fontWeight: `800`,
              lineHeight: `normal`,
              textTransform: `uppercase`,
            }}>
            Lucknow and Beyond
          </h1>
          <h3
            className="mb-5 pb-5"
            style={{
              color: `#60A547`,
              fontFamily: `Rounded Mplus 1c`,
              fontSize: `24px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `uppercase`,
            }}>
            We operate in 5 Cities of Uttar Pradesh
          </h3>
          <p
            className="mb-5 pb-5"
            style={{
              color: `#000`,
              fontFamily: `Rounded Mplus 1c`,
              fontSize: `16px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
            }}>
            We are Yatri Car Rental, an cab booking aggregator, providing
            customers with reliable and premium{" "}
            <span
              style={{
                color: `#60A547`,
                fontFamily: `Rounded Mplus 1c`,
                fontSize: `16px`,
                fontStyle: `normal`,
                fontWeight: `500`,
                lineHeight: `normal`,
                textTransform: `capitalize`,
                textDecorationLine: "underline",
              }}>
              One way or Round Trip Outstation and Local Car Rental Service
            </span>
            . Over the last decade, we are uniquely placed as the chauffeur
            driven car rental company in India in terms of geographical reach.{" "}
          </p>
          <p
            style={{
              color: `#000`,
              fontFamily: `Rounded Mplus 1c`,
              fontSize: `16px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
            }}>
            Planning a weekend getaway? Our outstation cab services will help
            you explore the best destinations, visit all the must-see places and
            taste the best local food. Did you just land at an Airport or
            Railway Station closest to your destination? No problem! You can use
            our{" "}
            <span
              style={{
                color: `#60A547`,
                fontFamily: `Rounded Mplus 1c`,
                fontSize: `16px`,
                fontStyle: `normal`,
                fontWeight: `500`,
                lineHeight: `normal`,
                textTransform: `capitalize`,
                textDecorationLine: "underline",
              }}>
              Airport Oneway Taxi in Lucknow,
            </span>{" "}
            Gorakhpur, Varanasi, Allahabad the transit pick up service to cover
            the last mile. We'll get you to your destination and show you some
            of the best sights along the way. Decided to take a personal day and
            spend the whole day exploring your city? Our Car Rental packages
            will help you explore the best places to eat and drink at, some of
            the city's majestic monuments, greenest parks and oldest temples.
            You'll never have to worry about an empty travel itinerary again.
            Are you an offbeat traveller? Do you just hit the road and decide to
            take it from there? We offer one-way drops on several routes, in
            case you only want to be dropped to a destination and don't want to
            look back.{" "}
          </p>
        </div>
      </div>

      {/*  */}

      <Footer></Footer>
    </>
  );
};

export default Home;
