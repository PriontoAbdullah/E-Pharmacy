import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../../../Redux/user/actions";
import FormValidation from "../../../Validation/FormValidation";

const Registration = ({ setIsAccount }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({});
  const [errorData, setErrorData] = useState({});

  const handelBlur = (e) => {
    //checking input value
    // const newErrorValue = FormValidation(e.target.name, e.target.value);
    // setErrorData((errorData) => ({ ...errorData, ...newErrorValue }));

    //setting input value in state
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const recheckUserInput = () => {
    // checking input value on submit
    let newErrorObj = {};
    for (const key in formData) {
      const value = formData[key];
      const errorValue = FormValidation(key, value);
      newErrorObj = { ...newErrorObj, ...errorValue };
    }
    setErrorData(newErrorObj);
  };

  const signUp = (e) => {
    e.preventDefault();
    // recheckUserInput();
    dispatch(createAccount(formData));
    const { fastName, lastName, userName, phone, email, password, cmPassword } =
      formData;
    // if (
    //   !fastName ||
    //   !lastName ||
    //   !userName ||
    //   !phone ||
    //   !email ||
    //   !password ||
    //   !cmPassword
    // ) {
    //   return openNotification("error", "All input value not given");
    // }

    // if (
    //   !errorData.fastName &&
    //   !errorData.lastName &&
    //   !errorData.userName &&
    //   !errorData.phone &&
    //   !errorData.email &&
    //   !errorData.password &&
    //   !errorData.cmPassword
    // ) {
    //   console.log(formData);
    //   openNotification("success", "User Sign Up Successful");
    // }
  };
  return (
    <div>
      <div className="grid w-full grid-cols-3">
        <div
          className="h-full col-span-1 p-6 bg-bottom bg-cover rounded-none sm:h-full sm:rounded sm:w-auto"
          style={{
            backgroundImage: ` url("https://images.unsplash.com/photo-1584362917165-526a968579e8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaWNpbmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")`,
          }}
        >
          <div className="pt-2 font-display text-5xl font-semibold text-left text-teal-500 my-18">
            Medicine
          </div>
          <div className="text-left text-gray-800 mt-2">
            Let the Power of Beats flow in you
          </div>
          <div className="inline-block px-4 py-2 mt-5 text-center text-white bg-teal-500 rounded hover:bg-teal-700 pointer-cursor">
            Learn More
          </div>
        </div>
        <div className="flex items-center justify-center w-full col-span-2">
          <form className="max-w-xl p-4 mx-auto mt-4">
            <div className="mb-8 font-display text-5xl font-semibold text-center text-teal-500">
              Register
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-first-name"
                >
                  First Name
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="fastName"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-red-500 hover:shadow-xl focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Harsh"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="lastName"
                  className="block w-full px-4 py-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-purple-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-password"
                >
                  Username
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="userName"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-orange-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="HarshDoe"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-first-name"
                >
                  Email Address
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="email"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-indigo-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="harshdoe@example.com"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Phone Number
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="phone"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-yellow-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="+88 XXXXX XXXXX"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-6 -mx-3">
              <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-first-name"
                >
                  Password
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="password"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-green-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="w-full px-3 md:w-1/2">
                <label
                  className="block mb-2 text-xs font-semibold tracking-wide text-gray-700 uppercase"
                  for="grid-last-name"
                >
                  Confirm Password
                </label>
                <input
                  onBlur={(e) => handelBlur(e)}
                  name="cmPassword"
                  className="block w-full px-4 py-3 mb-3 leading-tight text-gray-700 border-b-2 border-gray-500 rounded appearance-none hover:border-blue-500 hover:shadow-xl focus:outline-none focus:bg-white focus:border-gray-500"
                  type="password"
                  placeholder="Confirm Password"
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={(e) => signUp(e)}
                className="px-8 py-2 font-semibold text-white rounded-full shadow-lg bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500"
              >
                Register
              </button>
            </div>

            <div className="flex justify-center mt-1">
              <h6
                onClick={() => setIsAccount((bool) => !bool)}
                className="text-lg font-semibold tracking-wide text-teal-500 mt-5"
              >
                Already have account?
              </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
