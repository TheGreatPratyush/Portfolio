import "./index.css";
import logo2 from "./assets/logo2.png";
import RippleGrid from "./components/RippleGrid";

export default function App() {

  return (

    <div className="main">

      <div className="gridBackground">

        <RippleGrid
          enableRainbow={true}
          gridColor="#8B7355"
          rippleIntensity={0.15}
          gridSize={19}
          gridThickness={10}
          mouseInteraction={true}
          mouseInteractionRadius={0.9}
          opacity={0.8}
          fadeDistance={4}
          vignetteStrength={6}
          glowIntensity={0.04}
          gridRotation={360}
        />

      </div>

      <div className="overlay"></div>

      <div className="container">

        <div className="logoWrapper">

          <img
            src={logo2}
            alt=""
            className="logo"
          />

          <h1 className="title">
            PRATYUSH
          </h1>

          <p className="subtitle">
            FRONTEND DEVELOPER
          </p>

        </div>

      </div>

    </div>
  );
}