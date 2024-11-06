const factorial = +prompt("Введите число от 1 до 20", "");
if (factorial < 1 || factorial > 20) {
  alert("Введите число от 5 до 20");
} else {
  let result = 1;
  while (factorial > 0) {
    result *= factorial;
    factorial--;
  }
  alert("Факториал числа: " + result);
}
