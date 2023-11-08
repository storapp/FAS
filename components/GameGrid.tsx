import "./GameGrid.css";
import Image from "next/image";

const GamesGrid: React.FC = () => {
  return (
    <div className="game-grid">
      <h2>
        Welcome to our <br />
        core <span id="games">services</span>
      </h2>
      <div className="options">
        <button>
          <img alt="button" src="/images/newest.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/latest.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/fight.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/sport.svg" />
        </button>
      </div>

      <div
        id="square"
        className="squareBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {[
          {
            title: "Fashion Design",
            imgSrc: "/images/fir-4.jpg",
            profileImgSrc: "/images/cameron.svg",
            name: "Cameron Williamson",
            company: "Designer",
          },
          {
            title: "Modelling",
            imgSrc: "/images/fir-1.jpg",
            profileImgSrc: "/images/diane.svg",
            name: "Dianne Russel",
            company: "Model",
          },
          {
            title: "Fashion Retail",
            imgSrc: "/images/fir-3.jpg",
            profileImgSrc: "/images/jane.svg",
            name: "Jane Cooper",
            company: "Manager",
          },
          {
            title: "Fashion Consultations",
            imgSrc: "/images/fir-5.jpg",
            profileImgSrc: "images/cody.svg",
            name: "Cody Fisher",
            company: "Consultant",
          },
          {
            title: "Fashion Photography",
            imgSrc: "/images/fir-2.jpg",
            profileImgSrc: "images/wade.svg",
            name: "Wade Warren",
            company: "Photographer",
          },
          {
            title: "Costumes",
            imgSrc: "/images/halloween.png",
            profileImgSrc: "images/rob.svg",
            name: "Robert Fox",
            company: "Artist",
          },
        ].map((card, index) => (
          <div id="box" key={index} className="squarebox__box">
            <div id="sq-box" className="squarebox__box__content">
              <img
                className="character"
                src={card.imgSrc}
                alt="character image"
              />
              <h3>{card.title}</h3>

              <div className="box__profile">
                <img
                  alt="profile pic"
                  className="profile__pic"
                  src={card.profileImgSrc}
                />
                <div className="profile__details">
                  <div className="profile__info">
                    <h4>{card.name}</h4>
                    <p>{card.company}</p>
                  </div>
                </div>
              </div>

              <button title="live" className="live-btn">
                <img alt="live button" src="images/live.svg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
