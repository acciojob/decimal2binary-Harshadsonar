function decimalToBinary(decimal) {
  if (decimal === 0) {
    return "0";
  }

  let binary = "";
  while (decimal > 0) {
    const remainder = decimal % 2;
    binary = remainder.toString() + binary;
    decimal = Math.floor(decimal / 2);
  }

  return binary;
}


