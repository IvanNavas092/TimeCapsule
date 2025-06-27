import Hero from '@/components/sections/Hero';
import Header from '@/components/layout/Header';
import Particle from '@/components/layout/Background';
import Subhero from '@/components/sections/DataFormats';
import WhatIs from '@/components/sections/WhatIs';

function Home() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[var(--color-secondary)]">
        <Particle />
      </div>
      <Header />
      <Hero />
      <WhatIs />
      <Subhero />
    </>
  );
}

export default Home;
