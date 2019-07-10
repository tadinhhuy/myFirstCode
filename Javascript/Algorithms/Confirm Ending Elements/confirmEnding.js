function confirmEnding(str, target){
	return str.slice(str.length - target.length) === target; //return true or false?
}
(confirmEnding("Bastian",n));
