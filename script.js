// complete the given function

function palindrome(str){
	let newStr = "";
	for(let j=str.length-1; j>=0; j--)
		{
			newStr += str[j];
		}
	return str === newStr ? true : false;
}
module.exports = palindrome
