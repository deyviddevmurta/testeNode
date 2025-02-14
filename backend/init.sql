-- Cria o banco de dados (se não existir)
CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

-- Cria a tabela 'items'
CREATE TABLE IF NOT EXISTS items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT
);

-- Insere dados iniciais na tabela 'items'
INSERT INTO items (name, description) VALUES
('Item 1', 'Descrição do Item 1'),
('Item 2', 'Descrição do Item 2'),
('Item 3', 'Descrição do Item 3');