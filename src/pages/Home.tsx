import Hero from '@/components/sections/Hero';
import Header from '@/components/layout/Header';
import Subhero from '@/components/sections/DataFormats';
import WhatIs from '@/components/sections/WhatIs';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <WhatIs />
      <Subhero />
    </>
  );
}

export default Home;
