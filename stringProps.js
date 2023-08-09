// text_string Properties and Methods
let text_str = "i can't speak english.";
let ss = "hello.";
text_str = text_str.concat("!!", ss);
console.log(text_str); // i can't speak english.!!hello
console.log(text_str.toUpperCase()); // I CAN'T SPEAK ENGLISH.!!HELLO
console.log(text_str.toLowerCase()); // i can't speak english.!!hello
console.log(text_str[9]); // p
console.log(text_str.indexOf("e")); // 10
console.log(text_str.lastIndexOf("e")); // 25
console.log(text_str.charAt(0)); // i
console.log(ss[ss.length - 1]); // .
console.log(ss.replace("hello.", "hi.")); // hi.
console.log(text_str.includes("english")); // true
