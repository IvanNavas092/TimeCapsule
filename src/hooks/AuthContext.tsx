import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import {
  isLoggedIn as checkIsLoggedIn,
  logout as doLogout,
  request,
  setAuthToken,
} from '@/axios_helper';

interface UserType {
  id: string;
  name: string;
  email: string;
  avatar: string | null;
}

interface AuthContextType {
  isLoggedIn: boolean;
  login: (token: string) => void;
  getUser: () => Promise<void>;
  logout: () => void;
  user: UserType | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(checkIsLoggedIn());
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    setIsLoggedIn(checkIsLoggedIn());
    if (checkIsLoggedIn()) {
      getUser();
    }
  }, []);

  const login = (token: string) => {
    setAuthToken(token);
    setIsLoggedIn(true);
    getUser();
  };

  const logout = () => {
    doLogout();
    setIsLoggedIn(false);
    setUser(null);
  };

  const getUser = async () => {
    try {
      const res = await request('GET', '/users/current', { withCredentials: true });
      setUser(res.data as UserType);
    } catch (e) {
      console.log(e);
      setUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
