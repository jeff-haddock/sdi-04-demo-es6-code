let fruitJuicer = function(fruit1, fruit2){
    console.log("You made " + fruit1 + fruit2 + " Juice.");
}
fruitJuicer("Orange", "Mango");

//convert this to an arrow function!!
let fruitJuicerArrow = (fruit1, fruit2) => {
    console.log("You made " + fruit1 + fruit2 + " Juice.");
}
fruitJuicerArrow("Orange", "Mango");

let fruitJuicerArrow2 = (fruit1, fruit2) => console.log("You made " + fruit1 + fruit2 + " Juice!");
let result = fruitJuicerArrow2("Orange", "Mango");
console.log(result);

let multiplyBy2 = value => value*2;
console.log(multiplyBy2(5));
multiplyBy2(7);
