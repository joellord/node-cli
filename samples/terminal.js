const spawn = require("child_process").spawn;
const child = spawn("/bin/bash", [], {
  cwd: process.cwd(),
  detached: true,
});
process.stdin.pipe(child.stdin);
child.stdout.on("readable", () => {
  process.stdout.write("--- Result from latest command --- \n");
  let char = child.stdout.read();
  process.stdout.write(char.toString());
})
