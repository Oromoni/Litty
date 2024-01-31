import React from "react";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";
import { litty7 } from "../assets/PHOTOSS/LITTY 7F.jpg";
import { litty8 } from "../assets/PHOTOSS/LITTY 8F.jpg";

const Hero2 = () => {
  return (
    <div>
      <div className="h-[550px] bg-white text-lg flex flex-col gap-9 items-center justify-center w-full">
        <p className="w-2/3">
          Welcome to the exclusive world of PsychoYP's 'Osapa London'
          Merchandise Collection, a captivating fusion of music, memories, and
          personal journey. Inspired by the artist's favorite area in Lagos,
          Osapa London, this collection is a true reflection of PsychoYP's
          roots, growth, and artistic evolution.
        </p>
        <p className="w-2/3">
          At the heart of this merchandise release lies a profound story that
          resonates with both the artist and his fans. Osapa London holds a
          special place in PsychoYP's heart, as it became his sanctuary in an
          unfamiliar city, making him feel at home despite not growing up there.
          This collection serves as a tribute to the experiences and emotions
          tied to this vibrant locale.
        </p>
      </div>

      <div className="p-4">
        <div>
          <h6 className="text-2xl p-2 text-[#FA8863]">Featured Product</h6>
          <div className="flex flex-row gap-2 mt-5">
            <div>
              <div>
                <img
                  className="h-[400px] w-[300px]"
                  src="https://images.unsplash.com/photo-1518921754906-0d74d5592e93?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <p>This collection serves as a tribute</p>
                <p className="text-2xl">$500.00</p>
              </div>
            </div>
            <div>
              <div>
                <img
                  className="h-[400px] w-[300px]"
                  src="https://images.unsplash.com/photo-1518921754906-0d74d5592e93?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <p>This collection serves as a tribute</p>
                <p className="text-2xl">$500.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[410px] w-full bg-pink-400 mt-10">
        <img
          className="h-[410px] w-full object-cover"
          src="https://images.unsplash.com/photo-1661625118271-e2d5a064422e?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>

      <div className="mt-12 h-[300px] bg-white w-full flex flex-col justify-center items-center border-b">
        <p className="w-3/4">
          <span className="font-bold">A Musical Journey:</span>
          The collection encapsulates PsychoYP's musical journey, with Osapa
          London serving as the backdrop for the creation of his EP. It
          represents the genesis of his rap and Afro fusion, resulting in a
          unique and authentic Nigerian sound that fans have come to cherish.
        </p>
      </div>

      <div className="h-[50px] w-full bg-white flex flex-row items-center justify-center gap-4 border-b">
        <button>
          <HiArrowSmLeft size={25} />
        </button>
        <p>1</p>
        <button>
          <HiArrowSmRight size={25} />
        </button>
      </div>

      <div className="h-[300px] w-full bg-white flex justify-center text-center items-center">
        <p className="w-2/3">
          The PsychoYP Osapa London Merchandise Collection is a visual and
          tangible representation of the artist's artistic journey and the power
          of music to forge connections and unite people from diverse
          backgrounds. It's not just merchandise; it's an emblem of belonging,
          growth, and ambition—a piece of Osapa London's soul infused into every
          thread. Embrace the spirit of the EP and join PsychoYP on this
          transformative voyage through sound and style.
        </p>
      </div>

      {/*

      
      

      

        */}
    </div>
  );
};

export default Hero2;
