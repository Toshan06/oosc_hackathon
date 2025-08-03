import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-10 pt-6 border-y pb-6 border-t-2 border-blue-200 text-gray-700 text-sm sm:text-base flex flex-col sm:flex-row justify-around items-center gap-3">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-blue-700 text-lg">
            OOSC Hackathon
          </p>
          <p className="text-gray-600">Innovate. Collaborate. Win.</p>
        </div>

        <div className="text-center sm:text-right text-gray-600">
          <p>&copy; {new Date().getFullYear()} OOSC. All rights reserved.</p>
          <p className="text-xs sm:text-sm mt-1">
            Crafted with 💻 by Toshan Mandal
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
