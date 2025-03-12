const greeting = require("./greet");

function logMessage() {
    console.log(greeting);
}

setInterval(logMessage, 2000);