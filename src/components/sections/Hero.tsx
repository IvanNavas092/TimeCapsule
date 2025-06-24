export function Hero() {
  return (
    <>
      <section className="bg-[var(--color-primary)] h-screen flex flex-col items-center justify-center">
        <div className=" relative grid grid-cols-1 h-full place-items-center">
          <div className="flex flex-col items-center w-4xl gap-4">
            <h1 className="text-white text-7xl font-bold text-center special-gothic-expanded-one-regular">
            Capture the present, wake up the future.
            </h1>
            <button
              className="mt-8 w-64 rounded-md text-white text-2xl font-bold py-4 special-gothic-expanded-one-regular bg-blue-950/80  border border-blue-500 shadow-md shadow-blue-300 transition hover:bg-blue-900/90"
            >
              Show more
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
