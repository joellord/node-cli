const spawn = require("child_process").spawn;
const child = spawn("/bin/bash", [], {
  cwd: process.cwd(),
  detached: true,
});
process.stdin.pipe(child.stdin);
child.stdout.on("readable", () => {
  let char = child.stdout.read();
  if (char.toString() === "\n") console.log("ENTER");
  process.stdout.write(char.toString());

})
