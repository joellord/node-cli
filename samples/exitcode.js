const randomNum = Math.round(Math.random());

if (randomNum === 0) {
  console.log("Operation was completed successfully");
  process.exit(randomNum);
}

console.log(`Error, code ${randomNum}`);
process.exit(randomNum);