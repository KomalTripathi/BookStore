import React from "react";
import banner from "../../public/Banner.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        {/* Text Section */}
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-10">
            <h1 className="text-2xl md:text-4xl font-bold">
              Stories live here.{" "}
              <span className="text-pink-500">Find yours!!</span>
            </h1>

            <p className="text-sm md:text-xl text-gray-350">
              Welcome to your personal reading nook in the digital world.
              Whether you're chasing epic adventures, uncovering historical
              truths, or simply curling up with a cozy romance, our shelves are
              stacked with stories just waiting to be discovered. Every book
              here has a voice, and every reader brings it to life. Take your
              time—your next favorite read might be a scroll away.
            </p>

            {/* Stanza Block */}
            <div className="bg-gray-400 border-l-4 border-pink-400 px-6 py-4 rounded-lg shadow-md animate-fade-in">
              <p className="text-lg md:text-xl font-serif text-gray-700 leading-relaxed text-center">
                Each book’s a tide, a quiet storm, <br />
                Of heartbeats inked in paper form. <br />
                From dragons fierce to cities wide, <br />
                To love that blooms or dreams that hide. <br />
                Take one, and let your spirit roam, <br />
                For every story brings you home.
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="order-1 w-full mt-20 md:w-1/2 flex justify-center items-center">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-xl shadow-xl"
            alt="Book Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
