function largestOfFour(arr){
	let result = [];
	for(let i = 0; i < arr.length; i++){
		let greatestNum = arr[i][0]; //chọn số đầu tiên trong mỗi mảng i
		for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] > greatestNum){
				greatestNum = arr[i][j];
			}
		}
		result[i] = greatestNum; //push sổ lớn nhất vào mỗi mảng i
	}
	return result;
}

(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
