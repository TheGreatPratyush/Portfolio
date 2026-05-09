import { motion } from "framer-motion";
import "./ProjectChaos.css";

function ProjectChaos() {
 
// this is new part which i have learned in this 
// how to make everything appear into an array like i have screenshots of my project
//  now i wanted to have them on array so that i can apply what ever effect i want to do so 
// this is one of the way to reduce the manual task 


  const images = Object.values(
    import.meta.glob(
      "../assets/ProjectScrrenshots/**/*.{png,jpg,jpeg,webp}",
      {
        eager: true,
        import: "default",
      }
    )
  );

  const background = [
    ...images,
    ...images,
    ...images,
    ...images,
  ];

  const cols = 6;
  const rows = 4;

  return (
    <div className="background">

      <div className="effects-shadow" />

      {background.map((img, i) => {

        const cellWidth =
          window.innerWidth / cols;

        const cellHeight =
          window.innerHeight / rows;

        const col =
          i % cols;

        const row =
          Math.floor(i / cols) % rows;

        const finalX =
          col * cellWidth +
          Math.random() * cellWidth -
          180;

        const finalY =
          row * cellHeight +
          Math.random() * cellHeight -
          120;

        const startX =
          (Math.random() > 0.5 ? 1 : -1) *
          (window.innerWidth + Math.random() * 1400);

        const startY =
          (Math.random() > 0.5 ? 1 : -1) *
          (window.innerHeight + Math.random() * 1400);

        const rotate =
          Math.random() * 24 - 12;

        const cardWidth =
          220 + Math.random() * 200;

        const layer =
          Math.floor(Math.random() * 20);

        const scale =
          0.92 + Math.random() * 0.25;

        return (
          <motion.img
            key={i}
            src={img}
            alt=""
            className="background-image"

            initial={{
              x: startX,
              y: startY,
              rotate: rotate * 2,
              opacity: 0,
              scale: 0.4,
            }}

            animate={{
              x: finalX,
              y: finalY,
              rotate,
              opacity: 1,
              scale,
            }}

            transition={{
              duration:
                1.4 + Math.random() * 0.8,

              delay:
                i * 0.015,

              ease: [0.22, 1, 0.36, 1],
            }}

            style={{
              width: `${cardWidth}px`,
              zIndex: layer,
            }}
          />
        );
      })}
    </div>
  );
}

export default ProjectChaos;