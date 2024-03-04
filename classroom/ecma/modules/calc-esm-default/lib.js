export function sum(a, b = 1) {
  return a + b;
}

export const minus = function (a, b) {
  return a - b;
};

export const product = (a, b) => {
  return a * b;
};

export const divide = (a, b) => a / b;

export default { sum, minus, product, divide };
