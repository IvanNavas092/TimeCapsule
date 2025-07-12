export interface BoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  createAt?: Date;
  closeDate?: Date;
  CapsuleAvatar?: string;
  status?: 'active' | 'locked' | 'expired';
  onClick?: () => void;
}

const Box = ({
  icon,
  title,
  description,
  createAt,
  closeDate,
  status = 'active',
  onClick,
}: BoxProps) => {
  const statusColors = {
    active: 'bg-emerald-500/20 border-emerald-400/50',
    locked: 'bg-amber-500/20 border-amber-400/50',
    expired: 'bg-rose-500/20 border-rose-400/50',
  };

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center gap-4 p-8 rounded-2xl max-w-xl min-h-[250px]
        border-2 ${statusColors[status]} hover:border-${status.split('-')[0]}-300
        bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:to-gray-700/90
        text-white transition-all duration-300 cursor-pointer
        transform hover:scale-[1.02] justify-center
        shadow-lg hover:shadow-xl shadow-black/50
        overflow-hidden group`}>
      {/* Efecto de luz futurista */}
      <div
        className="absolute inset-0 rounded-2xl 
        bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]
        from-transparent via-blue-500/5 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Detalle de esquina */}
      <div
        className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 
        rounded-bl-lg border-blue-400/50"
      />

      {/* Icono con efecto especial */}
      <div className="relative shrink-0 text-4xl z-10">
        <div className="text-blue-300 group-hover:text-blue-200 transition-colors duration-300">
          {icon}
        </div>
        <div
          className="absolute inset-0 rounded-full bg-blue-400/10 
          scale-0 group-hover:scale-100 transition-transform duration-500"
        />
      </div>

      {/* Contenido */}
      <div className="relative text-center z-10">
        <h2
          className="text-2xl font-bold bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-200 to-cyan-300">
          {title}
        </h2>

        <p className="text-md text-gray-300 mt-2 leading-relaxed">{description}</p>

        <div
          className="mt-3 px-3 py-1 inline-block rounded-full
            bg-gray-700/60 text-sm font-mono text-amber-200">
          {createAt &&
            (typeof createAt === 'string' ? createAt : createAt.toLocaleDateString())}
          {closeDate &&
            (typeof closeDate === 'string'
              ? ` - ${closeDate}`
              : ` - ${closeDate.toLocaleDateString()}`)}
        </div>
      </div>

      {/* Banda de estado */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1.5 
        ${
          status === 'active'
            ? 'bg-emerald-400'
            : status === 'locked'
            ? 'bg-amber-400'
            : 'bg-rose-400'
        }`}
      />

      {/* Efecto de partículas (pseudoelemento) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${
                Math.random() * 2
              }s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Box;

// Necesario para las animaciones (añadir a tus estilos globales)
// @keyframes float {
//   0%, 100% { transform: translateY(0) translateX(0); }
//   50% { transform: translateY(-10px) translateX(5px); }
// }
