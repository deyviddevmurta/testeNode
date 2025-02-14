import React from "react";
//import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Rotas de páginas
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import ImportarDados from '../pages/importar-xml';
//import Home from "../pages/home";
import NotFoundRoute from '../pages/404NotFound';

// Enlaçamento de Autenticação
import PrivateRoute from "./private-route";
import PainelGerencial from "../pages/admin/painel-gerencial";
import PaginaRelatorios from "../pages/relatorios";
import TelaUsuarios from "../pages/admin/usuarios";
import TelaContratantes from "../pages/admin/contratantes";

// Métodos
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/importar-xml",
    element: (
        <PrivateRoute>
            <ImportarDados />
        </PrivateRoute>
    )
  },
  {
    path: "/relatorios",
    element: <PaginaRelatorios />
  },
  // Telas de Gerencia
  {
    path: "/painel-gerencial",
    element: <PainelGerencial />,
  },
  {
    path: "/painel-gerencial/usuarios",
    element: <TelaUsuarios />,
  },
  {
    path: "/painel-gerencial/contratantes",
    element: <TelaContratantes />,
  },
  {
    path: "/painel-gerencial/tabelas",
    element: <TelaContratantes />,
  },
  {
    path: "*",
    element: <NotFoundRoute />
  },
]);

export default function Rotas() {
  return <RouterProvider router={router} />;
}
