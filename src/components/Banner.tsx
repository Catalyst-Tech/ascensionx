import MarsVideo from "../images/EarthMarsLoop.mp4";

const Banner: React.FC = () => {
  return (
    <>
      <video className="videoTag" autoPlay loop muted playsInline>
        <source src={MarsVideo} type="video/mp4" />
      </video>
      <div className="banner">
        <div className="banner__copy">
          <h1 className="banner__display">Ascension Ecoverse</h1>
          <p className="banner__subheading">
            The Collaborative Digital World of the Future
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
