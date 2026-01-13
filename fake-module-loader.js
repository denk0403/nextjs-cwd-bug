/** Webpack loader that generates a fake module. */
module.exports = function () {
	let result = "";
	for (let i = 0; i < 300; i++) {
		result += `export function fakeFunction${i}() { return ${i}; }\n`;
	}
	return result;
};
