import React, { createContext, useContext, useState, useEffect } from "react";

// Interfaces
import AuthContextData from "../interfaces/AuthContextData";
import Usuario from "../interfaces/Usuario";

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [usuario, setUsuario] = useState<Usuario>({} as Usuario);
  const [signed, setSigned] = useState<boolean>(false);

  useEffect(() => {
    async function loadStorage() {
      // checar storage pra não perder o logado ao F5
      const usr = localStorage.getItem("usr");

      if (usr) {
        setUsuario({ id: 1, nome: "Gabriel" });
        setSigned(true);
      } else {
        signIn();
      }
    }

    loadStorage();
  }, []);

  const signIn = () => {
    // Logica para logar.
    console.log("loguei!");
  };

  async function signOut() {
    // Limpar as chaves do storage
    localStorage.clear();
    setUsuario({} as Usuario);
    window.location.href = "http://localhost:3000";
  }

  return (
    <AuthContext.Provider value={{ signed, usuario, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("O Hook useAuth deve ser usado com um provider!");
  }

  return context;
}

export { AuthProvider, useAuth };
