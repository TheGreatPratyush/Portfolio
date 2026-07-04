import "./Slide1.css";
import slide1Video from "../../assets/Slide1Video.mp4";

const Slide1 = () => {
  return (
    <section className="slide1">


      <video
        className="hero-video"
        src={slide1Video}
        autoPlay
        muted
        playsInline
      />

      <div className="overlay"></div>

        <h1 className="hero-name">
          Pratyush Gupta
        </h1>

        <h2 className="hero-role">
          Software Engineer • AI Builder • Competitive Programmer
        </h2>

        <p className="hero-description">
          Building intelligent software that transforms
          ideas into scalable real-world products.
        </p>
      

        <div className="hero-buttons">

          <button className="primary-btn">
            Explore My Journey →
          </button>


        </div>


    </section>
  );
};

export default Slide1;