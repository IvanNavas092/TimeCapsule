import List from '../layout/ItemList';
import { PropertiesList } from '@/utils/lists';


function WhatIs() {
  return (
    <div className="relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 h-full bg-gradient-to-b from-[var(--color-secondary)] to-[var(--color-tertiary)]" />

      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center text-center space-y-4 text-shadow-lg/30 text-shadow-blue-700 mt-6">
          <h1 className="font-bold text-white text-6xl">What is Time Capsule?</h1>
          <div className="px-4 py-0.5 bg-blue-400 max-w-xs w-full bg-gradient-to-tr to-blue-400 via-transparent from-white"></div>
          <span className="block text-white max-w-xl text-shadow-lg text-xl">
            An advanced temporal storage system designed to preserve your most precious digital
            memories across the dimensions of time.
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-4 place-items-center mx-auto max-w-7xl ">
        {PropertiesList.map(({ icon, title, description }, key) => (
          <List key={key} icon={icon} title={title} description={description} />
        ))}
      </div>
    </div>
  );
}

export default WhatIs;
