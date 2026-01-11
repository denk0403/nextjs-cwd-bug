/**
 * Webpack loader that generates fake module content based on query parameter.
 * Import "fake-module-{number}" to get `export const value = {number}`
 */
module.exports = function (source) {
	const match = this.resourceQuery.match(/^\?(\d+)$/);
	let result = "";
	for (let i = 0; i < 300; i++) {
		result += `export function fakeFunction${i}() { return ${i}; }\n`;
	}

	if (match) {
		result += `export const value = ${match[1]};`;
	}

	return result;
};
