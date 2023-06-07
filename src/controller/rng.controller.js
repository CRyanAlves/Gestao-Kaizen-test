import { random, seed } from '../randomNumberGenerator.js';

// Define a função para gerar os valores aleatórios
function geraRandomNumbers() {
  seed(192837465); // Define a semente como 192837465

  const map = new Map();

  // Itera 9 vezes, de 0 a 8
  // Salva o índice como chave no Map e chama a função random para o valor
  for (let i = 0; i < 9; i++) {
    
    map.set(i, random());

  }

  // Converte os valores do Map em um array;
  // converte array em uma string
  const randomValues = Array.from(map.values()).join('<br>').toString();

  // Retorna os valores gerados
  return randomValues
};

export default geraRandomNumbers;