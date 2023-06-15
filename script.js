// complete the given function

function palindrome(str){
	let i=0;
	for(let j=str.length; j>=0; j--)
		{
			if(str[i] !== str[j])
			{
				return false;
			}
		}
	return true;
}
module.exports = palindrome
