function countLetters(str) {
  var characters = str.split(' ').join('');
  var freq = {};
  for (var i = 0; i < characters.length; i += 1) {
    var letter = characters.charAt(i);
    if(freq[letter]) {
      freq[letter] += 1;
    } else {
      freq[letter] = 1;
    }
  }
  return freq;
}

console.log(countLetters('lighthouse in the house'));
