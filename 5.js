let sum = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    sum += i;
  }
}

console.log(`Сумма всех чисел от 0 до делящихся на 5 равна: ${sum}`);
