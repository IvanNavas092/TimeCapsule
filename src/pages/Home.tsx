import Hero from '@/components/sections/Hero';
import Header from '@/components/layout/Header';
import Subhero from '@/components/sections/Subhero';
import Particle from '@/components/layout/Background';

function Home() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0f2e]">
        
        <Particle />
      </div>
      <Header />
      <Hero />
      <Subhero />
    </>
  );
}

export default Home;
