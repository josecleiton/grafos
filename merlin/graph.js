class Graph {
  constructor(nCell, rounds) {
    this.zeroes = new Array(nCell).fill('0');
    this.nodes = new Array(Math.pow(2, nCell));
    this.data = new Array(Math.pow(2, nCell));
    this.rounds = rounds;
    for (let i = 0; i < this.nodes.length; i++)
      this.data[i] = new Array(Math.pow(2, nCell)).fill(0);
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i] = this.toMerlin(i);
      for (let j = 0; j < this.rounds.length; j++) {
        const newNodeNum = this.toNumber(this.applyRound(this.nodes[i], j));
        this.data[newNodeNum][i] = 1;
      }
    }
  }
  applyRound(toApply, index) {
    const round = this.rounds[index];
    let merlin = [...toApply];
    for (let i = 0; i < merlin.length; i++) {
      merlin[i] = (Number(merlin[i]) + Number(round[i])) % 2;
    }
    return merlin;
  }
  toNumber(merlin) {
    return parseInt(merlin.join(''), 2);
  }
  toMerlin(number) {
    const tmpArr = number.toString(2).split('');
    return this.zeroes
      .slice(0, this.zeroes.length - tmpArr.length)
      .concat(tmpArr);
  }
}

const obj = new Graph(4, [
  [1, 1, 0, 0],
  [0, 0, 1, 1],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
]);

// console.log(obj.nodes);
// console.log(obj.toNumber(obj.nodes[2]));
// console.log(obj.toMerlin(4));
// console.log(obj.rounds);
console.log(obj.data);
