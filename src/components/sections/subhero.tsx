// import Background from '../layout/Background';

function Subhero() {
  return (
    <div className="-z-10 h-screen bg-gradient-to-b from-[var(--color-secondary)]  to-[var(--color-tertiary)]">
      <div className="flex justify-center items-center">
        <div className="flex flex-col items-center text-center space-y-4 mt-6">
          <h1 className="title-font font-bold text-white text-5xl">What is TimeCapsule?</h1>
          <div className="px-4 py-0.5 bg-blue-400 max-w-xs w-full  bg-gradient-to-tr  to-blue-400 via-transparent from-white"></div>
          <span className="text-white max-w-xl">
            An advanced temporal storage system designed to preserve your most precious digital
            memories across the dimensions of time.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subhero;
