import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useState, useEffect } from 'react';
import ParticlesConfig from '../particles.config';
import ParticlesConfig2 from '../particles2.config';

const ParticlesComponent = ({config}) => {
   const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particleConfigurations = {
  "geo": ParticlesConfig,
  "amongUs": ParticlesConfig2
  };

  const particles = particleConfigurations[config];
 
  if (!init) {
    return null;
  }

  return (
    <Particles 
        id="tsparticles"
        options={particles}
    >

    </Particles>
  )
}

export default ParticlesComponent