import React from "react";

// Importação dos componentes
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";

export default function TelaUsuarios() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-100">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-1 flex-col md:flex-row">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 flex flex-col p-6 space-y-6">
          </main>
        </div>
      </div>
    </>
  );
}
