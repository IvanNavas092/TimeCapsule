import type { Capsule } from '@/components/interfaces/Capsule';
import { useEffect, useState } from 'react';
import { getCapsules } from '@/axios_helper';

export const useCapsules = () => {
  const [capsules, setCapsules] = useState<Capsule[]>([]);


  useEffect(() => {
    const fetchCapsules = async () => {
      try {
        const response = await getCapsules();
        setCapsules(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCapsules();
  }, []);
  return { capsules };
};