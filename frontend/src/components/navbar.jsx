import React from "react";
import { Link } from "react-router-dom"; // Importa o Link para navegação interna
import Logomarca from "../assets/images/murta-2x-vetor.png";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center shadow-md">
      {/* A logo agora está envolvida por um Link que redireciona para a página inicial */}
      <Link to="/dashboard">
        <img src={Logomarca} alt="Logo Murta Consultoria" className="w-36" />
      </Link>
      <div className="bg-white px-6 py-2 rounded-lg shadow-md text-gray-500 font-bold text-lg">
        Logo da Operadora
      </div>
    </nav>
  );
}
