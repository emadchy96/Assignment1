/*********************************************************************************
* WEB700 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Emad Chowdhury Student ID: 161788237 Date: 13 May 2024
*
********************************************************************************/

// Step 1 & 2
console.log('Hello World!');

//Step 3
const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
  "Welcome to WEB700 Assignment 1",
  "This assignment was prepared by Emad Chowdhury",
  "Student Name: Emad Chowdhury Student Email: echowdhury7@myseneca.ca",
  "User Logged In",
  "Main Panel",
  "Logout Complete"
];

//Step 4
function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
      if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
        return `200: ${serverResponses[i]}`;
      }
    }
    return `404: Unable to process ${httpVerb} request for ${path}`;
  }
  
  //Step 5 Manual Testing

console.log(httpRequest("GET", "/")); 
console.log(httpRequest("GET", "/about"));
console.log(httpRequest("POST","/logout"));
console.log(httpRequest("GET","/login"));
console.log(httpRequest("PUT", "/"));



//Step 6 automation testing

//random integer 

function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Define the automateTests function
function automateTests() {
  const testVerbs = ["GET", "POST"];
  const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

  //Preparing a random request
  function randomRequest() {
    const randVerb = testVerbs[getRandomInt(1)];
    const randPath = testPaths[getRandomInt(7)];
    
    //the random result from http request function
    const result = httpRequest(randVerb, randPath);
    
    //Showing the output
    console.log(result);
  }

  //Interval of one second between each testing
  setInterval(randomRequest, 1000);
}

automateTests();