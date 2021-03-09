let sideOneLenght = parseInt(prompt("enter side one lenght number"))
let sideTwoLenght = parseInt(prompt("enter side two lenght number"))
let sideThreeLenght = parseInt(prompt("enter side three lenght number"))

function findAreaOfScaleneTriangle(sideOneLenght, sideTwoLenght, sideThreeLenght){
    document.write("<h2>Question Three</h2>");

    let area = (sideOneLenght + sideTwoLenght + sideThreeLenght) /2
    area = area * ((area - sideOneLenght) * (area - sideTwoLenght) * (area - sideThreeLenght))

    return Math.sqrt(area);

}
document.write("<h3>area of scalene triangle: </h3>", findAreaOfScaleneTriangle(sideOneLenght, sideTwoLenght, sideThreeLenght));