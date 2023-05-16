const Levels = { 1:139,2:159,3:179,4:200,5:222,6:248,7:278,8:316,9:363,10:422,11:496,12:590,13:707,14:852,15:1029,16:1244,17:1502,18:1808,19:2170,20:2594,21:3086,22:3655,23:4308,24:5053,25:5899,26:6854,27:7928,28:9131,29:10473,30:11963,31:13613,32:15435,33:17439,34:19637,35:22043,36:24667,37:27525,38:30628,39:33991,40:37628,41:41554,42:45873,43:50331,44:55213,45:60446,46:66046,47:72030,48:78415,49:85219,50:92459,51:100154,52:108323,53:116985,54:126158,55:135864,56:146123,57:156954,58:168379,59:180419,60:193097,61:206433,62:220451,63:235173,64:250624,65:266825,66:283802,67:301578,68:320179,69:339629,70:359955,71:391181,72:403334,73:426442,74:450530,75:475626,76:501759,77:528955,78:557244,79:586655,80:617217,81:648959,82:681911,83:716105,84:751570,85:788338,86:826441,87:865910,88:906777,89:949076,90:992839,91:1038100,92:1084892,93:1133250,94:1183209,95:1234802,96:1288066,97:1343037,98:1399750,99:1458241,100:0,};
const sumButton = document.getElementById('sum-button');
const multiplyButton = document.getElementById('multiply-button');
const resultDiv1 = document.getElementById('result1');
const resultDiv2 = document.getElementById('result2');

let sum = 0;
#result1::after,
#result2::after {
  content: "";
  display: table;
  clear: both;
}

sumButton.addEventListener('click', () => {
  const startLetter = document.getElementById('start-letter').value.toUpperCase();
  const endLetter = document.getElementById('end-letter').value.toUpperCase();

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

  sum = 0;
  for (let i = startIndex; i < endIndex; i++) {
    sum += values[i];
  }

  resultDiv1.innerHTML = `The amount of exp needed from ${startLetter} to ${endLetter} is ${sum}.`;
  multiplyButton.disabled = false;
  sumButton.disabled = false;
});

multiplyButton.addEventListener('click', () => {
  const factor = Number(document.getElementById('factor').value);
  const product = sum * factor / 100000;
  resultDiv2.innerHTML = `Total Cost of Daycare is $${product}.`;
});
