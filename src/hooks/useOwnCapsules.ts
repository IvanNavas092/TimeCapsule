import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { getOwnCapsules } from '@/axios_helper';
import type { Capsule } from '@/components/interfaces/Capsule';

export const useOwnCapsules = () => {
  const { user } = useAuth();
  const [capsules, setCapsules] = useState<Capsule[]>([]);

  useEffect(() => {
    const fetchCapsules = async () => {
      if (!user?.id) return;
      try {
        const res = await getOwnCapsules(user.id);
        setCapsules(res.data);
      } catch (error) {
        console.error('Error al obtener las cápsulas del usuario', error);
      }
    };

    fetchCapsules();
  }, [user?.id]);

  return { capsules };
};
