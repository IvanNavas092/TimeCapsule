// import Background from '../layout/Background';
import { BackgroundVideo } from '@/components/layout/Background-video';

export function Hero() {
  return (
    <>
      <div className="bg-[var(--color-primary)] h-screen">
        <div className=" inset-0 z-0">
          <BackgroundVideo />
        </div>
        <div className=" relative grid grid-cols-1 h-full place-items-center">
          <div className="flex flex-col p-16 w-4xl text-wrap">
            <h1 className="text-white text-7xl font-bold  text-center ml-20 ">
              Captura el presente, despierta el futuro.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
