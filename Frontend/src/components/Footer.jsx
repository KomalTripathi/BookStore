import React from "react";

function Footer() {
  return (
    <div>
      <hr />
      <footer className="footer footer-center p-10 text-base-content rounded dark:bg-slate-900 dark:text-white">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">Escape</a>
          <a className="link link-hover">Imagination</a>
          <a className="link link-hover">Knowledge</a>
          <a className="link link-hover">Comfort</a>
        </nav>
        <nav>
  <div className="grid grid-flow-col gap-6 text-gray-700 text-sm">
    <div className="flex flex-col items-center hover:text-pink-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 19.5A2.5 2.5 0 016.5 17H20m-16 2.5V6.5A2.5 2.5 0 016.5 4H20M4 19.5l16-13M20 6v11.5"
        />
      </svg>
      <span>Fiction</span>
    </div>

    <div className="flex flex-col items-center hover:text-pink-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6V4m0 16v-2m8-6h-2m-12 0H4m15.364-4.636l-1.414 1.414M7.05 16.95l-1.414 1.414M16.95 16.95l1.414 1.414M7.05 7.05L5.636 5.636"
        />
      </svg>
      <span>Fantasy</span>
    </div>

    <div className="flex flex-col items-center hover:text-pink-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6M9 16h6M9 8h6M4 6h16v12H4z"
        />
      </svg>
      <span>Science</span>
    </div>

    <div className="flex flex-col items-center hover:text-pink-500 cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 mb-1"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      <span>Romance</span>
    </div>
  </div>
</nav>

        <aside>
          <p>MERN Project by Komal Tripathi, Ayushi Sharma, Shreya Sharma, Srishti Jitpure</p>
        </aside>
      </footer>
    </div>
  );
}

export default Footer;
