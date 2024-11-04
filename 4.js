let N = parseFloat(prompt("Веедите число", ""));
if (!isNaN(N)) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${N} * ${i} = ${N * i}`);
  }
} else {
  alert("Введите число");
}
