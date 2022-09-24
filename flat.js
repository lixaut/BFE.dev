
// 按指定深度拍平数组
function flat(arr, depth = 1) {
  return depth
    ? arr.reduce((acc, cur) => {
        return [
          ...acc,
          ...(Array.isArray(cur) ? flat(cur, depth - 1) : [cur]),
        ];
      }, [])
    : arr;
}