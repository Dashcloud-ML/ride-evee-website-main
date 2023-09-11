import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useForm } from "react-hook-form";

const Account = () => {
  const {
    handleSubmit,
    formState: { errors },
    watch,
    register,
  } = useForm();

  const onSubmitPersonalInfo = (data) => {
    // Perform your personal info update logic here using the data object
    console.log("Updated Personal Info:", data);
  };

  const onSubmitPassword = (data) => {
    // Perform your password update logic here using the data object
    console.log("Updated Password:", data);
  };
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-7">
      <Tabs
        selectedIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}>
        <TabList className="flex gap-8 justify-center">
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 0 ? "active-tab" : "unactive-tab"}`}>
            Personal Info
          </Tab>
          <Tab
            className={`no-underline text-[#60A547] cursor-pointer py-3 px-7 text-xl 
                        ${activeIndex === 1 ? "active-tab" : "unactive-tab"}`}>
            Password
          </Tab>
        </TabList>

        <TabPanel className="w-full">
          <div className="text-center px-3 pt-10">
            <form
              onSubmit={handleSubmit(onSubmitPersonalInfo)}
              className="max-w-lg mx-auto font-semibold bg-white p-5 pt-8 rounded-md shadow-2xl">
              <div className="mb-4">
                <input
                  {...register("name")}
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#60A547] placeholder-white"
                  placeholder="Ayush Bansal"
                />
              </div>
              <div className="mb-4">
                <input
                  {...register("email")}
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#60A54799] bg-[#D9D9D9]"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <input
                  {...register("phoneNumber")}
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#60A54799] bg-[#D9D9D9]"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-4">
                <input
                  {...register("altPhoneNumber")}
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#60A54799] bg-[#D9D9D9]"
                  placeholder="Alternative Phone Number"
                />
              </div>

              <button
                type="submit"
                className="bg-[#60A547] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update
              </button>
            </form>
          </div>
        </TabPanel>

        <TabPanel className="w-full">
          <div className="text-center px-3 pt-10">
            <form
              onSubmit={handleSubmit(onSubmitPassword)}
              className="max-w-lg mx-auto font-semibold bg-white p-5 pt-8 rounded-md shadow-2xl">
              <div className="mb-4">
                <input
                  {...register("oldPassword")}
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#60A547] placeholder-white"
                  placeholder="Old Password"
                />
              </div>
              <div className="mb-4">
                <input
                  id="password"
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).*$/,
                  })}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#60A54799] bg-[#D9D9D9]"
                  placeholder="New Password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 text-xs italic">
                    Password is required
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500 text-xs italic">
                    Password must be at least 6 characters long
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500 text-xs italic">
                    Password must contain at least one capital letter and one
                    special character
                  </p>
                )}
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-[#60A54799] bg-[#D9D9D9]"
                  placeholder="Re-Type Password"
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword", {
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs italic">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#60A547] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Update
              </button>
            </form>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Account;
