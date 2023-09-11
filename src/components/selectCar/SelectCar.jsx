import Footer from "../Footer";
import Nav from "../bookings/Nav";
import img from "../../assets/facities.png";

const SelectCar = () => {
  return (
    <div className="w-full">
      <Nav />
      <div>
        <div className="flex justify-between ps-10 pe-24 pt-8 bg-[#60A547]">
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none">
              <path
                d="M4.83326 9.66676H3.62493M25.3749 9.66676H24.1666M14.4999 3.62509V6.04176M12.6874 6.04176H16.3124M7.24993 18.1251H10.8749M18.1249 18.1251H21.7499M18.7412 3.41968H10.2587C7.24992 3.41968 6.58534 4.91801 6.19868 6.75468L4.83326 13.2918H24.1666L22.8012 6.75468C22.4145 4.91801 21.7499 3.41968 18.7412 3.41968ZM26.5712 23.9493C26.7041 25.363 25.5683 26.5834 24.1183 26.5834H21.8466C20.5416 26.5834 20.3603 26.0276 20.1308 25.3388L19.8891 24.6138C19.5508 23.623 19.3333 22.9584 17.5933 22.9584H11.4066C9.66659 22.9584 9.41284 23.7076 9.11076 24.6138L8.86909 25.3388C8.63951 26.0276 8.45826 26.5834 7.15326 26.5834H4.88159C3.43159 26.5834 2.29576 25.363 2.42868 23.9493L3.10534 16.5905C3.27451 14.778 3.62493 13.2918 6.79076 13.2918H22.2091C25.3749 13.2918 25.7253 14.778 25.8945 16.5905L26.5712 23.9493Z"
                stroke="black"
                strokeWidth="1.8125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold">Booking Type</p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none">
              <path
                d="M8 2.58325V5.58325M16 2.58325V5.58325M3.5 9.67325H20.5M21 9.08325V17.5833C21 20.5833 19.5 22.5833 16 22.5833H8C4.5 22.5833 3 20.5833 3 17.5833V9.08325C3 6.08325 4.5 4.08325 8 4.08325H16C19.5 4.08325 21 6.08325 21 9.08325Z"
                stroke="black"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6949 14.2832H15.7039M15.6949 17.2832H15.7039M11.9949 14.2832H12.0049M11.9949 17.2832H12.0049M8.29395 14.2832H8.30395M8.29395 17.2832H8.30395"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold">Pickup Date and Time</p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold">Duration</p>
          </div>
          <div className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none">
              <path
                d="M12 12V9M12 22V19M9.00002 22H15M17.22 2H8.96002C8.56002 2 8.18002 2.14 7.87002 2.38L5.68002 4.13C4.80002 4.83 4.80002 6.16 5.68002 6.86L7.87002 8.61C8.18002 8.86 8.57002 8.99 8.96002 8.99H17.22C18.19 8.99 18.97 8.21 18.97 7.24V3.74C18.97 2.78 18.19 2 17.22 2ZM6.80002 12H15.06C15.46 12 15.84 12.14 16.15 12.38L18.34 14.13C19.22 14.83 19.22 16.16 18.34 16.86L16.15 18.61C15.84 18.86 15.45 18.99 15.06 18.99H6.80002C5.83002 18.99 5.05002 18.21 5.05002 17.24V13.74C5.05002 12.78 5.83002 12 6.80002 12Z"
                stroke="black"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-bold">Trip Type</p>
          </div>
        </div>
        <div className="flex border-b-2 border-[#000000, #00000000]  text-white text-center justify-around py-4 bg-[#60A547]">
          <p>Local</p>
          <div className="inline-flex gap-7">
            <p>12/06/2023</p>
            <p>01: 25 PM</p>
          </div>
          <p>2 Hour 16 Mins</p>
          <p>One Way</p>
        </div>
        <div className="bg-[#60A547] px-5 py-4 flex justify-between">
          <h3 className="font-bold">
            Route:{" "}
            <span className="font-normal text-white">
              Lucknow, Uttar Pradesh, India -&gt; Kanpur, Uttar Pradesh, India
            </span>{" "}
          </h3>
          <button className="bg-white rounded-md px-2 py-1 font-semibold">
            Modify{" "}
          </button>
        </div>
        <div className="p-12">
          <div className="flex justify-between p-5 border-2 rounded-2xl border-[#60A547]">
            <div className="inline-flex gap-5 items-center">
              <img
                className="w-48"
                src="https://auto.economictimes.indiatimes.com/files/retail_files/dzire-1502361962-prod-var.png"
                alt=""
              />
              <div>
                <h3 className="text-[#60A547] text-xl font-semibold">Dzire</h3>
                <h4 className="text-xl">Or Similar (4+1)</h4>
              </div>
            </div>
            <div>
              <h2 className="text-[#60A547] text-center font-semibold text-xl">
                Facilities
              </h2>
              <img src={img} alt="" />
            </div>
            <div className="my-auto">
              <h2 className="font-bold text-xl">Rs. 2560/-</h2>
              <button
                onClick={() => window.my_modal_3.showModal()}
                className="text-[#60A547]">
                Fare Details &gt;&gt;
              </button>
              <br />
              <button className="bg-[#60A547] text-white rounded-md px-4 mt-2 py-1">
                Select Cab
              </button>
            </div>
          </div>
          <dialog id="my_modal_3" className="modal ">
            <form
              method="dialog"
              className="modal-box max-w-4xl border-2 rounded-2xl border-[#60A547] ">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-6 text-2xl text-[#60A547]">
                ✕
              </button>
              <h3 className="font-bold text-[#60A547] text-2xl text-center">
                Fare Summary
              </h3>
              <p className="py-4 font-bold">Fare Breakup:</p>
              <div>
                <div className="flex justify-between">
                  <p>Estimated Amount</p>
                  <p>₹ 2400</p>
                </div>
                <div className="flex justify-between">
                  <p>Covered Kms</p>
                  <p>89 Km</p>
                </div>
                <div className="flex justify-between">
                  <p>GST (5%)</p>
                  <p>₹ 120</p>
                </div>
                <div className="flex justify-between">
                  <p>Total Cost</p>
                  <p>₹ 2520</p>
                </div>
              </div>
              <div>
                <p className="py-4 font-bold">Additional Charges ( If any ):</p>
                <li>Usable Oneway Limit 89 Kms</li>
                <li>After 89 Extra Charges ₹. 17 Per KM</li>
              </div>
              <div>
                <p className="py-4 font-bold">Inclusion:</p>
                <li>Vehicle and fuel charges included</li>
                <li>Toll included</li>
                <li>5% GST Included</li>
              </div>
              <div>
                <p className="py-4 font-bold">Exclusion :</p>
                <li>
                  For driver Night allowance Rs. 300.00 will be applicable from
                  10:00 PM to 06:00 AM
                </li>
                <li>State Tax and Parking will be charge if applicable.</li>
              </div>
              <div>
                <p className="py-4 font-bold">Notes :</p>
                <li>
                  Kms & Time will be count from pickup location to drop location
                </li>
                <li>
                  You will receive the chauffeur details in your email & sms at
                  least 2 hours prior to the pick up time
                </li>
                <li>
                  Waiting charges @ Rs. 150/hr after 30 mins. Billed on Hourly
                  Basis.
                </li>
                <li>
                  AC will remain switch off in hill areas & when the vehicle is
                  standing still (parked)
                </li>
                <li>Online Distance Charges are approximate</li>
                <li>
                  Your trip includes one pickup in pickup city and one drop to
                  destination city. It does not include within city travel.
                </li>
              </div>
            </form>
          </dialog>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SelectCar;
