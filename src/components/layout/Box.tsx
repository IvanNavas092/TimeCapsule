export interface BoxProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

const Box = ({icon, title, subtitle}: BoxProps) => (
  <div className="p-6 flex flex-col border-1 ">
    {icon}
    <h2 className="font-bold text-lg text-white">{title}</h2>
    <p className="text-gray-100">{subtitle}</p>
  </div>
);

export default Box;

