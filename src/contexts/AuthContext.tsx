import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import {
  getSensitiveData,
  setSensitiveData,
  deleteSensitiveData,
} from "./storage";

interface AuthContextType {
  user: { token: string } | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<{ token: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUserData = async () => {
      const token = await getSensitiveData("authToken");
      if (token) {
        setUser({ token });
      }
      setLoading(false);
    };

    loadUserData();
  }, []);

  const login = async (token: string) => {
    await setSensitiveData("authToken", token);
    setUser({ token });
  };

  const logout = async () => {
    await deleteSensitiveData("authToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
