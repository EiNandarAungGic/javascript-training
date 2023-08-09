// Scope var, let, const

var gl_var = 20; // global, redeclarable
let local_var = 10; // local
const const_var = 30; // constant var

console.log("Scope Var");
console.log(window.gl_var); // 20
console.log(window.local_var); // undefined
console.log(window.const_var); // undefined
