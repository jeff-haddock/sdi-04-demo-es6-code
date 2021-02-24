
const apples = "apples";
console.log(apples);

var oranges = "oranges";
function printOranges() {
    oranges = "bananas";
    console.log(oranges);
}
printOranges();
console.log(oranges);

var bananas = "bananas";
//let bananas = "oranges";
if(bananas == "bananas"){
    var bananas = "oranges";
    console.log(bananas);
}
console.log(bananas);
