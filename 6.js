function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let randomNumber = getRandomInt(1, 10);
let userNumber;
while (randomNumber !== userNumber) {
  userNumber = parseFloat(prompt("Угадай число от 1 до 10", ""));
  if (isNaN(userNumber)) {
    alert("Введите число");
    continue;
  }

  if (randomNumber === userNumber) {
    alert("Вы угадали!");
  } else {
    alert("Упс.. Попробуйте ещё раз");
  }
}
