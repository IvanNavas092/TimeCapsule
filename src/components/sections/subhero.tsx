// import Background from '../layout/Background';
import Box from '../layout/Box';
import type { BoxProps } from '../layout/Box';

const infoBox: BoxProps[] = [
  { icon: <></>, title: 'Ivan', subtitle: 'pnepenepedfsfsdfsdf' },
  { icon: <></>, title: 'Ivan', subtitle: 'pnepenepedfsfsdfsdf' },
  { icon: <></>, title: 'Ivan', subtitle: 'pnepenepedfsfsdfsdf' },
  { icon: <></>, title: 'Ivan', subtitle: 'pnepenepedfsfsdfsdf' },
];

function Subhero() {
  return (
    <div className="z-10 h-screen bg-gradient-to-b from-[var(--color-secondary)]  to-[var(--color-tertiary)]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center text-center space-y-4 text-shadow-lg/30 text-shadow-blue-700 mt-6">
          <h1 className="font-bold text-white text-6xl">What is Time Capsule?</h1>
          <div className="px-4 py-0.5 bg-blue-400 max-w-xs w-full  bg-gradient-to-tr  to-blue-400 via-transparent from-white"></div>
          <span className="block text-white max-w-xl text-shadow-lg text-xl">
            An advanced temporal storage system designed to preserve your most precious digital
            memories across the dimensions of time.
          </span>

          <div className="place-items-center space-y-3 mt-32">
            <h1 className="font-bold text-white text-4xl">Supported Data Formats</h1>
            <span className="block text-white max-w-xl text-shadow-lg text-xl">
              Our quantum storage matrix accepts multiple data types for comprehensive temporal
              preservation
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8 gap-6 flex-wrap">
        {infoBox.map(({ icon, title, subtitle }, idx) => (
          <Box key={idx} icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
}

export default Subhero;
