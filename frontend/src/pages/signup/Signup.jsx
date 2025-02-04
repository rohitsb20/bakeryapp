import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-4xl w-full flex rounded-lg shadow-lg overflow-hidden bg-white">
        {/* Image for large screens */}
        <div className="hidden lg:block md:block md:w-1/2 lg:w-1/2">
          <img
            src="/images/auth.jpg"
            alt="form-image"
            width={600}
            height={600}
            className="object-cover w-full h-full"
          />
        </div>

        {/*  form */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col gap-1 items-center ">
          <h1 className="text-2xl font-bold"> Sign Up </h1>
          <form className="flex flex-col gap-4">
            {/* Fullname */}
            <div className="w-[17rem] md:w-96">
              <label className="label label-text" htmlFor="fullname">
                {" "}
                Full name{" "}
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="input  focus:border-sky-500"
                id="fullname"
              />
            </div>
            {/* Email */}
            <div className="w-[17rem] md:w-96">
              <label className="label label-text" htmlFor="email">
                {" "}
                Email{" "}
              </label>
              <input
                type="email"
                placeholder="JohnDoe@123"
                className="input focus:border-sky-500"
                id="email"
              />
            </div>
            {/* Password */}
            <div className="w-[17rem] md:w-96">
              <label className="label label-text" htmlFor="password">
                {" "}
                Password{" "}
              </label>
              <input
                type="password"
                placeholder="********"
                className="input focus:border-sky-500"
                id="password"
              />
            </div>
            {/* Confirm Password */}

            <div className=" w-[17rem] md:w-96 ">
              <label className="label label-text" htmlFor="confirmPassword">
                {" "}
                Confirm Password{" "}
              </label>
              <input
                type="password"
                placeholder="********"
                className="input focus:border-sky-500"
                id="confirmPassword"
              />
            </div>
            {/* Submit */}
            <div className="w-[17rem] md:w-96">
              <button className="btn btn-gradient bg--sky-500 btn-accent waves waves-light w-full">
                {" "}
                Sign Up{" "}
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/login"
              className="text-sm text-secondary hover:text-gray-800"
            >
              Already have an account? Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
