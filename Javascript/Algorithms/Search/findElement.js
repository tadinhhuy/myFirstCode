function findElement(arr){
	let num = 0;
	for(let i = 0; i < arr.length; i++){
		num = arr[i];
		if(num = arr[i] % 2 === 0){
			return num;
		}
	}
	return undefined;
}
(findElement([1,3,6,9]));
