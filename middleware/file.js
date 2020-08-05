const fs = require('fs');
const file = './big.txt';

const processFile = (res) => {
	const data = [];
	fs.readFile(file, 'utf8', (err, contents) => {
	if (err) throw err;

	const wordsArray = splitByWords(contents);
	const wordsMap = createWordMap(wordsArray);
	const topTenWords = sortInDescendingOrder(wordsMap);

	for(let i = 0; i < 10; i++)
		data[i] = topTenWords[i];
	//console.log(data);
	res.send(data);
	});
}	

function splitByWords (text) {
	const wordsArray = text.split(/\s+/g);
	return wordsArray;
}

function createWordMap (wordsArray) {
  const wordsMap = {};

  wordsArray.forEach(key => {
    if (wordsMap.hasOwnProperty(key)) {
      wordsMap[key]++;
    } else {
      wordsMap[key] = 1;
    }
  });

  return wordsMap;
}

function sortInDescendingOrder (wordsMap) {
  let finalWordsArray = [];
  finalWordsArray = Object.keys(wordsMap).map(key => {
    return {
      Word: key,
      count: wordsMap[key]
    };
  });

  finalWordsArray.sort((a, b) => {return b.count - a.count;});

  return finalWordsArray;
}

exports.processFile = processFile;