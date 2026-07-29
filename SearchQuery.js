//You are building a search feature for a learning platform. Users often enter queries with extra
//spaces, inconsistent casing, and multiple keywords. Your task is to clean, parse, and analyze the
//search query using JavaScript string methods.

let searchQuery = " Learn JavaScript Functions Arrow IIFE";
console.log(searchQuery.trim()); //Trim the input string and print the cleaned value and its length
console.log(searchQuery.toLowerCase());//Convert the cleaned string to lowercase
console.log(searchQuery.toUpperCase());//Convert the cleaned string to uppercase
//Extract the word 'JavaScript' using substring() and slice()
console.log(searchQuery.substring(7, 18)); // Using substring()
console.log(searchQuery.slice(7, 18)); // Using slice()
//Check whether the query contains: functions, arrow, and iife
console.log(searchQuery.includes("functions")); // Check for 'functions': false because of case sensitivity
console.log(searchQuery.includes("arrow")); // Check for 'arrow': false because of case sensitivity
console.log(searchQuery.includes("iife")); // Check for 'iife': false because of case sensitivity
//Print the character at index 6 and the ASCII value of the first character
console.log(searchQuery.charAt(6)); // Character at index 6: J
console.log(searchQuery.charCodeAt(0)); // ASCII value of the first character: 76
//Perform a case-insensitive check for the word 'javascript'
console.log(searchQuery.toLowerCase().includes("javascript")); // Check for 'javascript': true

//What is case normalization?
//Case normalization is the process of converting a string to a standard case (usually lowercase) to ensure consistent and accurate comparisons.

//What bug can occur if case normalization is skipped?
//If case normalization is skipped, the search may fail to find matches due to differences in casing, leading to incorrect or missed results.

//What is string parsing effect?
//String parsing refers to the process of analyzing and extracting meaningful information from a string. This can involve breaking the string into components, identifying patterns, and transforming the data into a more usable format.

//How does poor string parsing affect search accuracy and user experience?
//Poor string parsing can lead to inaccurate search results, as it may not correctly identify keywords or phrases. This can frustrate users, as they may not find the information they are looking for, leading to a negative experience on the platform.

//Why is trimming user input important in real-world applications?
//Trimming user input is important because it removes unnecessary whitespace from the beginning and end of a string, ensuring that searches are not affected by accidental spaces. This leads to more accurate and reliable search results.
