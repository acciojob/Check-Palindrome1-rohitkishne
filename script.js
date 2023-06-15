// complete the given function

function palindrome(str){
	let stng = str.toLowerCase();
	let newStr = "";
	for(let j=str.length-1; j>=0; j--)
		{
			newStr += str[j].toLowerCase();
		}
	return stng === newStr ? true : false;
}
module.exports = palindrome
