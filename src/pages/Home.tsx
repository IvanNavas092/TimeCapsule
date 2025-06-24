import { Hero } from '@/components/sections/Hero';
import { Header } from '@/components/layout/Header';
import { Subhero } from '@/components/sections/subhero';
import { BackgroundVideo } from '@/components/layout/Background-video';

function Home() {
  return (
    <>
      <BackgroundVideo />
      <Header />
      <Hero />
      <Subhero />
    </>
  );
}

export default Home;
