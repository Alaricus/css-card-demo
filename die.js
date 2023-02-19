const die = document.querySelector('.die');

const sideRotations = {
  1: 'rotateX(-15deg) rotateY(-15deg)',
  2: 'rotateX(-105deg) rotateY(0deg) rotateZ(-15deg)',
  3: 'rotateX(-15deg) rotateY(75deg)',
  4: 'rotateX(0deg) rotateY(-105deg) rotateZ(15deg)',
  5: 'rotateX(75deg) rotateY(0deg) rotateZ(15deg)',
  6: 'rotateX(165deg) rotateY(15deg)',
}

die.addEventListener('click', () => {
  const sequence = [Math.floor(Math.random() * 6 + 1)];
  while (sequence.length < 10) {
    const randomSide = Math.floor(Math.random() * 6 + 1);
    if (sequence[sequence.length - 1] !== randomSide & sequence[sequence.length - 2] !== randomSide) {
      sequence.push(randomSide);
    }
  }

  for (let i = 1; i < sequence.length + 1; i++) {
    setTimeout(() => {
      die.style.transform = sideRotations[sequence[i - 1]];
    }, i * 250);
  }
});
