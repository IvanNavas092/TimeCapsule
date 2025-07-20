import { useEffect, useState } from 'react';
import { useSharedCapsules } from '@/hooks/useSharedCapsules';
import Box from '../components/Box';
import { getCapsule } from '@/axios_helper';
import type { Capsule } from '@/components/interfaces/Capsule';

const Shareds = () => {
  const { capsules } = useSharedCapsules();
  const [sharedCapsules, setSharedCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const fetchSharedCapsules = async () => {
      try {
        const fetchedCapsules = await Promise.all(
          capsules.map((capsule) => getCapsule(capsule.capsuleId))
        );
        setSharedCapsules(fetchedCapsules.map((res) => res.data));
      } catch (error) {
        console.error('Error fetching shared capsules:', error);
      }
    };

    if (capsules.length > 0) {
      fetchSharedCapsules();
    }
  }, [capsules]);

  return (
    <section className="p-20">
      <div className="flex justify-between">
        <h1 className="text-2xl text-white text-center p-2">My Capsules</h1>
        <span className="p-2 text-white">{sharedCapsules.length} capsules total</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {sharedCapsules.map((capsule, index) => (
          <Box
            key={index}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-box">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" />
                <path d="M12 12l8 -4.5" />
                <path d="M12 12l0 9" />
                <path d="M12 12l-8 -4.5" />
              </svg>
            }
            title={capsule.title}
            description={capsule.description}
            createAt={capsule.createAt}
            closeDate={capsule.closeDate}
            status="locked"
            isPrivate={capsule.isPrivate}
          />
        ))}
      </div>
    </section>
  );
};

export default Shareds;
