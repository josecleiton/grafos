function smartGame(n, k) {
  const visited = {n: true};
  const queue = [{data: n, level: 0}];
  const rounds = (n, i) => {
    switch (i) {
      case 0:
        return Math.trunc(n / 2);
      case 1:
        return Math.trunc(n * 2);
      case 2:
        return Math.trunc(n * 3);
      case 3:
        return Math.trunc(n / 3);
      case 4:
        return Math.trunc(n - 7);
      case 5:
        return Math.trunc(n + 7);
    }
  };
  while (queue.length) {
    const front = queue[0];
    // console.log(queue);
    if (front.data === k) {
      return front.level;
    }
    for (let i = 0; i < 6; i++) {
      const nextNum = rounds(front.data, i);
      if (!visited[nextNum]) {
        queue.push({data: nextNum, level: front.level + 1});
        visited[nextNum] = true;
      }
    }
    queue.shift();
  }
  return Infinity;
}

// console.log('n = 10 | m = 15 ->', smartGame(10, 15));
// console.log('n = 45 | m = 15 ->', smartGame(45, 15));
console.log('n = 5632 | m = 8967 ->', smartGame(5632, 8967));
