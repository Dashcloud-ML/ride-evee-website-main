import Nav from "../bookings/Nav";
import img from "../../assets/confirmed.png";
import Footer from "../Footer";
const Confirmed = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="w-full">
        <h2 className="text-center text-[#60A547] font-bold text-3xl ">
          Sarika Tiwari, your booking from Lucknow is confirmed
        </h2>
        <div className="px-14 py-6">
          <div className="flex rounded-lg gap-32 justify-center items-center py-6 px-20  shadow-2xl">
            <img src={img} alt="" />
            <p className="text-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="my-10">
            <div className="bg-[#60A547] rounded-md text-center py-4 text-3xl text-white">
              Your Booking Details
            </div>
            <div className="p-4 shadow-2xl rounded-lg">
              <div className="flex justify-between   ">
                <div>
                  <h2 className="text-xl font-semibold text-[#00000099]">
                    Itinerary
                  </h2>
                  <div className="text-lg pt-5 ">
                    <p>Lucknow -&gt;</p>
                    <p>Gorakhpur -&gt;</p>
                    <p>Lucknow</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-[#00000099]">
                    Trip Type
                  </h2>
                  <p className="text-lg pt-5 text-center">Road Trip</p>
                </div>
                <div>
                  <h2 className="text-xl text-[#00000099] font-semibold">
                    Pick Up Date
                  </h2>
                  <p className="text-lg pt-5 text-center">23rd July</p>
                </div>
                <div>
                  <h2 className="text-xl text-[#00000099] font-semibold">
                    Car Type
                  </h2>
                  <p className="text-lg pt-5 text-center ">Totyta Etios</p>
                </div>
                <div>
                  <h2 className="text-xl text-[#00000099] font-semibold">
                    Total Fare
                  </h2>
                  <p className="text-lg pt-5 text-center">$230</p>
                </div>
              </div>
            </div>
            <div className="flex pt-14 justify-between gap-5">
              <p className="ps-10 w-1/3 text-xl font-bold">Note - </p>
              <div className="text-lg w-2/3">
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </li>
                <li>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </li>
                <li>
                  When an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries
                </li>
                <li>
                  But also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Confirmed;
