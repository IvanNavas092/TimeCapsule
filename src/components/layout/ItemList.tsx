export interface ListProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ItemList = ({ icon, title, description }: ListProps) => (
  <div className="flex items-start gap-4 border border-blue-500 text-white p-6 rounded-lg max-w-xl">
    <div className="pt-1 text-blue-400">{icon}</div>
    <div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-md text-gray-300 mt-1">{description}</p>
    </div>
  </div>
);

export default ItemList;
