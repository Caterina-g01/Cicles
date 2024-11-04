let numOne = parseFloat(prompt("Введите первое число", ""));
let numTwo = parseFloat(prompt("Введите второе число", ""));
let operation = prompt("Выберите операцию: +, -, *, /", "");
if (!isNaN(numOne) || !isNaN(numTwo)) {
  switch (operation) {
    case "+":
      alert(numOne + numTwo);
      break;
    case "-":
      alert(numOne - numTwo);
      break;
    case "*":
      alert(numOne * numTwo);
      break;
    case "/":
      if (numTwo === 0) {
        alert("Ошибка: деление на ноль невозможно.");
      } else {
        alert(numOne / numTwo);
      }
    default:
      alert("Неизвестная операция. Пожалуйста, выберите +, -, * или /.");
      break;
  }
} else {
  alert("Вы не ввели корректные числа.");
}
