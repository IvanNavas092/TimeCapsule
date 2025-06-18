import Background from "./Background";

export function Hero() {
  return (
    <div className="bg-[var(--color-primary)] h-screen">
      <div className="absolute inset-0 z-0">
        <Background />
      </div>
      <div className=" relative grid grid-cols-2 h-full place-items-center">
        <div className="flex flex-col p-16 w-4xl text-wrap">
          <p className="text-white text-6xl font-bold  text-center ml-20 ">
            Crea tu experiencia espacial con tu propia cápsula
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="w-64" src="/src/assets/capsule.png" alt="hero" />
        </div>
      </div>
    </div>
  );
}
