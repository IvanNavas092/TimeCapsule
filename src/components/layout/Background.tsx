import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { loadFull } from 'tsparticles';

function Particle() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    console.log('init');
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          style={{
            zIndex: 1,
          }}
          options={{
            fpsLimit: 160,
            particles: {
              color: {
                value: '#ffff',
              },
              links: {
                color: '#fff',
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: true,
                speed: 0.08,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 200,
              },
              opacity: {
                value: { min: 0.03, max: 1 },
                animation: {
                  enable: true,
                  speed: 0.3,
                  sync: false,
                },
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 0.5, max: 1.1 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}

export default Particle;
