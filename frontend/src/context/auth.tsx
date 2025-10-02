import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { User } from "@/types";
import { useGetAuthUser } from "@/hooks/useUsers";
import constant from "@/lib/constant";

interface AuthContextProps {
  user?: User | null;
  loading: boolean;
  setUser: (user: User) => void;
  login: (accessToken: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const queryClient = useQueryClient();

  
  const { isLoading, data } = useGetAuthUser();

  const login = (accessToken: string, user: User) => {
    
    Cookies.set(constant.ACCESS_TOKEN_KEY, accessToken, {
      expires: constant.ACCESS_TOKEN_EXPIRE,
      secure: true,      
      sameSite: "None",  
    });

    setUser(user);
    queryClient.setQueryData(["users", "me"], user);
  };

  const logout = async () => {
    Cookies.remove(constant.ACCESS_TOKEN_KEY);
    setUser(null);
    queryClient.removeQueries(); 
  };

  
  useEffect(() => {
    if (!isLoading && data) {
      setUser(data);
    }
  }, [data, isLoading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading: isLoading,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
