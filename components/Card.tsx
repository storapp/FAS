import "./Card.css";
import Image from "next/image";

const Card: React.FC = () => {
  return (
    <div className="card flex flex-col">
      <div className="action flex">
        <div className="rect">
          <Image
            width={300}
            height={200}
            className="rectangle"
            src="/images/aa3.jpg"
            alt="rectangle"
          />
        </div>
        <div className="tx text md:w-2/3">
          <h2 id="discover" className="text-2xl font-semibold">
            Re imagine
            <br />
            <span id="virtual" className="text-blue-600">
              Sustainable
            </span>{" "}
            <br />
            fashion
          </h2>
          <p id="fix" className="text-gray-600 mt-2">
            We celebrate the diversity of body shapes, sizes, & genders,
            <br /> we encourage designers to create clothing that <br /> caters
            to a wide range of people and <br />
            challenges traditional beauty standards.
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="hidden md:hidden lg:flex ">
          <div className="" id="sta3">
            Sustainable
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Eco-Friendly
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Digital Fashion
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Retro
          </div>
          <img alt="star" src="/images/Star.svg" />
        </div>
      </div>
      <div className="lg:hidden md:hidden sm:flex">
        <div className="flex space-x-4 items-center">
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta2">
            Gender-Neutral
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta2">
            Eco-friendly
          </div>

          <img alt="star" src="/images/Star.svg" />
        </div>
      </div>
    </div>
  );
};

export default Card;
