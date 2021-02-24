

let myDogs = ["Moki", "Fat-Sam"];
var someDogs = ["Fido", "Lucky"];
//console.log(someDogs, myDogs);

let addingDogs = (myDogArray) => {
    someDogs = [...someDogs, ...myDogArray];
    return someDogs;
}
let resultingDogList = addingDogs(myDogs);
//console.log(resultingDogList);


//this is a spread being used in a new array
//FIdo Lucky, Moki, Fat-Sam
let pettingSomeDogs = ([firstDog, secondDog, ...theRestOfTheDogs]) =>
{
    console.log(theRestOfTheDogs);
}
pettingSomeDogs(resultingDogList);
