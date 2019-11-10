function nCellHandler() {
  const selIn = document.getElementById('sel');
  const selected = selIn.selectedIndex;
  if (!selected) return;
  const opt = selIn.options[selected].value;
  // console.log(opt);
  if (!container[opt]) {
    container[opt] = new Graph(opt, [
      [1, 1, 0, 0],
      [0, 0, 1, 1],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
    ]);
  }
  active = opt;
  const graphInst = container[opt];
  const board = document.getElementById('board');
  while (board.firstChild) board.removeChild(board.firstChild);
  const captionText = document.createElement('p');
  captionText.innerHTML = 'Legenda:';
  const caption = document.createElement('div');
  caption.id = 'caption';
  for (let i = 0; i < 2; i++) {
    const captionBox = document.createElement('div');
    const text = document.createElement('p');
    const box = document.createElement('div');
    captionBox.className = 'caption';
    text.innerHTML = `${i}`;
    box.className = 'caption-box';
    box.style.background = i ? 'green' : 'blue';
    captionBox.appendChild(text);
    captionBox.appendChild(box);
    caption.appendChild(captionBox);
  }
  board.appendChild(captionText);
  board.appendChild(caption);
  const mySel = document.createElement('select');
  mySel.appendChild(document.createElement('option'));
  mySel.onchange = moveHandler;
  board.appendChild(mySel);
  for (let i = 0; i < graphInst.n; i++) {
    const optionEl = document.createElement('option');
    optionEl.value = optionEl.innerHTML = i.toString();
    // console.log(optionEl);
    mySel.appendChild(optionEl);
  }

  console.log(container);
}

function moveHandler(e) {
  const {srcElement: selEl} = e;
  // console.log(selEl);
  const board = document.getElementById('board');
  const containerEl = document.createElement('div');
  while (containerEl.lastChild) containerEl.removeChild(containerEl.lastChild);
  containerEl.id = 'container';
  const opt = selEl.options[selEl.selectedIndex].value;
  const selectedRelations = container[active].matrix[opt];
  const nextMoves = new Array();
  selectedRelations.forEach((item, idx) => {
    item && nextMoves.push(idx);
  });
  // console.log(nextMoves);
  // selEl.style.gridTemplate;
  let gridTemplate = '';
  for (let i = 0; i < Math.sqrt(Math.log2(selectedRelations.length)); i++) {
    gridTemplate += '25px ';
  }
  // console.log('container div colum template:', gridTemplate);
  const matrixGenerator = node => {
    const matrixContainerEl = document.createElement('div');
    matrixContainerEl.style.display = 'grid';
    matrixContainerEl.className = 'matrix';
    matrixContainerEl.style.gridTemplateColumns = gridTemplate;
    for (let j = 0; j < node.length; j++) {
      const cellEl = document.createElement('div');
      cellEl.setAttribute('class', 'cell');
      cellEl.style.background = Number(node[j]) ? 'green' : 'blue';
      matrixContainerEl.appendChild(cellEl);
    }
    return matrixContainerEl;
  };
  const messageEl = document.createElement('p');
  messageEl.innerHTML = `${opt}.`;
  containerEl.appendChild(messageEl);
  containerEl.appendChild(matrixGenerator(container[active].nodes[opt]));
  for (let i = 0; i < nextMoves.length; i++) {
    const matrixContainerEl = document.createElement('div');
    matrixContainerEl.style.display = 'grid';
    matrixContainerEl.style.gridTemplateColumns = gridTemplate;
    const node = container[active].nodes[nextMoves[i]];
    console.log(node);
    containerEl.appendChild(matrixGenerator(node));
  }
  board.appendChild(containerEl);
}
