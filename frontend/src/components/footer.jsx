import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center p-8 text-sm font-bold mt-auto">
      Desenvolvido por TI Murta Consultoria © {year} - Todos os direitos reservados
    </footer>
  );
}
