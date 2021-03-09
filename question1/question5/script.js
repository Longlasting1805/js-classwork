num = parseInt(prompt("enter first amount"));
num1 = parseInt(prompt("enter second amount"));

subcharge = 0;

function addWithSubcharge(num, num1){
    document.write("<h2>Question Five</h2>");

    if (num <= 10){
        subcharge += 1;
    }
    else if (num > 10){
        subcharge += 2;
    }

    if (num1 <= 10){
        subcharge += 1;
    }
    else if (num1 > 10){
        subcharge +=2;
    }
    return subcharge
}

document.write("<h3>subcharge: </h3>", addWithSubcharge(num,num1));