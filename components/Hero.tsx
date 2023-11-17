import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 p-4 md:pl-24 pl-8">
        <h1 id="header" className="text-3xl font-bold">
          LET YOUR <br /> MIND <span id="explore">EXPLORE</span>
          <br /> NEW DESIGNS
        </h1>
        <p className="p1 text-gray-600 mt-4">
          We are all about exploring and pushing the boundaries of traditional
          fashion concepts. We encourage designers, brands, and fashion
          enthusiasts to think outside the box and create innovative,
          forward-looking, and imaginative styles and trends.
        </p>
        <div className="mt-6 hidden md:flex">
          <Link href="/contact">
            <button className="bt1 relative w-24 h-12 mr-4 bg-transparent">
              <span className="z-100 sm:inline md:hidden lg:hidden">
                BUY NOW
              </span>
              <img
                alt="button"
                src="/images/Rec1.svg"
                className="absolute inset-0 w-full h-full"
              />
            </button>
          </Link>
        </div>
        <div className="stats hidden md:flex">
          <div className="hidden md:block">
            <em>300+</em>
            <p>Unique Styles</p>
          </div>
          <div className="hidden md:block">
            <em>200+</em>
            <p>Projects Finished</p>
          </div>
          <div className="hidden md:block">
            <em>500+</em>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:pl-24 pl-8">
        <img alt="lady" src="/images/czi2.jpg" className="w-full imgg1" />
      </div>
      <div className=" lg:hidden md:hidden sm:flex">
        <div className="mt-6 sm:inline md:hidden lg:hidden">
          <Link href="/contact">
            <button className="bt1 relative w-24 h-12 mr-4 bg-transparent">
              <span className="z-100 sm:inline md:hidden lg:hidden">
                BUY NOW
              </span>
              <img
                alt="button"
                src="/images/Rec1.svg"
                className="absolute inset-0 w-full h-full"
              />
            </button>
          </Link>
        </div>
        <div className="stats sm:inline md:hidden lg:hidden">
          <div className="sm:inline md:hidden lg:hidden">
            <em>300+</em>
            <p>Unique Styles</p>
          </div>
          <div className="sm:inline md:hidden lg:hidden">
            <em>200+</em>
            <p>Projects Finished</p>
          </div>
          <div className="sm:inline md:hidden lg:hidden">
            <em>500+</em>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
