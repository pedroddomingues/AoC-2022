import * as fs from "fs";
import * as path from "path";

let input = fs.readFileSync(path.resolve(__dirname, "input.txt"), "utf8");

let rounds = input.split("\n");
let total_first = 0;
let total_second = 0;

for (let round of rounds) {
	const round_arr = round.split(" ");
	let points: number;
	const diff = round_arr[1].charCodeAt(0) - round_arr[0].charCodeAt(0) - 23;
	switch (diff) {
		case 0:
			points = 3;
			break;
		case 1:
		case -2:
			points = 6;
			break;
		case 2:
		case -1:
			points = 0;
			break;
	}
	switch (round_arr[1]) {
		case "X":
			points += 1;
			break;
		case "Y":
			points += 2;
			break;
		case "Z":
			points += 3;
			break;
	}
	total_first += points;
}

for (let round of rounds) {
	const round_arr = round.split(" ");
	let points: number;
	switch (round_arr[1]) {
		case "X":
			points = 0;
			points += [3, 1, 2][round_arr[0].charCodeAt(0) - 65];
			break;
		case "Y":
			points = 3;
			points += [1, 2, 3][round_arr[0].charCodeAt(0) - 65];
			break;
		case "Z":
			points = 6;
			points += [2, 3, 1][round_arr[0].charCodeAt(0) - 65];
			break;
	}
	total_second += points;
}

export default { first_part: total_first, second_part: total_second };
