import React from "react";
import { useAuth } from "../../contexts/auth";

const Home: React.FC = () => {
  const { usuario } = useAuth();
  return <h1>{JSON.stringify(usuario)}</h1>;
};

export default Home;
