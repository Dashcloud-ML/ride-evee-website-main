// eslint-disable-next-line react/prop-types
const ModalProfile = ({ open }) => {
  console.log(open);

  return (
    open && (
      <div className="absolute right-10 top-28 z-50">
        <div className="bg-white px-7 py-10 rounded-lg  shadow-md">
          <img
            className="w-28 h-28 rounded-full mx-auto"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt=""
          />
          <h2 className="text-center py-5 text-xl font-semibold">
            Ayush Bansal
          </h2>
          <div className="flex gap-5">
            <a href="/account" className="bg-white rounded-md p-2 shadow-md">
              <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                  d="M5.80432 16V10.0747C5.80432 9.62623 5.80432 9.402 5.89159 9.23072C5.96836 9.08005 6.09086 8.95756 6.24152 8.88079C6.4128 8.79352 6.63703 8.79352 7.08547 8.79352H9.32749C9.77593 8.79352 10.0002 8.79352 10.1714 8.88079C10.3221 8.95756 10.4446 9.08005 10.5214 9.23072C10.6086 9.402 10.6086 9.62623 10.6086 10.0747V16M7.41993 1.39808L1.9892 5.62198C1.62618 5.90433 1.44467 6.0455 1.3139 6.2223C1.19807 6.37892 1.11178 6.55535 1.05928 6.74293C1 6.95469 1 7.18464 1 7.64454V13.4377C1 14.3346 1 14.783 1.17455 15.1256C1.32808 15.4269 1.57307 15.6719 1.8744 15.8255C2.21697 16 2.66541 16 3.5623 16H12.8507C13.7475 16 14.196 16 14.5386 15.8255C14.8399 15.6719 15.0849 15.4269 15.2384 15.1256C15.413 14.783 15.413 14.3346 15.413 13.4377V7.64454C15.413 7.18464 15.413 6.95469 15.3537 6.74293C15.3012 6.55535 15.2149 6.37892 15.0991 6.2223C14.9683 6.0455 14.7868 5.90433 14.4238 5.62198L8.99303 1.39808C8.71172 1.17928 8.57106 1.06988 8.41575 1.02783C8.2787 0.990724 8.13426 0.990724 7.99721 1.02783C7.8419 1.06988 7.70124 1.17928 7.41993 1.39808Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Account Setting</p>
            </a>
            <a href="/bookings" className="bg-white rounded-md p-2 shadow-md">
              <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none">
                <path
                  d="M6.83333 1L6 5.16667M12.6667 1L11.8333 5.16667M17.6667 5.16667H1M5 16H13.6667C15.0668 16 15.7669 16 16.3016 15.7275C16.772 15.4878 17.1545 15.1054 17.3942 14.635C17.6667 14.1002 17.6667 13.4001 17.6667 12V5C17.6667 3.59987 17.6667 2.8998 17.3942 2.36502C17.1545 1.89462 16.772 1.51217 16.3016 1.27248C15.7669 1 15.0668 1 13.6667 1H5C3.59987 1 2.8998 1 2.36502 1.27248C1.89462 1.51217 1.51217 1.89462 1.27248 2.36502C1 2.8998 1 3.59987 1 5V12C1 13.4001 1 14.1002 1.27248 14.635C1.51217 15.1054 1.89462 15.4878 2.36502 15.7275C2.8998 16 3.59987 16 5 16Z"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>My Bookings</p>
            </a>
            <div className="bg-white rounded-md p-2 shadow-md">
              <svg
                className="mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none">
                <path
                  d="M16 16V1M7.66667 13.5L12.6667 8.5M12.6667 8.5L7.66667 3.5M12.6667 8.5H1"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ModalProfile;
