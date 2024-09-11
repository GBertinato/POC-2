// Array original
const array = [4, 8, 1, 3, 7, 2, 9];

// Exibindo o array original no HTML
document.getElementById('arrayOriginal').innerText = `Array: [${array}]`;

// Spread Operator
const newArray = [...array];
document.getElementById('spreadResult').innerText = `Novo Array com Spread: [${newArray}]`;

// Map (Multiplica cada elemento por 2)
const mappedArray = array.map(num => num * 2);
document.getElementById('mapResult').innerText = `Array com Map (x2): [${mappedArray}]`;

// Filter (Apenas números maiores que 5)
const filteredArray = array.filter(num => num > 5);
document.getElementById('filterResult').innerText = `Array com Filter (>5): [${filteredArray}]`;

// Reduce (Soma dos elementos)
const sum = array.reduce((acc, num) => acc + num, 0);
document.getElementById('reduceResult').innerText = `Soma com Reduce: ${sum}`;

// Sort (Ordena o array em ordem crescente)
const sortedArray = [...array].sort((a, b) => a - b);
document.getElementById('sortResult').innerText = `Array com Sort (Crescente): [${sortedArray}]`;
