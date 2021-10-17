//console.log("this file is created using npm");

const operatingSystem = require('os'); // in built module
const fs = require("fs"); // in built module
const path = require("path"); // in built module
const http = require("http"); // in built module
const url = require("url"); // in built module
const sum = require("./sum"); // user defined module
const express = require("express"); // npm module



console.log("Architecture : " + operatingSystem.arch());
console.log("Realse : " + operatingSystem.release());
console.log("Platform : " + operatingSystem.platform());

fs.writeFileSync("testData.txt", "I like NodeJS");

const location = '/Users/abhisheksaini/Documents/Edureka\ Batches/Batch\ Node\ 16\ Oct\ 2021/class_16_Oct_2021/notes.txt';
console.log("Directory: " + path.dirname(location));
console.log("Extension: " + path.extname(location));
console.log("Base: " + path.basename(location));

const buf1 = Buffer.from([1,2,3,4,5,6]);
const buf2 = Buffer.from(['a', 'b', 'c']);

console.log("To String: ", buf1.toString());
console.log("Compare: ", Buffer.compare(buf1, buf2));
console.log("Wether equal: ", buf1.equals(buf2));

const address = "https://learning.edureka.co/classroom/presentation/843/7819/142438?tab=CourseContent&batchId=20707";
const q = url.parse(address, true);
console.log("Host : " + q.host);
console.log("Path : " + q.pathname);
console.log("QueryParams : " + q.search);
console.log("Protocol : " + q.protocol);

console.log("Sum of 10 and 20 is : " + sum(10, 20));




// http.createServer((request, response) => {
//     const url = request.url;
//     response.writeHead(200);
//     if (url == '/login') {
//         response.write("Welcome to the application");
//     }
//     if (url == '/products') {
//         response.write("Here is the list of products : apple, orange, car" );
//     } 
//     if (url == '/logout') {
//         response.write("You are logged out, Bye");
//     } 
//     if (url == "/") {
//         response.write("Please send a valid request");
//     }
//     response.end();
// }).listen(3300);

const port = 3400;
const app = express();
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});


