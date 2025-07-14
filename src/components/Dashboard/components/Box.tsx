export interface BoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  createAt?: Date;
  closeDate?: Date;
  CapsuleAvatar?: string;
  status?: 'active' | 'locked' | 'expired';
  isPrivate?: boolean;
  onClick?: () => void;
}

const Box = ({
  icon,
  title,
  description,
  createAt,
  closeDate,
  status = 'active',
  isPrivate,
  onClick,
}: BoxProps) => {
  const statusColors = {
    active: 'bg-emerald-500/20 border-emerald-400/50',
    locked: 'bg-amber-500/20 border-amber-400/50',
    expired: 'bg-rose-500/20 border-rose-400/50',
  };

  const statusIconHover = {
    active: 'shadow group-hover:bg-emerald-400/10',
    locked: 'shadow group-hover:bg-amber-400/10',
    expired: 'shadow group-hover:bg-rose-400/10',
  };

  const daysLeft =
    createAt && closeDate
      ? Math.ceil(
          (new Date(closeDate).getTime() - new Date(createAt).getTime()) / (1000 * 60 * 60 * 24)
        )
      : null;

  return (
    <div
      onClick={onClick}
      className={`relative flex flex-col items-center gap-4 p-8 rounded-2xl max-w-xl min-h-[250px]
        border-2 ${statusColors[status]}
        bg-gradient-to-br from-gray-900/80 to-gray-800/80 hover:to-gray-700/90
        text-white transition-all duration-300 cursor-pointer
        transform hover:scale-[1.02] justify-center
        shadow-lg hover:shadow-xl shadow-black/50
        overflow-hidden group`}>
      {/* circle with status */}

      { 
        isPrivate ? (
          <div className={`${statusColors[status]} p-2 m-2 absolute top-0 right-0 rounded-full`} />
        ) : (
          <p className="p-2 m-2 absolute top-0 right-0 rounded-full bg-blue-500/20 border-blue-400/50 text-xs text-blue-200">Shared</p>
        )
      }
      {/* icon with fx */}
      <div className="relative shrink-0 text-4xl z-10">
        <div className="text-blue-300 ">{icon}</div>
        <div
          className={`${statusIconHover[status]} absolute top-0 left-0 right-0 bottom-0
          scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full`}
        />
      </div>
      {/* content */}
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
          {createAt && (typeof createAt === 'string' ? createAt : createAt.toLocaleDateString())}
          {closeDate &&
            (typeof closeDate === 'string'
              ? ` - ${closeDate}`
              : ` - ${closeDate.toLocaleDateString()}`)}
        </div>

        {daysLeft !== null && (
          <p className="mt-1 text-sm text-blue-200 font-semibold">
            {daysLeft > 0
              ? `Faltan ${daysLeft} días`
              : daysLeft === 0
              ? 'Último día'
              : `Finalizó hace ${Math.abs(daysLeft)} días`}
          </p>
        )}
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
    </div>
  );
};

export default Box;
