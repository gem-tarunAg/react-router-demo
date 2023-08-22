import { createContext, useContext, useState } from 'react';

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: string | undefined;
  login: (user: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<string>();

  const login = (user: string) => {
    setUser(user);
  };

  const logout = () => {
    setUser('');
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
