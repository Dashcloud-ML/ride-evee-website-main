import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import Nav from "../bookings/Nav";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import Footer from "../Footer";

const ContactUs = () => {
  return (
    <div className="w-full">
      <Nav></Nav>
      <div className="bg-[#FEFFF5] p-3">
        <div className="flex">
          <div></div>
          <div className="w-2/5 relative overflow-hidden flex flex-col justify-between h-auto bg-[#2F313C] rounded-lg text-white p-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold">Contact Us</h2>
              <p className="text-xl">Say something to start a live chat!</p>
            </div>
            <div className="space-y-2">
              <div className="inline-flex text-xl gap-3 items-center">
                <BiSolidPhoneCall />
                <p>+1012 3456 789</p>
              </div>
              <p></p>
              <div className="inline-flex text-xl gap-3 items-center">
                <MdEmail />
                <p>demo@gmail.com</p>
              </div>
              <p></p>
              <div className="inline-flex text-xl gap-3 items-center">
                <HiLocationMarker />
                <p>
                  132 Dartmouth Street Boston,
                  <br /> Massachusetts 02156 United States
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-4">
                <div className="p-2  rounded-full text-2xl bg-[#60A547]">
                  <AiOutlineTwitter />
                </div>
                <div className="p-2 text-black rounded-full text-2xl bg-white">
                  <AiOutlineInstagram />
                </div>
                <div className="p-2 rounded-full text-2xl bg-[#60A547]">
                  <BsDiscord />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0">
              <div className="relative z-40">
                <svg
                  className="opacity-40 absolute bottom-8 right-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="125"
                  height="125"
                  viewBox="0 0 138 138"
                  fill="none">
                  <circle cx="69" cy="69" r="69" fill="#60A547" />
                </svg>
                <svg
                  className="opacity-40 absolute -bottom-5 -right-5 z-40"
                  xmlns="http://www.w3.org/2000/svg"
                  width="145"
                  height="145"
                  viewBox="0 0 138 138"
                  fill="none">
                  <circle cx="69" cy="69" r="69" fill="#60A547" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-3/5 ">
            <form className="w-full px-8 pt-6 pb-8 mb-4">
              <div className="flex gap-7">
                <div className="mb-4 w-1/2">
                  <label
                    className="block ps-2 font-bold mb-2"
                    htmlFor="first-name">
                    First Name
                  </label>
                  <input
                    className="bg-[#FEFFF5] border-b-2 border-[#8D8D8D] w-full py-2 px-3 placeholder:text-black "
                    id="first-name"
                    type="text"
                    placeholder="First Name"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <label
                    className="block ps-2 font-bold mb-2"
                    htmlFor="last-name">
                    Last Name
                  </label>
                  <input
                    className="bg-[#FEFFF5] border-b-2 border-[#8D8D8D] w-full py-2 px-3 placeholder:text-black "
                    id="last-name"
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="flex gap-7">
                <div className="mb-6  w-1/2">
                  <label className="block ps-2 font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="bg-[#FEFFF5] border-b-2 border-[#8D8D8D] w-full py-2 px-3 placeholder:text-black "
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-6 w-1/2">
                  <label
                    className="block ps-2 font-bold mb-2"
                    htmlFor="phone-number">
                    Phone Number
                  </label>
                  <input
                    className="bg-[#FEFFF5] border-b-2 border-[#8D8D8D] w-full py-2 px-3 placeholder:text-black "
                    id="phone-number"
                    type="text"
                    placeholder="Phone Number"
                  />
                </div>
              </div>

              <div className="mb-6 ps-2">
                <label className="block  font-bold mb-2" htmlFor="subject">
                  Select Subject
                </label>
                <FormControl component="fieldset">
                  <RadioGroup
                    aria-label="subject"
                    name="subject"
                    row // If you want the radio buttons in a row
                  >
                    <FormControlLabel
                      value="general-inquiry"
                      control={<Radio />}
                      label="General Inquiry"
                    />
                    <FormControlLabel
                      value="other-subject"
                      control={<Radio />}
                      label="Other Subject"
                    />
                    <FormControlLabel
                      value="another-subject"
                      control={<Radio />}
                      label="Another Subject"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="mb-6">
                <label className="block ps-2 font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <input
                  className="bg-[#FEFFF5] border-b-2 border-[#8D8D8D] w-full py-2 px-3 placeholder:text-black "
                  rows={4}
                  placeholder="Your Message"
                  defaultValue={""}
                />
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-[#60A547] text-white text-xl font-bold py-2 px-4 rounded "
                  type="button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
