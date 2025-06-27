// import Background from '../layout/Background';
import Box from '@/components/layout/Box';
import { infoBox } from '@/utils/lists';

function Subhero() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full bg-gradient-to-b from-[var(--color-tertiary)] to-[var(--color-quaternary)]" />

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center text-center space-y-4 text-shadow-lg/30 text-shadow-blue-700 mt-6">
          <div className="place-items-center space-y-3 mt-32">
            <h1 className="font-bold text-white text-4xl">Supported Data Formats</h1>
            <span className="block text-white max-w-xl text-shadow-lg text-xl">
              Our quantum storage matrix accepts multiple data types for comprehensive temporal
              preservation
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center  mt-8 pb-24 gap-6  max-w-7xl mx-auto">
        {infoBox.map(({ icon, title, subtitle }, id) => (
          <Box key={id} icon={icon} title={title} subtitle={subtitle} />
        ))}
      </div>
    </div>
  );
}

export default Subhero;
