
function decode(message) {
  let i = 0, j = 0; cols = message[0]?.length;
  let step = 1, decoded = '';

  while(j < cols) {
    decoded += message[i][j];
    if (!message[i + step]) {
      step *= -1;
    }
    i += step;
    j++;
  }
  return decoded;
}