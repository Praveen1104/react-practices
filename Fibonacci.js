function Fibonacci(num) {
  if (num <= 0) {
    return [];
  } else if (num === 1) {
    return [0];
  }
  const sequnce = [0, 1];
  for (let i = 2; i < num; i++) {
    const next = sequnce[i - 1] + sequnce[i - 2];
    sequnce.push(next);
  }
  return sequnce;
}

const number = 10;
console.log(Fibonacci(number));
