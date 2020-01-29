// Running the "typing.js" sample and getting the live output
const { spawn } = require("child_process");

child = spawn("node", ["./samples/typing"]);

child.stdout.pipe(process.stdout);

child.on("exit", code => {
  console.log(code);
});