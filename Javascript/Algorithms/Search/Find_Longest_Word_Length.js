function findLongestWordLength(str){
	let words = str.split(' ');
	let maxLength = 0;
	for(let i = 0; i < words.length; i++){
		if(maxLength < words[i].length){
			maxLength = words[i].length;
		}
	}
	return maxLength;
}

(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
