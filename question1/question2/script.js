num = parseInt(prompt("enter first number"));

num1 = parseInt(prompt("enter second number"));

checkIfOneNumberIsPostiveAndTheOtherNegative(num, num1)

function checkIfOneNumberIsPostiveAndTheOtherNegative(num, num1) {
    document.write("<h2>Question Two</h2>");

    let bool = false;

    if ((num > 0) || (num < 0)) {

        if (num > 0) {
            bool = true;
        }

        document.write("<h4>first number: checked!</h4>"); 
    } 

    if ((bool == false) && (num1 > 0)) {
        document.write("<h3>second number: checked!</h3>"); 
        document.write("<h3>True!</h3>"); 
    } else if ((bool == true) && (num1 < 0)) {
        document.write("<h3>second number: checked!</h3>"); 
        document.write("<h3>True!</h3>"); 
    } else {
        document.write("<h3>second number: unchecked!</h3>");
        document.write("<h3>False!</h3>");  
    }
}

document.write("<h3>checkIfOneNumberIsNegativeAndTheOtherIsPositive </h3>",(num, num1));



    