const fs = require('fs');

const filePath = 'example.txt';

fs.writeFileSync(filePath, 'Hello, this is the initial content.\n', 'utf8');
console.log('File created and initial content written.');

fs.appendFileSync(filePath, 'Appending more text to the file.\n', 'utf8');
console.log('Additional content appended.');

const fileContent = fs.readFileSync(filePath, 'utf8');
console.log('File Content:\n', fileContent);
