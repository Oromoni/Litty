import {
  PiSpotifyLogoLight,
  PiInstagramLogoLight,
  PiTwitterLogoLight,
} from "react-icons/pi";

const Footer = () => {
  return (
    <div>
      <div className="w-full bg-white flex flex-col justify-center items-center border-t border-b md:h-44">
        <h6 className="mt-2 md:mt-5  text-[#FA8863]  text-2xl">
          Subscribe to Litty's newsletter
        </h6>
        <input
          type="Email"
          className="border border-grey mt-4 w-80 h-12 rounded-lg px-2 focus:outline-none mb-6"
          placeholder="Your E-Mail Address"
        />
      </div>

      <div className="flex flex-row justify-between items-center p-2 mx-2">
        <div>
          <p className="text-[#FA8863]"> © 2023, Litty </p>
        </div>

        <div className="flex flex-row gap-5">
          <a
            href="https://open.spotify.com/artist/78f1mE1ztZNJ2itM6obRBB/"
            target="_blank"
            rel="noreferrer">
            <PiSpotifyLogoLight
              size={25}
              color={"orange"}
              href="www.google.com"
            />
          </a>
          <a
            href="https://www.instagram.com/stillitty/"
            target="_blank"
            rel=" noreferrer">
            <PiInstagramLogoLight size={25} color={"orange"} />
          </a>
          <a
            href="https://twitter.com/stillitty"
            target="_blank"
            rel=" noreferrer">
            <PiTwitterLogoLight size={25} color={"orange"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
