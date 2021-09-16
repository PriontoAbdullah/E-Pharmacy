import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../../Redux/user/actions';
import FormValidation from '../../../Validation/FormValidation';
import Registration from '../Registration/Registration';
import './Login.css';

const LoginForm = () => {
  const [isAccount, setIsAccount] = useState(false);
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

  const login = (e) => {
    e.preventDefault();
    // recheckUserInput();
    dispatch(loginAccount(formData));
    const { email, password } =
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
    <>
      {!isAccount ? (
        <>
          <div className="relative min-h-screen flex">
            <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
              <div
                className="sm:w-1/2 xl:w-3/5 h-full hidden md:flex flex-auto items-center justify-center p-10 overflow-hidden bg-teal-900 text-white bg-no-repeat bg-cover bg-center relative"
                style={{
                  backgroundImage:
                    'url(https://i.ibb.co/9hFrQqt/medicine-home-banner.png)',
                }}
              >
                <div className="absolute bg-gradient-to-b from-teal-600 to-teal-400 opacity-75 inset-0 z-0"></div>
                <div className="w-full max-w-md z-10">
                  <div className="sm:text-4xl font-semibold text-gray-100 leading-tight mb-6">
                    Your medication, delivered <br /> Say goodbye to all your
                    healthcare worries with us
                  </div>
                  <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
                    What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s when an
                    unknown printer took a galley of type and scrambled it to
                    make a type specimen book it has?
                  </div>
                </div>

                <ul className="circles">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <div className="md:flex md:items-center md:justify-center sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
                <div className="max-w-md w-full space-y-8">
                  <div className="text-center">
                    <h2 className="mt-6 text-3xl font-semibold text-teal-600">
                      Welcom Back!
                    </h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Please sign in to your account
                    </p>
                  </div>
                  <div className="flex flex-row justify-center items-center space-x-3">
                    <a
                      alt=""
                      href="https://www.behance.net/ajeeshmon"
                      target="_blank"
                      className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg   bg-teal-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                      rel="noreferrer"
                    >
                      <img
                        alt=""
                        className="w-4 h-4"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                      />
                    </a>
                    <a
                      alt=""
                      href="https://twitter.com/ajeemon?lang=en"
                      target="_blank"
                      className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-teal-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                      rel="noreferrer"
                    >
                      <img
                        alt=" "
                        className="w-4 h-4"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDY4MS4zMzQ2NCA2ODEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIwMC45NjQ4NDQgNTE1LjI5Mjk2OWMyNDEuMDUwNzgxIDAgMzcyLjg3MTA5NC0xOTkuNzAzMTI1IDM3Mi44NzEwOTQtMzcyLjg3MTA5NCAwLTUuNjcxODc1LS4xMTcxODgtMTEuMzIwMzEzLS4zNzEwOTQtMTYuOTM3NSAyNS41ODU5MzctMTguNSA0Ny44MjQyMTgtNDEuNTg1OTM3IDY1LjM3MTA5NC02Ny44NjMyODEtMjMuNDgwNDY5IDEwLjQ0MTQwNi00OC43NTM5MDcgMTcuNDYwOTM3LTc1LjI1NzgxMyAyMC42MzY3MTggMjcuMDU0Njg3LTE2LjIzMDQ2OCA0Ny44MjgxMjUtNDEuODk0NTMxIDU3LjYyNS03Mi40ODgyODEtMjUuMzIwMzEzIDE1LjAxMTcxOS01My4zNjMyODEgMjUuOTE3OTY5LTgzLjIxNDg0NCAzMS44MDg1OTQtMjMuOTE0MDYyLTI1LjQ3MjY1Ni01Ny45NjQ4NDMtNDEuNDAyMzQ0LTk1LjY2NDA2Mi00MS40MDIzNDQtNzIuMzY3MTg4IDAtMTMxLjA1ODU5NCA1OC42ODc1LTEzMS4wNTg1OTQgMTMxLjAzMTI1IDAgMTAuMjg5MDYzIDEuMTUyMzQ0IDIwLjI4OTA2MyAzLjM5ODQzNyAyOS44ODI4MTMtMTA4LjkxNzk2OC01LjQ4MDQ2OS0yMDUuNTAzOTA2LTU3LjYyNS0yNzAuMTMyODEyLTEzNi45MjE4NzUtMTEuMjUgMTkuMzYzMjgxLTE3Ljc0MjE4OCA0MS44NjMyODEtMTcuNzQyMTg4IDY1Ljg3MTA5MyAwIDQ1LjQ2MDkzOCAyMy4xMzY3MTkgODUuNjA1NDY5IDU4LjMxNjQwNyAxMDkuMDgyMDMyLTIxLjUtLjY2MDE1Ni00MS42OTUzMTMtNi41NjI1LTU5LjM1MTU2My0xNi4zODY3MTktLjAxOTUzMS41NTA3ODEtLjAxOTUzMSAxLjA4NTkzNy0uMDE5NTMxIDEuNjcxODc1IDAgNjMuNDY4NzUgNDUuMTcxODc1IDExNi40NjA5MzggMTA1LjE0NDUzMSAxMjguNDY4NzUtMTEuMDE1NjI1IDIuOTk2MDk0LTIyLjYwNTQ2OCA0LjYwOTM3NS0zNC41NTg1OTQgNC42MDkzNzUtOC40Mjk2ODcgMC0xNi42NDg0MzctLjgyODEyNS0yNC42MzI4MTItMi4zNjMyODEgMTYuNjgzNTk0IDUyLjA3MDMxMiA2NS4wNjY0MDYgODkuOTYwOTM3IDEyMi40MjU3ODEgOTEuMDIzNDM3LTQ0Ljg1NTQ2OSAzNS4xNTYyNS0xMDEuMzU5Mzc1IDU2LjA5NzY1Ny0xNjIuNzY5NTMxIDU2LjA5NzY1Ny0xMC41NjI1IDAtMjEuMDAzOTA2LS42MDU0NjktMzEuMjYxNzE4OC0xLjgxNjQwNyA1Ny45OTk5OTk4IDM3LjE3NTc4MSAxMjYuODcxMDkzOCA1OC44NzEwOTQgMjAwLjg4NjcxODggNTguODcxMDk0IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                      />
                    </a>
                    <a
                      alt=""
                      href="https://in.linkedin.com/in/ajeeshmon"
                      target="_blank"
                      className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg  text-white bg-teal-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                      rel="noreferrer"
                    >
                      <img
                        alt=""
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0yMy45OTQgMjR2LS4wMDFoLjAwNnYtOC44MDJjMC00LjMwNi0uOTI3LTcuNjIzLTUuOTYxLTcuNjIzLTIuNDIgMC00LjA0NCAxLjMyOC00LjcwNyAyLjU4N2gtLjA3di0yLjE4NWgtNC43NzN2MTYuMDIzaDQuOTd2LTcuOTM0YzAtMi4wODkuMzk2LTQuMTA5IDIuOTgzLTQuMTA5IDIuNTQ5IDAgMi41ODcgMi4zODQgMi41ODcgNC4yNDN2Ny44MDF6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtLjM5NiA3Ljk3N2g0Ljk3NnYxNi4wMjNoLTQuOTc2eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTIuODgyIDBjLTEuNTkxIDAtMi44ODIgMS4yOTEtMi44ODIgMi44ODJzMS4yOTEgMi45MDkgMi44ODIgMi45MDkgMi44ODItMS4zMTggMi44ODItMi45MDljLS4wMDEtMS41OTEtMS4yOTItMi44ODItMi44ODItMi44ODJ6IiBmaWxsPSIjZmZmZmZmIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                        className="w-4 h-4"
                      />
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="h-px w-16 bg-gray-300"></span>
                    <span className="text-gray-500 font-normal">
                      or continue with
                    </span>
                    <span className="h-px w-16 bg-gray-300"></span>
                  </div>
                  <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" value="true" />
                    <div className="relative">
                      {/* <div className="absolute right-3 mt-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                      </div> */}
                      <label className="ml-3 text-sm font-bold text-teal-500 tracking-wide">
                        Email
                      </label>
                      <input
                        className=" w-full text-base px-4 py-2 border-b border-gray-300 placeholder-gray-600 focus:outline-none rounded-2xl focus:border-teal-500"
                        type="email"
                        placeholder="mail@gmail.com"
                        name="email"
                        onBlur={(e)=>handelBlur(e)}
                      />
                    </div>
                    <div className="mt-8 content-center">
                      <label className="ml-3 text-sm font-bold text-teal-500 tracking-wide">
                        Password
                      </label>
                      <input
                        className="w-full content-center text-base px-4 py-2 border-b rounded-2xl border-gray-300 placeholder-gray-600 focus:outline-none focus:border-teal-500"
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        onBlur={(e)=>handelBlur(e)}
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 bg-teal-500 focus:ring-teal-400 border-gray-300 rounded"
                        />
                        <label
                          for="remember_me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm">
                        <a
                          alt=""
                          href="#0"
                          className="text-teal-400 hover:text-teal-600"
                        >
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={(e)=>login(e)}
                        type="submit"
                        className="w-full flex justify-center bg-gradient-to-r from-teal-500 to-teal-600  hover:bg-gradient-to-l hover:from-teal-600 hover:to-teal-500 text-gray-100 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-600">
                      <span>Don't have an account?</span>
                      <a
                        alt=""
                        href="#0"
                        onClick={() => setIsAccount((bool) => !bool)}
                        className="text-teal-500 hover:text-teal-700 text-lg font-semibold no-underline hover:underline cursor-pointer transition ease-in duration-300"
                      >
                        Sign up
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Registration setIsAccount={setIsAccount} />
      )}
    </>
  );
};

export default LoginForm;
