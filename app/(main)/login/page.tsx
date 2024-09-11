import React from "react";

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="flex flex-col md:flex-row w-full rounded-lg overflow-hidden shadow-lg">
        <div className="w-full md:basis-1/2 flex items-center justify-center ">
          <div className="w-[496px] p-8">
            <div className="pb-16">
              <h2 className="text-3xl font-semibold text-white mb-6">
                Hello, <span className="text-blue-400">Digital Fortress</span>
              </h2>
              <p className="text-gray-400">
                Log in to platform to start creating magic.
              </p>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="email">
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="cuong.digitalfortress@gmail.com"
                  className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#1A1D21]"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  className="w-full px-3 py-2 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-[#1A1D21]"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <label className="inline-flex items-center text-gray-400">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4  bg-[#1A1D21]"
                  />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#B6F09C] hover:underline">
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full   bg-[#B6F09C]  py-2 rounded-lg transition-colors">
                Log in
              </button>
            </form>
            <p className="text-center text-gray-400 mt-6">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-[#B6F09C] hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>

        <div className="hidden md:block w-1/2 h-screen bg-cover bg-[url('./public/Illustration.png')]"></div>
      </div>
    </div>
  );
};

export default LoginPage;
