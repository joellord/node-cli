let string = "Hello, this is someone typing. Haha! Fooled you!";
let chars = 0;
const INVALID = 0.1;
const TYPING_SPEED = 100;
const TYPING_DIFF = 60
for(let i = 0; i < string.length; i++) {

  if (Math.random() < INVALID) {
    setTimeout(() => {
      process.stdout.write(string.substr(i, 1));
    }, (TYPING_SPEED * chars) + (Math.random()*TYPING_DIFF) * 2);
    chars++;
    setTimeout(() => {
      process.stdout.write("\b");
    }, (TYPING_SPEED * chars) + (Math.random() * TYPING_DIFF));
    chars++;    
  }
  setTimeout(() => {
    process.stdout.write(string.substr(i, 1));
  }, (TYPING_SPEED * chars) + (Math.random()*TYPING_DIFF));
  chars++;
}

setTimeout(() => {
  process.stdout.write("\n");
}, TYPING_SPEED * chars);