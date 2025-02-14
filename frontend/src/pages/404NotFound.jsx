import React from "react";

import Logomarca from '../assets/images/murta-2x-vetor.png';

export default function NotFoundRoute() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-700 text-white px-4">
      <img src={Logomarca} alt="Logo Murta Consultoria" className="w-72 p-10" />
      <h1 className="text-4xl font-bold mb-4">404 - Página Não Encontrada</h1>
      <p className="text-lg mb-8">
        Desculpe, a rota que você tentou acessar não existe.
      </p>
      <a
        href="/dashboard"
        className="bg-white text-blue-700 font-bold py-2 px-6 rounded-lg shadow-md hover:bg-gray-200"
      >
        Voltar para a Página Inicial
      </a>
    </div>
  );
}
