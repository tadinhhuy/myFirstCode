function repeatStringNumTimes(str,num){
	let newArr = [];
	if(num < 0) {return ""};
	while(num > 0){
		newArr += str;
		num--;
	}
	return newArr;
}

(repeatStringNumTimes("abc",3));
