console.log("   Hello Developers.   ") //0 based indexing
let str = "   Hello Developers.   "
console.log(str.length) //length of the string
console.log(str.toUpperCase()) //convert to uppercase
console.log(str.toLowerCase()) //convert to lowercase
console.log(str.charAt(9)) // D : character at index 9
console.log(str.charCodeAt(9)) // 68 : ASCII value of character at index 9

//Substring
console.log(str.substring(0, 5)) // Hello : substring from index 0 to 5
console.log(str.substring(6)) // Developers. : substring from index 6 to end
//For substrings, the last index is exclusive, only the starting index is inclusive.

console.log(str.substring(5, 0)) // Hello : same as substring from index 0 to 5, the order of indexes doesn't matter in case of substring

console.log(str.substring(-5)) // substring from index -5 to the end, but -5 index doesn't exist so it will return the substring from index 0 to the end
//So, negative indexes are treated as 0

//Slice Function
console.log(str.slice(0, 5)) // Hello : slice from index 0 to 5
console.log(str.slice(6)) // Developers. : slice from index 6 to end
console.log(str.slice(-3)) // ers. : slice from index -3 to end: negative index counts from the end of the string

console.log(str.slice(5, 0)) // empty string : unlike substring, the order of indexes matters in case of slice
console.log(str.trim()) // "Hello Developers." : removes whitespace from both ends
console.log(str.includes("Developers.")) // true : checks if the string includes "Developers."
console.log(str.includes("developers.")) // false : thus, str.includes function is case-sensitive

