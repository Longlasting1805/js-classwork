num = parseInt(prompt("enter first number"));
num1 = parseInt(prompt("enter second number"));



function add(num, num1) {
    document.write("<h2>Question Seven</h2>");
    sum = (num + num1);

    

    if (num == num1){
        sum =  sum * 3
    }
    return sum;
}

document.write(add(num, num1))

