import logo from "../assets/logo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-[#2F313C] space-y-8 py-10">
        <img className="mx-auto" src={logo} alt="" />
        <div className="flex justify-center text-white gap-7">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <h2>Services</h2>
          <h2>News</h2>
          <a href="/contact">Contact</a>
        </div>
        <div className="flex justify-center items-center text-white gap-7">
          <h2 className="text-white text-xl">Newsletter</h2>
          <div className="flex items-center relative">
            <input
              className="bg-white rounded-3xl text-black px-10 h-10"
              type="email"
              name=""
              id=""
              placeholder="Email"
            />
            <button
              className="bg-[#2F313C] text-white absolute right-0 rounded-e-3xl px-6 py-2 border-white border-2 hover:bg-[#4a9c2a] transition-colors h-10"
              type="submit">
              <AiOutlineArrowRight className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="text-center text-white">
          <p>All Copyrights are reserved by RIDE EVEE</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
