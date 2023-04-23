import Link from "next/link";

const forgetPassword = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="font-medium self-center text-sm sm:text-3xl text-gray-800">
        Here You Can Reset Your Password
      </h2>
      <div className="flex flex-col mb-5">
        <label
          for="email"
          className="mb-1 text-lg tracking-wide text-black-600 font-medium"
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
            placeholder="Enter Your Email Here"
          />
        </div>
      </div>
      <div className="">
        <Link href="./">
          <button className="bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase">
            Log In
          </button>
        </Link>
        <Link href="newpasswordsetup">
          <button className="bg-blue-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase">
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default forgetPassword;
