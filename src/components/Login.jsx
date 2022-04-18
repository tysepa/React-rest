import React from "react";
import loginImg from "../assets/login.jpg";

export default function Login() {
  return (
    <div className="container mx-auto">
      <h1 className="pt-4 text-2xl text-center text-blue-600 font-bold">
        RESET PASSWORD
      </h1>
      <div className="flex justify-center px-6 my-12 mx-0 border border-blue-500">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-200 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg">
            <img src={loginImg} alt="" className='w-full mx-0'/>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h2 className="pt-4 text-2xl font-light text-center">
              Forgot Password, Provide Your Email To Reset It
            </h2>
            <form>
              <div>
                {/* <label >Enter your Email</label> */}
                <input
                  className="w-full px-0 py-2 text-sm leading-tight text-gray-700 border my-10  border-blue-600 rounded "
                  type="text"
                  placeholder="Email ..."
                />
              </div>
              <button className="w-full my-5 py-2 bg-blue-500 shadow-lg shadow-blue-500/40 border-blue-600 rounded text-white">
                Reset Password
              </button>
              <div>
                  <p>Or login with</p>
               
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
