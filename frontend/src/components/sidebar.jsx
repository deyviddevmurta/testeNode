import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  // Estado para controlar se o submenu de "Painel Gerencial" está expandido
  const [expanded, setExpanded] = useState(false);

  // Definindo os links. Para "Painel Gerencial", adicionamos um array de sublinks.
  const links = [
    { name: "Início", path: "/dashboard" },
    { name: "Importar XML", path: "/importar-xml" },
    { name: "Relatórios de Custos", path: "/relatorios" },
    {
      name: "Painel Gerencial",
      path: "/painel-gerencial",
      sublinks: [
        { name: "Usuário", path: "/painel-gerencial/usuarios" },
        { name: "Contratantes", path: "/painel-gerencial/contratantes" },
        { name: "Tabelas", path: "/painel-gerencial/tabelas" },
      ],
    },
  ];

  // Verifica se a URL atual faz parte do "Painel Gerencial" ou de seus subitens.
  const isPanelActive = location.pathname.startsWith("/painel-gerencial");

  // Função para renderizar cada link. Se o link possuir subitens, renderiza um botão que
  // possibilita expandir/contrair o grupo, além dos subitens.
  function renderLink(link) {
    if (link.sublinks) {
      // O submenu é aberto automaticamente se estivermos na rota "Painel Gerencial"
      // ou se o usuário já tiver clicado para expandir.
      const currentlyExpanded = isPanelActive || expanded;
      return (
        <div key={link.path}>
          <button
            onClick={() => setExpanded(!expanded)}
            className={`block p-3 rounded-lg font-bold w-full text-left ${
              isPanelActive
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-gray-200"
            }`}
          >
            {link.name}
          </button>
          {currentlyExpanded && (
            <div className="pl-4">
              {link.sublinks.map((sublink) => (
                <NavLink
                  key={sublink.path}
                  to={sublink.path}
                  className={({ isActive }) =>
                    `block p-2 rounded-lg ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-blue-600 hover:bg-gray-200"
                    }`
                  }
                >
                  {sublink.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      );
    }
    return (
      <NavLink
        key={link.path}
        to={link.path}
        className={({ isActive }) =>
          `block p-3 rounded-lg font-bold ${
            isActive ? "bg-blue-600 text-white" : "text-blue-600 hover:bg-gray-200"
          }`
        }
      >
        {link.name}
      </NavLink>
    );
  }

  return (
    <aside className="bg-gray-300 w-full md:w-64 p-6 space-y-4">
      {links.map((link) => renderLink(link))}
    </aside>
  );
}
