import React, { useState } from "react";
import { FiUpload, FiCalendar } from "react-icons/fi";
import { DatePicker } from "antd";
import "antd/dist/reset.css";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function ImportarDados() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setFileName(uploadedFile.name);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedDate || !file) {
      alert("Por favor, selecione uma data e um arquivo antes de enviar.");
      return;
    }

    // Simula um envio de dados
    console.log("Data selecionada:", selectedDate);
    console.log("Arquivo enviado:", fileName);

    alert("Arquivo enviado com sucesso!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-1 flex-col md:flex-row">
        <Sidebar />

        <main className="flex-1 flex flex-col p-6 space-y-6">
          <div className="bg-gray-300/50 p-4 rounded-lg text-center shadow-md">
            <h2 className="text-black text-2xl font-bold">
              Importar arquivos XML
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-300/50 p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6"
          >
            {/* Dados de Envio */}
            <div className="flex-1 space-y-4">
              <h2 className="text-black text-2xl font-bold">Dados de envio</h2>

              {/* Input de Data */}
              <div className="bg-white p-3 rounded-lg flex justify-between items-center shadow-sm">
                <span className="text-black text-sm font-medium">Mês de faturamento</span>
                <div className="flex items-center space-x-2">
                  <DatePicker
                    format="DD/MM/YYYY"
                    onChange={(date, dateString) => setSelectedDate(dateString)}
                    className="border-none text-sm focus:ring-0"
                  />
                  <FiCalendar className="text-gray-500" />
                </div>
              </div>
              {selectedDate && (
                <p className="text-gray-700 text-sm mt-2">
                  Data selecionada: {selectedDate}
                </p>
              )}

              {/* Upload de Arquivo */}
              <label className="bg-white p-3 rounded-lg shadow-sm flex items-center space-x-2 cursor-pointer">
                <FiUpload className="text-gray-500" />
                <input
                  type="file"
                  accept=".xml"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <span className="text-gray-500 text-sm font-medium">
                  {fileName || "Escolher arquivo ( Somente XML )"}
                </span>
              </label>

              {/* Botão de Envio */}
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-blue-700"
              >
                Enviar
              </button>
            </div>

            {/* Status do Carregamento*/}
            <div className="flex-1 text-center space-y-4">
              <h2 className="text-black text-2xl font-bold">
                Status do carregamento
              </h2>
              <p className="text-black/75 text-sm font-medium">
                Ao enviar seu arquivo XML, confira aqui o status do
                carregamento.
              </p>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
}
