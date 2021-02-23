// let getIngredients = () => {
//     console.log("i'm in the function");
//     return ["brocolli", "corn", "green beans"];
// }
// // var ingredients = getIngredients();
// // console.log(ingredients);
 var [ ingredientOne, ingredientTwo, ingredientThree, ingredientFour] = getIngredients();
// console.log(ingredientTwo, ingredientFour);

let myVegetableRecipe = {
    ingredients: ["broccoli", "corn", "broth"],
    directions: "Cook on med heat with 4 qtyz water for 7 hours."
}
let myMeatRecipe = {
    ingredient: ["tempeh"],
    directions: "Cook on med heat with 4 qtyz water for 7 hours."
}
// let { 
//     ingredients,
//     directions
// } = myVegetableRecipe;
// console.log(ingredients);
let printMyRecipe = ({ingredients, directions }) => {
    console.log(ingredients);
    console.log("Directions: " + directions);
}
printMyRecipe(myVegetableRecipe);
printMyRecipe(myMeatRecipe);
