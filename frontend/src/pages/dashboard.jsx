import React from "react";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar com links para as páginas */}
        <Sidebar />
        {/* Conteúdo principal com exemplo embedado do Power BI */}
        <main className="flex-1 flex justify-center items-center p-6">
          <div className="bg-red-100 w-full max-w-4xl h-96 flex justify-center items-center shadow-lg rounded-lg">
            <iframe
              title="Relatório Power BI"
              width="100%"
              height="100%"
              src="https://app.powerbi.com/view?r=eyJrIjoiMjU0OTQ4OWQtNGZmNy00MjRhLThmMjAtN2Y3Mzk0MGRkOWYwIiwidCI6IjlkYmE0ODBjLTRmYTctNDJmNC1iYmEzLTBmYjEzNzVmYmU1ZiJ9&pageName=ReportSection"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </main>
      </div>
    </div>
  );
}
