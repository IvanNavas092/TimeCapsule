// import Background from '../layout/Background';
// import Particle from '../layout/Background';
export function Hero() {
  return (
    <>
      <section className="bg-[var(--color-primary)] h-screen flex flex-col items-center justify-center">
        <div className=" relative grid grid-cols-1 h-full place-items-center">
          <div className="flex flex-col items-center w-4xl gap-4">
            <h1 className="text-white text-7xl font-bold text-center special-gothic-expanded-one-regular">
              Captura el presente, despierta el futuro.
            </h1>
            <button
              className="mt-8 w-64 text-white text-2xl font-bold py-4 bg-blue-950/80 rounded-md border border-blue-500 shadow-md shadow-blue-300 transition hover:bg-blue-900/90"
            >
              ¡Púlsame!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
