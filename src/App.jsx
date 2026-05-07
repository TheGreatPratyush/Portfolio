import "./index.css";
import logo2 from "./assets/logo2.png";
import background from "./assets/background.png";
import { useEffect } from "react";

export default function App() {

  useEffect(() => {

    const audio = new Audio("/intro.mp3");

    audio.volume = 0;

    let started = false;

    const startAudio = async () => {

      if(started) return;

      started = true;

      try{

        await audio.play();

        let volume = 0;

        const fade = setInterval(() => {

          if(volume < 0.35){

            volume += 0.02;

            audio.volume = volume;

          } else {

            clearInterval(fade);
          }

        }, 120);

      } catch(err){

        console.log(err);
      }

      window.removeEventListener(
        "pointerdown",
        startAudio
      );
    };

    window.addEventListener(
      "pointerdown",
      startAudio
    );

  }, []);

  return (

    <div className="main">

      <div className="gridBackground">

        <img
          src={background}
          alt=""
          className="w-full h-full object-cover opacity-55 scale-110 blur-[0.4px] brightness-75"
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
            DEVELOPER ....
          </p>

        </div>

      </div>

    </div>
  );
}