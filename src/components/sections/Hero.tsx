// import Background from '../layout/Background';
// import Particle from '../layout/Background';
export function Hero() {
  return (
    <>
      <div className="bg-[var(--color-primary)] h-screen">
        <div className=" inset-0 z-0">
        </div>
        <div className=" relative grid grid-cols-1 h-full place-items-center">
          <div className="flex flex-col  w-4xl ">
            <h1 className="text-white text-7xl font-bold text-center special-gothic-expanded-one-regular">
              Captura el presente, despierta el futuro.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
