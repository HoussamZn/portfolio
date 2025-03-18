import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            random: true,
            straight: false,
            bounce: true,
            attract: {
            enable: false,
          },
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: ["bubble","grab"],
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            bubble: { distance: 100, size: 4, duration: 5 },
            grab: {
              distance: 100,
              links: {
                opacity: 0.8,
                color: "#ffffff", 
                distance: 200,
              },
            },
            push: {
              particles_nb: 5,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
