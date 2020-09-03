const arguments = process.argv.slice(2);

let checkNext = false;
let args = {};

for (let i = 0; i < arguments.length; i++) {
	let isShort = false;
	let isLong = false;
	// check if this is short, long or something
	if (arguments[i].startsWith("-") && !arguments[i].startsWith("--")) {
		isShort = true;
	}
	if (arguments[i].startsWith("--")) {
		isLong = true;
	}

	if (!isLong && !isShort && checkNext) {
		checkNext = false;
		args[arguments[i-1].replace("-", "")] = arguments[i];
	}

	if (isLong || isShort) {
		checkNext = true;
		args[arguments[i].replace("-", "")] = true;
	}

	if (!isLong && !isShort && !checkNext) {
		args["default"] = arguments[i];
	}
}

console.log(args);