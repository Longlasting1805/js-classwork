num = parseInt(prompt("enter first number"));
num1 = parseInt(prompt("enter second number"));


function toArray(num, num1){
    document.write("<h2>Question four</h2>");

    let array = new Array(num, num1);
    return array;
}
document.write("<h3>new array: </h3>", toArray(num, num1));

