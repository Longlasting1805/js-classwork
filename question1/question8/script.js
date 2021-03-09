let array = new Array();

bool = true;

document.write("<h2>Question Eight</h2>");

do{
    num = parseInt(prompt("enter number or -1 to break: "));

    if (num != -1){
        array.push(num);
    }
    else{
        bool = false;
    }

}while(bool);
document.write("<h3>first element: </h3>", array.shift());