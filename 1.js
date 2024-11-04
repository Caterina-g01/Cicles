let n = +prompt("Введите число от 1 до 20", "");
if (n < 1 || n > 20) {
  alert("Введите число от 5 до 20");
} else {
  let result = 1;
  while (n > 0) {
    result *= n;
    n--;
  }
  alert("Факториал числа: " + result);
}
