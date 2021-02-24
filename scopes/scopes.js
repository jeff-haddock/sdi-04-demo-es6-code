

var cat = {
    catName: "Lucy",
    color: "striped",
    printInfo: function(){
        console.log(`Name ${this.catName}, "Color": ${this.color}`);
        
        nestedFunction = function(){
            console.log(`Name ${catName}, Color: ${color}`);
        }
        nestedFunction();
    }
}
cat.printInfo();

let multiplierArrow = (multiplierAmount) => {
    return (multiplyBy) => multiplierAmount * multiplyBy;
}
let multiplyBy10 = multiplierArrow(10);
console.log(multiplyBy10(5));


function multiplier(multiplierAmount){
    return function(multiplyBy){
        return multiplierAmount * multiplyBy;
    };
}
console.log(multiplier(5)(6));

var multiplyBy5 = multiplier(5);
console.log(multiplyBy5);
console.log(multiplyBy5(6));

var multiplyBy30 = multiplier(30);
console.log(multiplyBy30(5));


