import LITTY from "../assets/PHOTOSS/LITTY 1 BF copy.jpg";
import LITTY2 from "../assets/PHOTOSS/LITTY 3F.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="bg-white ">
      <div className="relative md:relative">
        <div className="flex flex-row ">
          <img src={LITTY} alt="" className="w-1/2" />
          <img src={LITTY2} alt="" className="w-1/2" />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className=" hidden absolute cursor-pointer text-black-800 top-96 left-20  border-none  text-black border-ash-400/80 sm:p-2  p-2  justify-center lg:top-[900px] lg:left-[490px] hover:bg-black/80 hover:text-white items-center w-80 sm:w-96 font-semibold border-black bg-white/80 sm:top-[600px] sm:left-[200px]">
          Shop
        </div>
      </div>

      <div className="flex flex-col items-center gap-7 mt-8 p-6 text-center text-[#626262] sm:text-center sm:p-6 w-full">
        <p className="sm:text-center sm:w-2/3  ">
          Welcome to the exclusive world of PsychoYP's 'Osapa London'
          Merchandise Collection, a captivating fusion of music, memories, and
          personal journey. Inspired by the artist's favorite area in Lagos,
          Osapa London, this collection is a true reflection of PsychoYP's
          roots, growth, and artistic evolution.
        </p>
        <p className="sm:text-center sm:w-2/3">
          At the heart of this merchandise release lies a profound story that
          resonates with both the artist and his fans. Osapa London holds a
          special place in PsychoYP's heart, as it became his sanctuary in an
          unfamiliar city, making him feel at home despite not growing up there.
          This collection serves as a tribute to the experiences and emotions
          tied to this vibrant locale.
        </p>
      </div>
      <div className="p-4 sm:p-12 md:p-20 ">
        <h3 className="text-left text-xl">Featured Product</h3>
        <div className="flex flex-row gap-3">
          <div className="">
            <div className="mt-4">
              <figure>
                <img
                  src={LITTY}
                  alt=""
                  className="rounded-lg sm:max-h-[450px] lg:max-h-96"
                />
              </figure>
              <div>
                <h5 className="font-bold mt-2">Litty T-Shirt</h5>
                <span className="block font-light">$99</span>
              </div>
            </div>
          </div>
          <div>
            <div className="mt-4">
              <figure>
                <img
                  src={LITTY}
                  alt=""
                  className="rounded-lg sm:max-h-[450px] lg:max-h-96 "
                />
              </figure>
              <div>
                <h5 className="font-bold mt-2">Litty T-Shirt</h5>
                <span className="block font-light">$99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" relative sm:relative">
        <img
          src={LITTY}
          alt=""
          className="object-bottom h-96 w-full md:h-screen md:relative"
        />

        <div className="sm:hidden sm:absolute sm:top-6 right-10 h-36 bg-white  ">
          <p className="text-center p-4 my-4">
            <span className="font-semibold">A Musical Journey: </span>
            The collection encapsulates PsychoYP's musical journey, with Osapa
            London serving as the backdrop for the creation of his EP. It
            represents the genesis of his rap and Afro fusion, resulting in a
            unique and authentic Nigerian sound that fans have come to cherish.
          </p>
        </div>
      </div>
      <div className="border-b border-t h-12 flex flex-row items-center gap-5 justify-center mt-12">
        <button>
          <FaArrowLeft />
        </button>
        <button>0</button>
        <button>
          <FaArrowRight />
        </button>
      </div>
      <div className="flex items-center justify-center p-4">
        <p className="text-center p-4 my-4 md:w-2/3 ">
          The PsychoYP Osapa London Merchandise Collection is a visual and
          tangible representation of the artist's artistic journey and the power
          of music to forge connections and unite people from diverse
          backgrounds. It's not just merchandise; it's an emblem of belonging,
          growth, and ambition—a piece of Osapa London's soul infused into every
          thread. Embrace the spirit of the EP and join PsychoYP on this
          transformative voyage through sound and style.
        </p>
      </div>
    </div>
  );
};

export default Home;
