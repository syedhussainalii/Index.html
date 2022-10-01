// // 1. Ways to print in javaScript
// //alert("me")
// //document.write("This is document write")

// // 2. JavaScript console.API
// //console.log("Hello World", 4 + 6, "Another log");
// //console.warn("This is a warning");
// //console.error("This is a error");
// // 3. JavaScript varables
// //what are variables? container to store data values
// /*
// Multi 
// line 
// comment 
// */

// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// // 4. Data Types in JavaScript
// //Numbers 
// var num1 = 455;
// var num2 = 56.76;
// //string  
// var str1 = "This is a stirng";
// var str2 = 'This is also a string';

// //Objects 
// var marks = {
//     roohan: 95,
//     mohsin: 99,
//     harry: 99.99
// }
// console.log(marks);

// //Booleans
// var a = true;
// var b = false;
// console.log(a, b)

// var und = undefined;
// console.log(und)

// var n = null;
// console.log(null);

// /*
// At a very high level, there are two types of data types in javascript
// 1. Primitive Datatype : undefined, null, number, sring, boolean, Symbol
// 2. Reference Datatypes : Arrays and Objects
// */

// var arr = [1, 2, "string", 4, 5];
// console.log(arr);
// /*Operator in javascript
// Arthematic Operators
// var a = 100;
// var b = 10;
// console.log("The value of a+b is", a+b);
// console.log("The value of a-b is", a-b);
// console.log("The value of a*b is", a*b);
// console.log("The value of a/b is", a/b);*/



// //Asignment Operators
// //var c-b;
// //c += 2;
// // c -= 2;
// //c *= 2;
// //c /= 2;
// //console.log(c);

// /*Comparison Operators
// var x = 34;
// var y = 56;
// console.log(x == y)
// console.log(x >= y)*/

// //Logical Operators
// //console.log(true &&  true);
// //console.log(true && false);
// //console.log(false && true);
// //console.log(false && false);

// //Function in Javascript
// //DRY = DO Not Repeat Your Function

// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;

// }

// c1 = avg(4, 6);
// c2 = avg(14, 16);
// //console.log(c1,c2)

// //Conditionals In Javascript
// var age = 42;
// //Single if-statement
// if (age > 18) {
//     console.log('You can drink rasna water');
// }
// //if-Else Statement 
// // var age =  41;
// // if (age > 18){
// //     console.log('You can drink rasna water');
// // }
// // else{
// //     console.log('You cannot drink rasna water');

// // }

// age = 31;
// //if-else ladder
// if (age > 32) {
//     console.log("You are not a kid");
// }
// else if (age > 26) {
//     console.log("Bache nahi rahe");
// }
// else if (age > 22) {
//     console.log("Yes Bache nahi rahe");
// }
// else if (age > 18) {
//     console.log("18 Bache nahi rahe");
// }
// else {
//     console.log("Bache rahe")
// }
// console.log("End of ladder");

// let firstName = 'Hassan';

// console.log(firstName);

// console.log(45+78+8-9);

var arr = [1, 2, 3, 4, 5, 6, 7];
//console.log(arr);
// for (var i = 0; i < arr.length; i++) {
//     if (i == 2) {
//         //break;
//         continue;

//     }
//     console.log(arr[i]);  
//}
// arr.forEach(function(element){
//     console.log(element)
// })
// const ac = 0;
// ac++;
// ac = ac +1    
// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
    // j++;
//}

// do{
//  console.log(arr[j]);
//  j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
//Array Methods
//console.log(myArr.length);
// myArr.pop();
//  myArr.push("harry");
// myArr.shift();
// const newLen = myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);
//String Methods In JavaSScript
let myLovelyString = "Harry is a good boy good good";
// console.log(myLovelyString.length);
// console.log(myLovelyString.indexOf("good"))
// console.log(myLovelyString.lastIndexOf("good"))

// console.log(myLovelystring.slice(1,3))
d = myLovelyString.replace("Harry", "Roohan");
d = d.replace("good", "bad");
console.log(d, myLovelyString)
