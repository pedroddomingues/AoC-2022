import * as fs from 'fs';

const days = fs.readdirSync('./puzzles');

const get_results = async () => {
	for (const day of days) {
		console.log(`The solution of ${day} challenge is:`)
		const result = await import(`./puzzles/${day}/solution.ts`);
		console.log(result.default);
	}
}

get_results();
