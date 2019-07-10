//Cách 1:
function largestOfFour(arr){
	let result = [];
	for(let i = 0; i < arr.length; i++){
		let greatestNum = arr[i][0]; //khởi tạo biến với số đầu tiên trong mỗi mảng i
		for(let j = 0; j < arr[i].length; j++){
			if(arr[i][j] > greatestNum){
				greatestNum = arr[i][j];
			}
		}
		result[i] = greatestNum; //push sổ lớn nhất vào mỗi mảng i
	}
	return result;
}


//Cách 2:
function largestOfFour(arr){
	for(let i = 0; i < arr.length; i++){
		arr[i] = arr[i].sort((small,large) => {
			return large - small;
		}) 
	}
	let arrTemp = [];
	for(let j = 0; j < arr.length; j++){
		arrTemp.push(arr[j][0]);
	}
	return arrTemp;
}


(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
