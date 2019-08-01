function findElement(arr){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] % 2 === 0){
			return arr[i];
		}
	}
	return undefined;
}

(findElement([1,3,6,9]));
