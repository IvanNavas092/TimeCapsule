export interface ListProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ItemList = ({ icon, title, description }: ListProps) => (
  <div className="flex items-start gap-4 p-6 rounded-lg max-w-xl min-h-[200px]
      border border-blue-500/30 hover:border-blue-400
      bg-gray-800/50 hover:bg-gray-800/70
      text-white transition-all duration-300
      transform hover:scale-[1.02] focus:scale-[1.02] justify-center">
    <div className=" shrink-0 pt-1 text-blue-400">{icon}</div>
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-md text-gray-300 mt-1 leading-relaxed">{description}</p>
    </div>
  </div>
);

export default ItemList;
