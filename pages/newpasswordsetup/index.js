const newPasswordPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className="flex flex-col
      bg-white
      shadow-md
      px-4
      sm:6
      md:8
      lg:10
      py-8
      rounded-3xl
      w-50
      max-w-md
      "
      >
        <p className="text-sm  text-black mb-5 ">
          Enter Your New Password Here
        </p>
        <div className=" flex flex-col mb-6">
          <input
            for="password"
            required
            className="mb-1 text-xs sm:text-sm tracking-wide text-gray-600"
          />
          Password
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
            required
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
              id="password confirmation"
              name="password confirmation"
              type="password confirmation"
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
        <a href="./">
          <button className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden">
            Confirm
          </button>
        </a>
      </div>
    </div>
  );
};

export default newPasswordPage;
