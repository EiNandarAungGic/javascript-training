// exec(index), test(bol)
// match(index), search(index)

let reg = /A/i; // i = incase-sensitive
let fruit = "apple";

let result1 = reg.exec(fruit); // index => 0
let result2 = reg.test(fruit); // true
let result3 = fruit.match(reg); // index => 0
let result4 = fruit.search(reg); // index => 0
console.log(result1);

/* 
MetaCharacter Symbols
^ start with
$ end with
^..$ only
^h.llos$ any character
^h*llos$ zero or more char
^gre?a?y$ e or a optional
^gre?a?y\?
*/

function check(re, str) {
  if (re.test(str)) {
    console.log(`${str} match ${re.source}`);
  } else {
    console.warn(`${str} not match ${re.source}`);
  }
}

let str1 = "hallo?";
let str2 = "hellhellhell";
let str3 = "xy";
let regu1 = /a?llo\?/i;
let regu2 = /[^hi]allo/;
let regu3 = /[a-zA-Z0-9]{2,4}allo/;
let regu4 = /^([h]e){3}llo$/;
let regu5 = /\w/; // a-zA-z0-9_
let regu6 = /\W/; // @!.....
let regu7 = /hell\b/;
let regu8 = /x(?=y)/; // match x if only it is follow by y
let regu9 = /x(?!y)/; // match x if only it is not follow by y

check(regu1, str1);
check(regu2, str1);
check(regu3, str1); // hhallo => true
check(regu4, str1); // hehehello => true <=> hehebello => false
check(regu5, str1); // wrong => true <=> wrong@ => false
check(regu6, str1); // Wrong => false <=> @ => true
check(regu7, str2); // hellhellhell => true <=> hellhello => false
check(regu8, str3);
check(regu9, str3);
