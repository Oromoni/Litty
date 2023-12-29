import React from "react";
import {
  PiSpotifyLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-white flex flex-col justify-center items-center border-t border-b md:h-44">
        <h6 className="mt-2 md:mt-5">Subscribe to PsychoYP's newsletter</h6>
        <input
          type="Email"
          className="border border-grey mt-4 w-80 h-12 rounded-lg px-2 focus:outline-none mb-6"
          placeholder="Your E-Mail Address"
        />
      </div>

      <div className="flex flex-row justify-between items-center p-2 mx-2">
        <div>
          <p>© 2023, PsychoYP Powered by Shopify</p>
        </div>

        <div className="flex flex-row gap-5">
          <PiSpotifyLogoLight size={25} />
          <PiInstagramLogoLight size={25} />
          <PiTwitterLogoLight size={25} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
