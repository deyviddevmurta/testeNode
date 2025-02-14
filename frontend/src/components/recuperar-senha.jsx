import React, { useState } from "react";

// Componente modal para recuperação de senha
function RecuperarSenha({ isVisible, onClose }) {
  // Estado para armazenar o e-mail digitado e mensagens de feedback
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Se o modal não estiver visível, não renderiza nada
  if (!isVisible) return null;

  // Função para envio do formulário de recuperação
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:5000/recuperar-senha", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar o pedido de recuperação de senha");
      }

      //const data = await response.json();
      // Feedback positivo ao usuário
      setMessage("Verifique seu e-mail para o OTP e as instruções de recuperação.");
    } catch (error) {
      // Feedback de erro caso ocorra falha
      setMessage("Erro: Não foi possível enviar o pedido de recuperação. Tente novamente.");
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    // Container do modal com fundo semi-transparente que fecha ao clicar fora
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={onClose}
    >
      {/* Caixa do modal que impede o fechamento ao clicar internamente */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Recuperar Senha</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {message && (
            <p className="text-sm text-center text-gray-700">{message}</p>
          )}
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RecuperarSenha;
