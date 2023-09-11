import "./About.css";
import flag from "../../assets/flag_black.png";
import bg from "../../assets/aboutus.png";
import Nav from "../bookings/Nav";
import Footer from "../Footer";

const About = () => {
  return (
    <div className="aboutpage-container bg-[#FCFDF2] w-full">
      <Nav></Nav>
      <div
        className="flex uppercase flex-col space-y-8 justify-center items-center h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <h1 className="text-7xl text-[#5BC435] font-bold ">About Us?</h1>
        <h3 className="text-3xl font-semibold text-white">
          Learn more about our company and what we do.
        </h3>
      </div>
      <div className="flex justify-center  gap-10 py-10 px-20">
        <img
          className="w-80 rounded-md"
          src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
          alt=""
        />
        <div className="space-y-7">
          <h2 className="text-5xl uppercase font-bold text-[#5BC435]">
            About Us
          </h2>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="text-center space-y-7 pb-10">
        <h3 className="text-5xl uppercase font-bold text-[#5BC435]">
          Our Visions
        </h3>
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="flex justify-around">
          <img
            className="w-80 rounded-md"
            src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
            alt=""
          />{" "}
          <img
            className="w-80 rounded-md"
            src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
            alt=""
          />{" "}
          <img
            className="w-80 rounded-md"
            src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center  gap-10 py-10 px-20">
        <img
          className="w-80 rounded-md"
          src="https://media.istockphoto.com/id/1402604850/photo/the-word-about-us-on-wooden-cubes-business-communication-and-information.webp?b=1&s=170667a&w=0&k=20&c=M1zgL2pGwZ_g3cwmOvdMtzz92PlTLdihv6_wgaW1QZc="
          alt=""
        />
        <div className="space-y-7">
          <h2 className="text-5xl uppercase font-bold text-[#5BC435]">
            Our Team
          </h2>
          <p className="text-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <div className="text-center space-y-7 pb-10">
        <h3 className="text-5xl uppercase font-bold text-[#5BC435]">
          Services We PROVIDE
        </h3>
        <p className="text-xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="grid grid-cols-2 gap-10 px-24 justify-items-center">
          <div className="bg-white shadow-lg space-y-6 rounded-md p-6">
            <h3 className="text-2xl uppercase font-bold text-[#5BC435]">
              Oneway Cab Service in Lucknow
            </h3>
            <p>
              Oneway Cab Platform for the greatest One Way travel experience!
              Remove return travel fees to simplify and save. Make your one-way
              trip easy with this great service. Try it today!
            </p>
          </div>
          <div className="bg-white shadow-lg space-y-6 rounded-md p-6">
            <h3 className="text-2xl uppercase font-bold text-[#5BC435]">
              AC Bus & Train Passenger One-Way Cab Solution
            </h3>
            <p>
              A one-way travel between Lucknow, Gorakhpur, Allahabad, Varanasi,
              or Bareilly? Stop looking! Our one-way taxi service is the most
              convenient and cheapest method to travel. AC Bus One-Way Cab
              Service read more.....
            </p>
          </div>
          <div className="bg-white shadow-lg space-y-6 rounded-md p-6">
            <h3 className="text-2xl uppercase font-bold text-[#5BC435]">
              Rent a Car in Lucknow
            </h3>
            <p>
              Lucknow, Uttar Pradesh's capital and "the city of Nawabs,"
              situated on the Gomti River. Suryavanshi rulers founded the city.
              Lucknow retains its old-world beauty and splendour despite rapid
              modernity. Lucknow features several stunning Awadh-style monuments
              and structures. Read More...
            </p>
          </div>
          <div className="bg-white shadow-lg space-y-6 rounded-md p-6">
            <h3 className="text-2xl uppercase font-bold text-[#5BC435]">
              Luxury Cars for Rent in Lucknow
            </h3>
            <p>
              Yatri Car Rentals has a collection of brand-new luxury automobiles
              in Lucknow to assist you travel in style. Luxury cars provide
              last-mile connection and luxury wherever you go. We hire Mercedes
              E class, Toyota Camry. Read more...
            </p>
          </div>
        </div>
        <div className="w-1/2  mx-auto px-10">
          <div className="bg-white shadow-lg space-y-6 rounded-md p-6 mx-auto">
            <h3 className="text-2xl uppercase font-bold text-[#5BC435]">
              Car Hire in Lucknow
            </h3>
            <p>
              Tourists select Lucknow vehicle rental for a stress-free trip
              since Lucknow offers many intriguing sights. Yatricabs's
              easy-to-use site lets you reserve Lucknow car rentals in minutes.
              Living in Lucknow and want to visit neighbouring places? Read
              More...
            </p>
          </div>
        </div>
      </div>

      {/* <div className="aboutpage-sec1">
        <div className="sec1-inner">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "96px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
            }}>
            About US ?
          </h1>
          <h6
            style={{
              color: "#2F313C",
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "26px",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "normal",
              textTransform: "uppercase",
            }}>
            Learn more about our company and what we do.
          </h6>
        </div>
      </div> */}
      {/* <div className="aboutpage-sec2">
        <div class="m-14 p-14" className="para1">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "left",
            }}>
            Oneway Cab Service in Lucknow
          </h1>
          <p
            style={{
              color: `#60A547`,
              fontFamily: `MTT Milano`,
              fontSize: `26px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
              textAlign: "justify",
            }}>
            Oneway Cab Platform for the greatest One Way travel experience!
            Remove return travel fees to simplify and save. Make your one-way
            trip easy with this great service. Try it today!
          </p>
        </div>

        <div class="m-14 p-14" className="para2">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "right",
            }}>
            AC Bus & Train Passenger One-Way Cab Solution
          </h1>
          <p
            style={{
              color: `#60A547`,
              fontFamily: `MTT Milano`,
              fontSize: `26px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
              textAlign: "right",
            }}>
            A one-way travel between Lucknow, Gorakhpur, Allahabad, Varanasi, or
            Bareilly? Stop looking! Our one-way taxi service is the most
            convenient and cheapest method to travel. AC Bus One-Way Cab
            Service, Our professional drivers and large selection of cars assure
            a safe and enjoyable ride. Book a taxi now and travel stress-free.
          </p>
        </div>

        <div class="m-14 p-14" className="para3">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "left",
            }}>
            Luxury Cars for Rent in Lucknow
          </h1>
          <p
            style={{
              color: `#60A547`,
              fontFamily: `MTT Milano`,
              fontSize: `26px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
              textAlign: "justify",
            }}>
            Yatri Car Rentals has a collection of brand-new luxury automobiles
            in Lucknow to assist you travel in style. Luxury cars provide
            last-mile connection and luxury wherever you go. We hire Mercedes E
            class, Toyota Camry, and Toyota Corolla luxury automobiles. Luxury
            automobile rental in Lucknow guarantees expert chauffeurs and
            quality services. Airport, outstation, and local luxury cabs may be
            ordered. We will pamper you.
          </p>
        </div>

        <div class="m-14 p-14" className="para5">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "right",
            }}>
            Rent a Car in Lucknow
          </h1>
          <p
            style={{
              color: `#60A547`,
              fontFamily: `MTT Milano`,
              fontSize: `26px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
              textAlign: "right",
            }}>
            Lucknow, Uttar Pradesh's capital and "the city of Nawabs," situated
            on the Gomti River. Suryavanshi rulers founded the city. Lucknow
            retains its old-world beauty and splendour despite rapid modernity.
            Lucknow features several stunning Awadh-style monuments and
            structures. Travellers could hire a local automobile in Lucknow to
            see historical monuments and renowned marketplaces. For a
            stress-free travel, hire a vehicle in Lucknow.
          </p>
        </div>
        <div class="mt-14 ml-14 mr-14 p-14 pb-20" className="para5">
          <h1
            style={{
              color: `#60A547`,
              fontFamily: "Rounded Mplus 1c,sans-serif",
              fontSize: "40px",
              fontStyle: "normal",
              fontWeight: "800",
              lineHeight: "normal",
              textTransform: "uppercase",
              textAlign: "left",
            }}>
            Car Hire in Lucknow
          </h1>
          <p
            style={{
              color: `#60A547`,
              fontFamily: `MTT Milano`,
              fontSize: `26px`,
              fontStyle: `normal`,
              fontWeight: `500`,
              lineHeight: `normal`,
              textTransform: `capitalize`,
              textAlign: "justify",
            }}>
            Yatri Car Rentals has a collection of brand-new luxury automobiles
            in Lucknow to assist you travel in style. Luxury cars provide
            last-mile connection and luxury wherever you go. We hire Mercedes E
            class, Toyota Camry, and Toyota Corolla luxury automobiles. Luxury
            automobile rental in Lucknow guarantees expert chauffeurs and
            quality services. Airport, outstation, and local luxury cabs may be
            ordered. We will pamper you.
          </p>
        </div>
      </div> */}

      <div
        class="grid grid-cols-3 gap-9 p-14"
        style={{
          background: "#60A547",
        }}>
        <div className="aboutpage-logo">
          <img src={flag} />
          <div class="pl-4">
            <h1
              style={{
                color: "#2F313C",
                fontFamily: "MTT Milano,sans-serif",
                fontSize: "30px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}>
              RIDE EVEE
            </h1>
            <h6
              class="mt-10"
              style={{
                color: "#2F313C",
                fontFamily: "MTT Milano",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "700",
                lineHeight: "normal",
              }}>
              The world famous EV Cabs of Lucknow, India
            </h6>
          </div>
        </div>
        <div class="col-span-2">
          <p>we are a professional Indian taxi company.</p>
          <p>
            Yatri Cabs is operating in Lucknow and providing a high class
            travelling experience to their customers. We offer latest facilities
            to our customers, desired in a world class car rental service. We
            own the most well maintained fleet of cars equipped with all the
            modern facilities. Our car rental services can be easily availed
            from airport, railway stations, busterminals, hotels or homes within
            moments of contacting us. We arecapable of dropping you at your
            desired destination in minimum course oftime.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
