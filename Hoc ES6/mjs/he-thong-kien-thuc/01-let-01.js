// console.log("ABC");

/*========BLOCK SCOPE===========*/

/*
for{ //BLOCK FOR
  if (true) { //BLOCK IF
    while (true) { //BLOCK WHILE

    }
  }
}
*/


/*********VAR**********/
/*
var score = 100;
var msg = "WIN";
if(score>50){
  var msg = "WIN";
  console.log(msg);
}
console.log(score);
console.log(msg);
*/

// let sử dụng trong 1 blook scrope

/*********LET**********/
let score = 100;
let msg = "WIN"; // phai khai bao cuc bo moi su dung duoc. global
if(score > 50){
  // let msg = "WIN"; // let khai bao chi goi duoc trong noi ham va phai dat no ra ngoai. trong BLOCK SCOPE
  console.log(msg);
}
console.log(score);
console.log(msg);

// let sử dụng trong 1 blook scrope
