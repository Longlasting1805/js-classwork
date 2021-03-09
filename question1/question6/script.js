num = parseInt(prompt("enter first number"));
num1 = parseInt(prompt("enter second number"));
num2 = parseInt(prompt("enter third number"));

let array = new Array(num, num1, num2);

function rotate(rotate){
    document.write("<h2> Question Six</h2>");

    let first = array.shift();
    array.push(first);
    return array;
}

document.write("<h3>rorated array: </h3>",rotate (array))
