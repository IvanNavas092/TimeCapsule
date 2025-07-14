import { useNavigate } from 'react-router-dom';

function Hero() {
  const navigate = useNavigate();

  function goToDashboard() {
    navigate('/dashboard/my-capsules');
  }
  return (
    <>
      <section className="z-20 bg-gradient-to-b from-black via-black to-[var(--color-secondary)] h-screen flex flex-col items-center justify-center">
        <div className=" relative grid grid-cols-1 h-full place-items-center">
          <div className="flex flex-col items-center w-4xl gap-4">
            <h1 className="text-white text-7xl  text-center text-shadow-lg/30 text-shadow-blue-700 ">
              CAPTURE THE PRESENT, WAKE UP THE FUTURE
            </h1>
            <button
              onClick={goToDashboard}
              className="relative mt-8 w-64 py-4 px-6 text-white text-2xl font-bold rounded-xl border
              border-blue-500 bg-gradient-to-br from-blue-900
              shadow-[0_0_25px_#3b82f6] overflow-hidden transition-all duration-300 group
              hover:shadow-[0_0_40px_#60a5fa] cursor-pointer">
              {/* Texto */}
              <span className="relative z-10">Show More</span>


              {/* Glow inferior */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent blur-sm opacity-70" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
