// 1. Declare 3 variables in one statement
var variable1, variable2, variable3;

// 2. Declare 5 legal & 5 illegal variable names
// Legal variable names
var myVariable;
var my_variable;
var $variable;
var _variable;
var variable123;

// Illegal variable names
// var 1variable; // Starts with a number
// var my-variable; // Contains a hyphen
// var my variable; // Contains a space
// var var; // Reserved keyword
// var my variable!; // Contains special character

// 3. Display rules in the browser
document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable.<br>");
document.write("Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name.<br>");
document.write("Variable names are case-sensitive.<br>");
document.write("Variable names should not be JS reserved keywords.<br>");