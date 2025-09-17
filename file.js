// // Automatic type Conversion
 
// console.log(8*null)
// // -> 0
// console.log("5"-1);
// // ->4
// console.log("5"+1);
// // -> 51
// console.log("five"*2)
// //NaN
// console.log(false==0)
// //True
// console.log(null==undefined);
// //True
// console.log(null==0);
// //False
// console.log(null||"user");
// -> user 
// console.log("agnes"||"user");
// -> Agnes
// let ten=10;
// console.log(ten*ten)
// // -> 100
// let mood="light";
// console.log(mood)
// // -> light
// mood="dark";
// console.log(mood);
// // -> dark
// let luigisDebt=140;
// luigisDebt=luigisDebt-35;
// // console.log(luigisDebt);
// // -> 105
// let one=1, two=2;
// // console.log(one+two);
// // -> 3
// var name="Ayda";
// const greeting="hello ";
// // console.log(greeting+name)
// // -> hello Ayda

// let theNumber=Number(prompt("pick a number"));
// if (!isNaN(theNumber)){
//     console.log("your number is the square root of "+theNumber*theNumber);

// }
// else{
//     console.log("Hey . Why didn't you give me a number?")
// }
// ;

// if (1+1==2)console.log("Its True")
    // -> its true
let num= Number(prompt("Pick a number"));
if (num<10){
    console.log("small");

}
else if(num<100){
    console.log('Medium');
}
else{
    console.log("Large");
}