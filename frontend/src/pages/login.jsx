import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import Logomarca from "../assets/images/murta-2x.png";
import RecuperarSenha from "../components/recuperar-senha"; // Importa o modal
import Footer from "../components/footer";

export default function Login() {
  // Estados dos campos, mensagens de erro e visibilidade do modal
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erro, setErro] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  // Hook para navegação
  const navigate = useNavigate();

  // Função de envio do formulário de login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o recarregamento da página

    if (!email || !password) {
      setErro("Email e senha são obrigatórios");
      return;
    }
    
    try {
      // Cria a string de parâmetros utilizando URLSearchParams
      const params = new URLSearchParams({ email, password });
      
      // Requisição POST com os campos passados como query parameters na URL
      const response = await fetch(`/api/items'?${params.toString()}`, {

        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Falha no login");
      }

      const data = await response.json();
      console.log("Login realizado com sucesso:", data);
      // Redireciona para a dashboard após o login bem-sucedido
      navigate("/dashboard");
    } catch (error) {
      setErro("Falha ao efetuar login. Verifique suas credenciais.");
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-blue-700 text-white px-4">
        {/* Container principal do conteúdo */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg shadow-black text-black">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img
                src={Logomarca}
                alt="Murta Consultoria Logo"
                className="w-60"
              />
            </div>

            {/* Formulário de login */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {erro && <p className="text-red-500 text-center">{erro}</p>}
              
              <div>
                <label className="block font-bold">Email:</label>
                <input
                  type="text"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block font-bold">Senha:</label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Opções de link e botão */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setModalVisible(true)}
                  type="button"
                  className="text-blue-700 font-bold text-sm"
                >
                  Esqueceu a senha?
                </button>
                <button
                  type="submit"
                  className="bg-blue-700 text-white py-2 px-6 rounded-lg font-bold shadow-md hover:bg-blue-800"
                >
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Rodapé fixo */}
        <Footer />
      </div>

      {/* Modal de recuperação de senha */}
      <RecuperarSenha
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </>
  );
}
