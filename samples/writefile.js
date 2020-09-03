const fs = require("fs");
const arguments = process.argv.slice(2);

if (arguments.length === 0) {
  console.log("🛑 Argument missing");
  process.exit(1);
}

fs.writeFile("./hello.txt", `Hello ${arguments[0]}`, (err) => {
  if (err) {process.exit(2);}
  console.log("👍 Successfully wrote to file");
});