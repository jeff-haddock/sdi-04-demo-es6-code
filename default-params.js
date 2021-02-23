

var generateAddress = (city, state, country) => {
    var resultingCountry = country === undefined ? "USA" : country;
    console.log(city + ", " + state + ", " + resultingCountry);
}
generateAddress("Springfield", "IL");
generateAddress("St. Augustine", "FL", "Mexico");

var generateAddress2 = (city = "Ontario", state, country = "USA") => {
    console.log(city + ", " + state + ", " + country);
}
generateAddress2(undefined, "IL");
generateAddress2("St. Augustine", "FL", "Mexico");