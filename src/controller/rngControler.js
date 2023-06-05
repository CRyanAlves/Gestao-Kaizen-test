import { random, seed } from '..\randomNumberGenerator.js';

// Define a função para gerar os valores aleatórios
export const generateRandomValues = (req, res) => {
  seed(192837465); // Define a semente como 192837465

  const map = new Map();

  // Itera 9 vezes, de 0 a 8
  for (let i = 0; i <= 8; i++) {
    // Salva o índice como chave no Map e chama a função random para o valor
    map.set(i, random());
  }

  // Converte os valores do Map em um array
  const randomValues = Array.from(map.values());

  // Retorna os valores gerados
  res.json(randomValues);
};