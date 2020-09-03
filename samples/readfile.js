const fs = require("fs");

const readFilePromisified = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(data);
    });
  });
}

readFilePromisified("hello.txt")
  .then(data => data.toString())
  .then(data => console.log(data));