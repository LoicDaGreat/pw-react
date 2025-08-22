const ParticlesConfig2 = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 200
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: { min: 0.1, max: 1 }
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2,
      direction: "right",
      straight: true,
      outModes: {
        default: "out"
      }
    }
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push"
      }
    },
    modes: {
      push: {
        quantity: 4
      }
    }
  },
  detectRetina: true,
  background: {
    color: "#000000"
  }
};


export default ParticlesConfig2;