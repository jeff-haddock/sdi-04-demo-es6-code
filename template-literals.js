

let generateAddress = (city, state, country = "USA") => {
    console.log(city + ", " + state + ", " + country); 
}

let generateAddress2 = (city, state, country = "USA") => {
    console.log(`${city}, ${state}, ${country}`)
}

generateAddress("Springfield", "IL");
generateAddress2("Springfield", "IL");

generateAddress("St. Augustine", "FL", "Mexico");
generateAddress2("St. Augustine", "FL", "Mexico");

var message = { 
    myMessage: "my message"
}
console.log(message)
var html = [
    '<div>', 
    '  <span>',
    message.myMessage,
    '  </span>',
    '</div>'
].join('\n');

var html2 = 
`<div>
   <span>
     ${message.myMessage}
   </span>
 </div>
`
console.log("Html1: ", html);
console.log("html2: ", html2);



