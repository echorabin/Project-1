import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <div className=" bg-white p-5 max-w-md mx-auto mb-4 border border-solid border-gray-400 rounded shadow-sm justify-center">
        <h2 className="text-4xl px-4">Login Page</h2>
        <form className="mt-10 space-y-8">
          <label>
            <h1 className="text-lg">Enter Your Email Here</h1>
            <input
              className="w-full border rounded h-12 px-4 focus:outline-none"
              placeholder="Email Address"
              type="email"
              required
            />
          </label>
          <label>
            <h1 className="text-lg">Enter Your Password Here</h1>
            <input
              className="w-full border rounded h-12 px-4 focus:outline-none -mr-7"
              placeholder="Password"
              type="password"
              required
            />
          </label>
          <div className="flex flex-col md:flex-row md:items-center justify-between ">
            <input
              class="bg-orange-500 text-sm active:bg-gray-700 cursor-pointer font-regular text-white px-4 py-2 rounded uppercase"
              type="submit"
              value="Login Now"
            />

            {/* <Link href="forgetpage">
              <button
                className="text-gray-400 text-sm 
            underline self-center 
            md:self-auto mt-4 md:mt-0"
              >
                Forget Password?
              </button>
            </Link> */}
            <Link href="signup">
              <button className="text-black-400 text-sm underline self-center">
                New Signup Here
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
