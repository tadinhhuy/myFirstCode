function truncateString(str, num){
	if(str.length > num && num > 0 || num < 0){
		retrun str.slice(0,num) + "...";
	}else{
		return str;
	}
}

(truncateString("Absolutely Longer", 4));
