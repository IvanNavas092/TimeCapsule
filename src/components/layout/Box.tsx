export interface BoxProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Box = ({ icon, title, subtitle }: BoxProps) => (
  <div className="relative w-80 p-7 rounded-2xl bg-[rgba(255,255,255,0.02)] border border-blue-500 
    shadow-md overflow-hidden transition-transform duration-500 transform hover:scale-105 group">
    
    {/* circles */}
    <div className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 pointer-events-none">
      <div className="w-20 h-20 rounded-full border border-gray-700/50 group-hover:border-cyan-400 transition-all duration-400"></div>
      <div className="absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-700/70"></div>
      <div className="absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full"></div>
    </div>

    <div className="mb-4">
      <div className="w-16 h-16 text-3xl rounded-xl flex items-center justify-center shadow-lg">
        {icon}
      </div>
    </div>

    {/* title */}
    <h2 className="text-white font-semibold text-xl mb-1 transition duration-400 group-hover:drop-shadow-[0_0_6px_white]">
      {title}
    </h2>
    <p className="text-sm text-gray-300 transition duration-400 group-hover:drop-shadow-[0_0_4px_cyan]">
      {subtitle}
    </p>

    {/* lines*/}
    <div className="mt-4 h-1 w-full flex gap-1">
      <div className="h-full w-8 bg-cyan-400 rounded-full group-hover:w-full transition-all duration-300" />
      <div className="h-full w-3 bg-cyan-600 rounded-full" />
      <div className="h-full w-5 bg-cyan-500 rounded-full" />
    </div>
  </div>
);

export default Box;
