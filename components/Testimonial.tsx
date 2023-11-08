import "./Testimonials.css";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <div className="relative">
      <div className="hidden md:hidden lg:flex sta9">
        <div className="sta4">Reduced Waste</div>

        <img alt="star" src="/images/Star.svg" />
        <div className="sta4">Timeless</div>
        <img alt="star" src="/images/Star.svg" />
        <div className="sta4">Sustainable Materials</div>
        <img alt="star" src="/images/Star.svg" />
      </div>

      <div className="side1 flex absolute top-0 left-0 -mt-39 z-10 hidden md:hidden lg:flex">
        <Image
          width={41}
          height={78}
          alt="shape image"
          src="/images/side.svg"
        />
        <Image
          width={41}
          height={78}
          alt="shape image"
          src="/images/side1.svg"
        />
      </div>
      <div className="side2 flex absolute right-0 -mb-39 z-10 hidden md:hidden lg:flex">
        <Image
          width={41}
          height={78}
          alt="shape image"
          src="/images/side.svg"
        />
        <Image
          width={41}
          height={78}
          alt="shape image"
          src="/images/side1.svg"
        />
      </div>
      <div className="hidden md:hidden lg:flex testimonials flex-col md:flex-row  relative">
        <div className="testimonial_1 md:w-1/2">
          <div className="stars">
            <img alt="stars" src="/images/st.svg" />
          </div>
          <p className="vibe">
            One of the standout features of CZISKA fashion is its commitment to
            sustainability and ethical practices. CZISKA fashion places a strong
            emphasis on responsible and environmentally friendly production
            methods, making it a leader in the industry for its dedication to
            these principles.
          </p>
          <div className="horizontal-line"></div>

          <div className="profile">
            <div className="details flex items-center">
              <img
                src="/images/line.svg"
                alt="Alan McCoy"
                className="md:w-1/4"
              />
              <div className="info md:w-3/4">
                <h3>Alan McCoy</h3>
                <div>
                  <p>Fashion Critic</p>
                </div>
              </div>
              <span>
                {" "}
                <img alt="stars" src="/images/veri.svg" /> Verified
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial_2 md:w-1/2">
          <div className="stars">
            <img alt="stars" src="/images/st.svg" />
          </div>
          <p className="vibe">
            The focus on creating timeless pieces that can be worn for years,
            encourages a more sustainable approach to fashion. The demand for
            more responsible and eco-conscious fashion choices. It not only
            reflects a commitment to environmental responsibility but also
            resonates with consumers who value sustainable and ethical practices
            in the industry.
          </p>
          <div className="horizontal-line"></div>
          <div className="profile">
            <div className="details flex items-center">
              <img
                src="/images/line1.svg"
                alt="Kathryn Murphy"
                className="md:w-1/4"
              />
              <div className="info md:w-3/4">
                <h3>Keneth Murphy</h3>
                <p>Journalist</p>
              </div>
              <span>
                {" "}
                <img alt="stars" src="/images/veri.svg" /> Verified
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:hidden lg:flex flex items-center justify-center">
        <img src="/images/41.svg" alt="Center Dots" className="dots" />
      </div>

      <div className="lg:hidden md:flex-col sm:flex-col items-center justify-center ">
        <div className="lg:hidden md:hidden sm:flex">
          <div className="flex space-x-4 items-center sta7">
            <img alt="star" src="/images/Star.svg" />
            <div className="text-lg" id="sta">
              Materials
            </div>
            <img alt="star" src="/images/Star.svg" />
            <div className="text-lg" id="sta2">
              Fashion for a cause
            </div>

            <img alt="star" src="/images/Star.svg" />
          </div>
        </div>

        <div className="side3 flex">
          <Image
            width={41}
            height={78}
            alt="shape image"
            src="/images/side.svg"
          />
          <Image
            width={41}
            height={78}
            alt="shape image"
            src="/images/side1.svg"
          />
        </div>
        <div className="testimon relative">
          <div className="testimonial_1">
            <div className="stars">
              <img alt="stars" src="/images/st.svg" />
            </div>
            <p className="vibe">
              One of the standout features of CZISKA fashion is its commitment
              to sustainability and ethical practices. CZISKA fashion places a
              strong emphasis on responsible and environmentally friendly
              production methods, making it a leader in the industry for its
              dedication to these principles.
            </p>
            <div className="horizontal-line"></div>

            <div className="profile">
              <div className="details flex items-center">
                <img
                  src="/images/line.svg"
                  alt="Alan McCoy"
                  className="md:w-1/4"
                />
                <div className="info md:w-3/4">
                  <h3>Alan McCoy</h3>
                  <p>Fashion Critic</p>
                </div>
                <span>
                  {" "}
                  <img alt="stars" src="/images/veri.svg" /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/images/41.svg" alt="Center Dots" className="dots" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
