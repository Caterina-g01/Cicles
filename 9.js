let N = parseFloat(prompt("Введите число"));

if (!isNaN(N) && N > 0) {
  let sum = 0;
  for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  console.log(`Сумма всех чётных чисел от 1 до ${N} равна ${sum}`);
} else {
  alert("Введите число");
}
