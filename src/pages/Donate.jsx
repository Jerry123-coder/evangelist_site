import React from "react";

const Donate = () => {
  return (
    <div className="bg-gray-100 px-8 py-20 lg:px-[20rem]">
      <h2 className="text-normal font-semibold text-slate-500">
        You can support various church activities here
      </h2>
      <h2 className="text-4xl font-semibold mb-4">Donations To Support</h2>
      <hr className="border-gray-300 my-4" />

      <div className="flex gap-12 w-full">
        <div className="lg:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Parish Bank Account</h2>
          <hr className="border-gray-300 my-4" />
          <div className="text-2xl font-bold">St. John The Evangelist Catholic Church Adenta</div>
          <div className="text-lg font-semibold mb-10">NIB Adenta Branch</div>

          <div className="text-xl">
            {" "}
            <div className="flex justify-between">
              <span>USD account for church's operations</span>
              <span>5021002565901</span>
            </div>
            <div className="flex justify-between">
              <span>GHc Current account for church's operations</span>
              <span>1321000220801</span>
            </div>
          </div>
        </div>

        {/* <div className="lg:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Parish Bank Account</h2>
          <hr className="border-gray-300 my-4" />
          <form>
            <div className="flex flex-col gap-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="someone@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="http://yourwebsite.com"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  focus:outline-none focus:border-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default Donate;
