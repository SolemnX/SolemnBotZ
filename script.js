const Levels = { A: 1, B: 2, C: 3, D: 4 };
const sumButton = document.getElementById('sum-button');
const resultDiv = document.getElementById('result');

sumButton.addEventListener('click', () => {
  const startLetter = document.getElementById('start-letter').value.toUpperCase();
  const endLetter = document.getElementById('end-letter').value.toUpperCase();
  let sum = 0;

  const letters = Object.keys(Levels);
  const values = Object.values(Levels);

  const startIndex = letters.indexOf(startLetter);
  const endIndex = letters.indexOf(endLetter);

  if (startIndex < 0 || endIndex < 0) {
    resultDiv.innerHTML = 'Invalid input. Please enter valid letters.';
    return;
  }

  if (startIndex > endIndex) {
    [startIndex, endIndex] = [endIndex, startIndex];
  }

  for (let i = startIndex; i < endIndex; i++) {
    sum += values[i];
  }

  resultDiv.innerHTML = `The sum of the numbers between ${startLetter} and ${endLetter} is ${sum}.`;
});
