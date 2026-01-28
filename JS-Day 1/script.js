/*let arr=[1,2,3,4,5]
let rev=[]
while (arr.length>0){
    rev.push(arr.pop())
}
console.log(rev);

let arr=[-3,7,-6,-11,13,8]
let res=[]
while (arr.length>0){
    let val = arr.shift();
    if (val>0){
        res.push(val);
    }
}
console.log(res)
*/


function checkPalindrome(str) {
    let len = str.length;

    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return "Not a palindrome";
        }
    }
    return "Palindrome";
}

console.log(checkPalindrome("racecar"));