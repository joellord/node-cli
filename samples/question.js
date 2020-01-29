const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Hey there! What's your name? ", (answer) => {
  console.log(`Hello ${answer}`);

  rl.close();
});
