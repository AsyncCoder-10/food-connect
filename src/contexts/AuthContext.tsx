import React, { createContext, useContext, useState, ReactNode } from "react";

type UserRole = "user" | "admin" | null;

interface AuthContextType {
  isAuthenticated: boolean;
  userRole: UserRole;
  userName: string;
  login: (email: string, password: string, role?: UserRole) => void;
  register: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState<UserRole>(null);
  const [userName, setUserName] = useState("");

  const login = (email: string, _password: string, role: UserRole = "user") => {
    setIsAuthenticated(true);
    setUserRole(email.includes("admin") ? "admin" : role);
    setUserName(email.split("@")[0]);
  };

  const register = (name: string, _email: string, _password: string) => {
    setIsAuthenticated(true);
    setUserRole("user");
    setUserName(name);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    setUserName("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, userName, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
