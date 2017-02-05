alert('hello');
var x = 20;
if (true) {
    // block scope using let 
    let x = 10;
    console.log('value of x is ' + x);
}
console.log('value of x outside if block is ' + x);