
// 打乱一个数组
function shuffle() {
  for (let i = arr.length - 1; i > 0; i--) {
    const randIndex = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[randIndex]] = [arr[randIndex], arr[i]];
  }
}