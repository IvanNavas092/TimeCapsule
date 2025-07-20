import { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { getSharedCapsules } from '@/axios_helper';
import type { UserCapsules } from '@/components/interfaces/Capsule';

export const useSharedCapsules = () => {
  const { user } = useAuth();
  const [capsules, setCapsules] = useState<UserCapsules[]>([]);

  useEffect(() => {
    const fetchCapsules = async () => {
      if (!user?.id) return;
      try {
        const res = await getSharedCapsules(user.id);
        setCapsules(res.data);
      } catch (error) {
        console.error('Error al obtener las cápsulas del usuario', error);
      }
    };

    fetchCapsules();
  }, [user?.id]);

  return { capsules };  
};
