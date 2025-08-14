import React, { useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useState, useEffect } from 'react';
import ParticlesConfig from '../particles.config';

const ParticlesComponent = () => {
   const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles 
        id="tsparticles"
        options={ParticlesConfig}
    >

    </Particles>
  )
}

export default ParticlesComponent