import Link from "next/link";

const signUpPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="
          flex flex-col
          bg-white
          shadow-md
          px-4
          sm:px-6
          md:px-8
          lg:px-10
          py-8
          rounded-3xl
          w-50
          max-w-md
        "
      >
        <div className="font-medium self-center text-sm sm:text-3xl text-gray-800">
          Sign Up Now
        </div>
        <div className="mt-4 self-center text-xl sm:text-sm text-gray-800">
          Enter your required identity below
        </div>
        <div className="mt-10">
          <form action="#">
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                Username:
              </label>
              <div className="relative">
                <div
                  className="inline-flex
              items-center
              justify-center
              absolute
              left-0
              top-0
              h-full
              w-10
              text-gray-400"
                >
                  <i className="fas fa-user text-blue-500"></i>
                </div>
                <input
                  className="text-sm
                placeholder-gray-300
                pl-10
                pr-4
                rounded-2xl
                border border-gray-400
                w-full
                py-2
                focus:outline-none focus:border-blue-400"
                  placeholder="Enter Your Username Here"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label
                for="email"
                className="mb-1 text-xs tracking-wide text-gray-600"
              >
                E-mail Address
              </label>
              <div className="relative">
                <div
                  className="inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gray-400"
                >
                  <i className="fas fa-at text-blue-500"></i>
                </div>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="text-sm
                placeholder-gray-300
                pl-10
                pr-4
                rounded-2xl
                border border-gray-400
                w-full
                py-2
                focus:outline-none focus:border-blue-400"
                  placeholder="Enter Your New Email"
                />
              </div>
            </div>
            <div className=" flex flex-col mb-6">
              <label
                for="password"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Password
              </label>
              <div className="relative">
                <div
                  className="inline-flex 
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gray-400"
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>

                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="text-sm
                          placeholder-gray-300 
                            pl-10
                            pr-4
                            rounded-2xl
                            border border-gray-400
                            w-full
                            py-2 
                            focus:outline-none focus:border-blue-400"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
            <div className="flex flex-col mb-7">
              <label
                for="password confirmation"
                className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
              >
                Re-Enter Password
              </label>
              <div className="relation">
                <div
                  className="inline-flex
                items-center
                justify-center
                absolute
                left-0
                top-0
                h-full
                w-10
                text-gray-400"
                >
                  <span>
                    <i className="fas fa-lock text-blue-500"></i>
                  </span>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="text-sm
                    placeholder-gray-300
                    pl-10
                    pr-4
                    rounded-2xl
                    border border-gray-400
                    w-full
                    py-2
                    focus:outline-none focus:border-blue-400"
                  placeholder="Re-Enter Your Password"
                />
              </div>
            </div>
            <div className="flex w-full">
              <button
                type="submit"
                className="flex
              mt-2
              items-center
              justify-center
              focus:outline-none
              text-white text-sm
              sm:text-base
              bg-blue-500
              hover:bg-blue-600
              rounded-2xl
              py-2
              w-full
              transition
              duration-150
              ease-in"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>

        <div className="flex justify-center items-center mt-6">
          <p className="ml-2  text-black text-sm">
            Already have an account?
            <Link
              href="/"
              className="flex
              mt-2
              items-center
              justify-center
              focus:outline-none
              text-white text-sm
              sm:text-base
              bg-blue-500
              hover:bg-blue-600
              rounded-2xl
              py-2
              w-full
              transition
              duration-150
              ease-in"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default signUpPage;
