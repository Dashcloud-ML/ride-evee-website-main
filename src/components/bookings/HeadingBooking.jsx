const HeadingBooking = () => {
  return (
    <div>
      <div>
        <div className="bg-[#60A547] text-white h-[78px] justify-between items-center flex">
          <p
            className="justify-between items-center pl-[35px] pt-[29px] pb-[29px]"
            style={{
              color: `#FFF`,
              fontFamily: `Lato`,
              fontSize: `16.711px`,
              fontStyle: `normal`,
              fontWeight: `400`,
              lineHeight: `normal`,
            }}>
            Home <i className="fa-solid fa-arrow-right "></i> -&gt; Bookings
          </p>
          <p className="text-center text-2xl justify-center items-center">
            Bookings
          </p>
          <p className="text-center justify-center items-center"></p>
        </div>
      </div>
    </div>
  );
};

export default HeadingBooking;
