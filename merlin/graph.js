class Graph {
  constructor(nCell, rounds) {
    this.n = Math.pow(2, nCell);
    this.zeroes = new Array(nCell).fill('0');
    this.nodes = new Array(this.n);
    this.matrix = new Array(this.n);
    this.list = new Array(this.n);
    this.rounds = rounds;
    for (let i = 0; i < this.nodes.length; i++) {
      this.matrix[i] = new Array(this.n).fill(0);
      this.list[i] = new Array();
    }
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i] = this.toMerlin(i);
      for (let j = 0; j < this.rounds.length; j++) {
        const newNodeNum = this.toNumber(this.applyRound(this.nodes[i], j));
        this.matrix[i][newNodeNum] = 1;
        this.list[i].push(newNodeNum);
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
// console.log(obj.matrix);
console.log(obj.list);
